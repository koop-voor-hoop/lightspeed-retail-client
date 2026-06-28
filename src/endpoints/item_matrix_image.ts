import { requestJson } from '../api';
import { itemImageResponseSchema } from '../schemas';
import type { AccessToken, AccountId, ItemImageResponse } from '../types';
import type { ItemImageUpload } from './item_image';

type ItemMatrixId = { itemMatrixID: `${number}` | number };

/** Uploads an image to a specific item matrix using multipart form data. */
export const createItemMatrixImage = async ({
  accessToken,
  accountID,
  itemMatrixID,
  image,
  filename,
  ...metadata
}: AccessToken & AccountId & ItemMatrixId & ItemImageUpload): Promise<ItemImageResponse> => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(metadata));

  if (filename) {
    formData.append('image', image, filename);
  } else {
    formData.append('image', image);
  }

  return requestJson(
    `Account/${accountID}/ItemMatrix/${itemMatrixID}/Image.json`,
    {
      method: 'POST',
      accessToken,
      body: formData,
    },
    itemImageResponseSchema,
  );
};
