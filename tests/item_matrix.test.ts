import { beforeAll, describe, expect, it } from 'bun:test';
import { getItemMatrices, getItemMatrix, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item matrix read - Integration Tests', () => {
  const itemMatrixRelations = [
    'Items',
    'Images',
    'ItemAttributeSet',
    'Category',
    'TaxClass',
    'Department',
    'Manufacturer',
    'Season',
    'TagRelations',
    'TagRelations.Tag',
  ] as const;

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

  it('should list item matrices with a valid access token and account id', async () => {
    const response = await getItemMatrices({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemMatrixID',
    });

    expect(response).toBeDefined();
    expect(
      response.ItemMatrix === undefined || Array.isArray(response.ItemMatrix) || !!response.ItemMatrix,
    ).toBe(true);
  });

  for (const relation of itemMatrixRelations) {
    it(`should support loading ${relation} relation`, async () => {
      const response = await getItemMatrices({
        accessToken: accessToken!,
        accountID: accountID!,
        limit: 10,
        sort: 'itemMatrixID',
        load_relations: [relation],
      });

      expect(response).toBeDefined();
      expect(
        response.ItemMatrix === undefined || Array.isArray(response.ItemMatrix) || !!response.ItemMatrix,
      ).toBe(true);
    });
  }

  it('should support loading multiple item matrix relations in one request', async () => {
    const response = await getItemMatrices({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemMatrixID',
      load_relations: ['Items', 'Images', 'ItemAttributeSet', 'Category', 'TaxClass'],
    });

    expect(response).toBeDefined();
  });

  it('should get a single item matrix by id when matrices exist', async () => {
    const listResponse = await getItemMatrices({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'itemMatrixID',
    });

    const matrices = Array.isArray(listResponse.ItemMatrix)
      ? listResponse.ItemMatrix
      : listResponse.ItemMatrix
        ? [listResponse.ItemMatrix]
        : [];

    if (matrices.length === 0) {
      console.log('Skipping single item matrix read test: account has no matrices');
      expect(true).toBe(true);
      return;
    }

    const firstMatrix = matrices[0];
    if (!firstMatrix) {
      expect.unreachable('Expected at least one matrix after non-empty guard');
      return;
    }

    const itemMatrixID = firstMatrix.itemMatrixID;
    const matrixResponse = await getItemMatrix({
      accessToken: accessToken!,
      accountID: accountID!,
      itemMatrixID,
      load_relations: ['ItemAttributeSet'],
    });

    expect(matrixResponse.ItemMatrix.itemMatrixID).toBe(itemMatrixID);
    expect(
      matrixResponse.ItemMatrix.ItemAttributeSet === undefined ||
        !!matrixResponse.ItemMatrix.ItemAttributeSet,
    ).toBe(true);
  });

  it('should fail gracefully for a non-existent item matrix id', async () => {
    const missingItemMatrixId = 999999999;

    try {
      await getItemMatrix({
        accessToken: accessToken!,
        accountID: accountID!,
        itemMatrixID: missingItemMatrixId,
      });
      expect.unreachable('Should have thrown an error for non-existent item matrix id');
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
