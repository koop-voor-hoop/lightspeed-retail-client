import { requestJson } from '../api';
import { itemImageResponseSchema, itemImagesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ItemImageMutation,
  ItemImageResponse,
  ItemImagesResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<'Item', 'imageID' | 'timeStamp' | 'itemID'>;

type ImageId = { imageID: `${number}` | number };
type ItemId = { itemID: `${number}` | number };

export type ItemImageUpload = {
  image: Blob;
  filename?: string;
} & ItemImageMutation;

/** Lists images for an account with optional relation loading, sorting, and pagination. */
export const getItemImages = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ItemImagesResponse> => {
  return requestJson(
    `Account/${accountID}/Image.json`,
    {
      accessToken,
      params,
    },
    itemImagesResponseSchema,
  );
};

/** Retrieves a single image by image ID. */
export const getItemImage = async ({
  accessToken,
  accountID,
  imageID,
}: AccessToken & AccountId & ImageId): Promise<ItemImageResponse> => {
  return requestJson(
    `Account/${accountID}/Image/${imageID}.json`,
    {
      accessToken,
    },
    itemImageResponseSchema,
  );
};

/** Uploads an image to a specific item using multipart form data. */
export const createItemImage = async ({
  accessToken,
  accountID,
  itemID,
  image,
  filename,
  ...metadata
}: AccessToken & AccountId & ItemId & ItemImageUpload): Promise<ItemImageResponse> => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(metadata));

  if (filename) {
    formData.append('image', image, filename);
  } else {
    formData.append('image', image);
  }

  return requestJson(
    `Account/${accountID}/Item/${itemID}/Image.json`,
    {
      method: 'POST',
      accessToken,
      body: formData,
    },
    itemImageResponseSchema,
  );
};

/** Updates metadata for an existing image by image ID. */
export const updateItemImage = async ({
  accessToken,
  accountID,
  imageID,
  ...image
}: AccessToken & AccountId & ImageId & ItemImageMutation): Promise<ItemImageResponse> => {
  return requestJson(
    `Account/${accountID}/Image/${imageID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: image,
    },
    itemImageResponseSchema,
  );
};

/** Deletes an image by image ID. */
export const deleteItemImage = async ({
  accessToken,
  accountID,
  imageID,
}: AccessToken & AccountId & ImageId): Promise<ItemImageResponse> => {
  return requestJson(
    `Account/${accountID}/Image/${imageID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    itemImageResponseSchema,
  );
};
