import { requestJson } from '../api';
import { imageResponseSchema, imagesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ImageMutation,
  ImageResponse,
  ImagesResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<'Item' | 'ItemMatrix', 'imageID'>;

type RelationParams = Pick<EndpointParams, 'load_relations'>;

type ImageId = { imageID: `${number}` | number };
type IntegerId = `${number}` | number;

type ImageTarget =
  | {
      itemID: IntegerId;
      itemMatrixID?: IntegerId;
    }
  | {
      itemID?: IntegerId;
      itemMatrixID: IntegerId;
    };

export type ImageUpload = {
  image: Blob;
  filename?: string;
  description?: string;
  ordering?: IntegerId;
} & ImageTarget;

/** Lists images with optional relation loading, sorting, and pagination. */
export const getImages = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ImagesResponse> => {
  return requestJson(
    `Account/${accountID}/Image.json`,
    {
      accessToken,
      params,
    },
    imagesResponseSchema,
  );
};

/** Retrieves a single image by image ID. */
export const getImage = async ({
  accessToken,
  accountID,
  imageID,
  ...params
}: AccessToken & AccountId & ImageId & RelationParams): Promise<ImageResponse> => {
  return requestJson(
    `Account/${accountID}/Image/${imageID}.json`,
    {
      accessToken,
      params,
    },
    imageResponseSchema,
  );
};

/** Uploads an image and metadata to the image endpoint using multipart form data. */
export const createImage = async ({
  accessToken,
  accountID,
  image,
  filename,
  ...metadata
}: AccessToken & AccountId & ImageUpload): Promise<ImageResponse> => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(metadata));

  if (filename) {
    formData.append('image', image, filename);
  } else {
    formData.append('image', image);
  }

  return requestJson(
    `Account/${accountID}/Image.json`,
    {
      method: 'POST',
      accessToken,
      body: formData,
    },
    imageResponseSchema,
  );
};

/** Updates metadata for an existing image by image ID. */
export const updateImage = async ({
  accessToken,
  accountID,
  imageID,
  ...imageData
}: AccessToken & AccountId & ImageId & ImageMutation): Promise<ImageResponse> => {
  return requestJson(
    `Account/${accountID}/Image/${imageID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: imageData,
    },
    imageResponseSchema,
  );
};

/** Deletes an image by image ID. */
export const deleteImage = async ({
  accessToken,
  accountID,
  imageID,
}: AccessToken & AccountId & ImageId): Promise<ImageResponse> => {
  return requestJson(
    `Account/${accountID}/Image/${imageID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    imageResponseSchema,
  );
};
