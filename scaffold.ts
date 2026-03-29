import { readFile, writeFile } from "node:fs/promises";

const getName = () => {
    const name = process.argv.at(-1);
    
    if (!name || name.startsWith('--')) {
        console.error('Endpoint name is required');
        process.exit(1);
    }

    return name.trim().replace(/\s+/g, '_').toLowerCase();
};

const createFiles = async (name: string) => {
    await writeFile(`src/endpoints/${name}.ts`, '\n');
    await writeFile(`src/schemas/${name}.schema.ts`, 'import z from \'zod\';\n');
    await writeFile(`src/types/${name}.types.ts`, 'import type z from \'zod\';\n');
    await writeFile(`tests/${name}.test.ts`, 'import { beforeAll, describe, expect, it } from \'bun:test\';\n');

    console.log(`Created files for endpoint ${name}:`);
    console.log(`- src/endpoints/${name}.ts`);
    console.log(`- src/schemas/${name}.schema.ts`);
    console.log(`- src/types/${name}.types.ts`);
    console.log(`- tests/${name}.test.ts`);
};

const updateBarrel = async (directory: string, exportPath: string) => {
    const barrelPath = `src/${directory}/index.ts`;
    const barrelContent = await readFile(barrelPath, 'utf-8');
    const exportStatement = `export * from './${exportPath}';`;

    if (barrelContent.includes(exportStatement)) {
        return;
    }

    const exports = [
        ...barrelContent.split('\n'),
        exportStatement,
    ].sort().join('\n').trim() + '\n';

    await writeFile(barrelPath, exports);
};

const updateBarrels = async (name: string) => {
    await updateBarrel('endpoints', name);
    await updateBarrel('schemas', `${name}.schema`);
    await updateBarrel('types', `${name}.types`);
    console.log(`Updated barrel files to export ${name} endpoint, schema, and types`);
};

const name = getName();
await createFiles(name);
await updateBarrels(name);