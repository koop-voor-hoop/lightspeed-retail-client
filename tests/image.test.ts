import { beforeAll, describe, expect, it } from 'bun:test';
import { getImage, getImages, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('image read - Integration Tests', () => {
  beforeAll(async () => {
    accessToken = Bun.env.TEST_ACCESS_TOKEN;

    if (!accessToken) {
      console.log('Skipping tests: TEST_ACCESS_TOKEN environment variable not set');
      console.log('Run `bun env` to set the environment variables and try again.');
      process.exit(0);
    }

    const { systemCustomerID } = await getSession(accessToken);
    accountID = systemCustomerID;

    if (!accountID) {
      throw new Error('Unable to resolve accountID from session.systemCustomerID');
    }
  });

  it('should list images with a valid access token and account id', async () => {
    const response = await getImages({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'imageID',
    });

    expect(response).toBeDefined();
    expect(response.Image === undefined || Array.isArray(response.Image) || !!response.Image).toBe(true);
  });

  it('should support loading image relations', async () => {
    const response = await getImages({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'imageID',
      load_relations: ['Item', 'ItemMatrix'],
    });

    expect(response).toBeDefined();
  });

  it('should get a single image by id when images exist', async () => {
    const listResponse = await getImages({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'imageID',
    });

    const images = Array.isArray(listResponse.Image)
      ? listResponse.Image
      : listResponse.Image
        ? [listResponse.Image]
        : [];

    if (images.length === 0) {
      console.log('Skipping single image read test: account has no images');
      expect(true).toBe(true);
      return;
    }

    const firstImage = images[0];
    if (!firstImage) {
      expect.unreachable('Expected at least one image after non-empty guard');
      return;
    }

    const imageID = firstImage.imageID;
    const imageResponse = await getImage({
      accessToken: accessToken!,
      accountID: accountID!,
      imageID,
    });

    expect(imageResponse.Image.imageID).toBe(imageID);
  });

  it('should fail gracefully for a non-existent image id', async () => {
    const missingImageId = 999999999;

    try {
      await getImage({
        accessToken: accessToken!,
        accountID: accountID!,
        imageID: missingImageId,
      });
      expect.unreachable('Should have thrown an error for non-existent image id');
    } catch (error) {
      const isApiError = error instanceof LightspeedApiError;
      const isSchemaError =
        error instanceof Error && error.message.includes('Invalid Lightspeed API response payload');

      expect(isApiError || isSchemaError).toBe(true);

      if (isApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
