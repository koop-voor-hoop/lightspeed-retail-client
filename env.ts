import { writeFile } from "node:fs/promises";
import { buildAuthorizationUrl, exchangeAuthorizationCodeForToken, refreshAccessToken } from "./src/auth";

const writeEnvFile = async ({
    clientId = Bun.env.CLIENT_ID || '',
    clientSecret = Bun.env.CLIENT_SECRET || '',
    scope = Bun.env.SCOPE || 'employee:all',
    state = Bun.env.STATE || 'cli-test',
    testAccessToken = Bun.env.TEST_ACCESS_TOKEN || '',
    testRefreshToken = Bun.env.TEST_REFRESH_TOKEN || '',
}: {
    clientId?: string;
    clientSecret?: string;
    scope?: string;
    state?: string;
    testAccessToken?: string;
    testRefreshToken?: string;
}) => {
    const envContent = [
        `CLIENT_ID=${clientId}`,
        `CLIENT_SECRET=${clientSecret}`,
        `SCOPE=${scope}`,
        `STATE=${state}`,
        `TEST_ACCESS_TOKEN=${testAccessToken}`,
        `TEST_REFRESH_TOKEN=${testRefreshToken}`
    ];
    await writeFile('.env', envContent.join('\n'));
};

const ensureEnvFileExists = async () => {
    if (!Bun.env.CLIENT_ID || !Bun.env.CLIENT_SECRET) {
        console.error('Missing environment variables: CLIENT_ID and/or CLIENT_SECRET');
        console.error('Please provide these values in a .env file or set them in your environment');
        await writeEnvFile({});
        process.exit(1);
    }
};

const tryTokenRefresh = async () => {
    if (Bun.env.CLIENT_ID && Bun.env.CLIENT_SECRET && Bun.env.TEST_REFRESH_TOKEN) {
        console.log('Retrieving new access token using refresh token...');
        const token = await refreshAccessToken({
            clientId: Bun.env.CLIENT_ID,
            clientSecret: Bun.env.CLIENT_SECRET,
            refreshToken: Bun.env.TEST_REFRESH_TOKEN,
        });
        await writeEnvFile({
            testAccessToken: token.access_token,
            testRefreshToken: token.refresh_token,
        });
        console.log('New access token saved to .env file');
        const validUntil = new Date(token.expires_in * 1000 + Date.now());
        console.log("Valid until:", validUntil);
        process.exit(0);
    }
};

const getToken = async () => {
    console.log('Setting up test access token:');
    const authUrl = buildAuthorizationUrl({
        clientId: Bun.env.CLIENT_ID!,
        scope: Bun.env.SCOPE!,
        state: Bun.env.STATE!,
    });
    console.log('1. Visit the following URL to authorize the application:');
    console.log(authUrl);
    console.log('2. After authorizing, you will be redirected to a URL with a code parameter.');
    console.log('3. Copy the value of the code parameter and paste it here:');

    const code = prompt('Enter the authorization code:');
    if (!code || code.length < 10) {
        console.error('Invalid authorization code');
        process.exit(1);
    }

    const token = await exchangeAuthorizationCodeForToken({
        clientId: Bun.env.CLIENT_ID!,
        clientSecret: Bun.env.CLIENT_SECRET!,
        code,
    });

    await writeEnvFile({
        testAccessToken: token.access_token,
        testRefreshToken: token.refresh_token,
    });

    console.log('Test access token saved to .env file');
};

await ensureEnvFileExists();
await tryTokenRefresh();
await getToken();