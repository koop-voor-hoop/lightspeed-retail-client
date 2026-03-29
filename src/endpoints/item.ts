import type { AccessToken, PaginationParams } from '../types/api.types';

type EndpointParams = PaginationParams<
  | 'Category'
  | 'TaxClass'
  | 'ItemAttributes'
  | 'ItemAttributes.ItemAttributeSet'
  | 'Manufacturer'
  | 'Note'
  | 'Images'
  | 'ItemShops'
  | 'ItemVendorNums'
  | 'ItemComponents'
  | 'ItemECommerce'
  | 'TagRelations'
  | 'TagRelations.Tag'
  | 'CustomFieldValues'
  | 'CustomFieldValues.value'
  | 'ItemPrices',
  'itemID' | 'timeStamp' | 'description'
>;

export const getItems = async (options: AccessToken & EndpointParams) => {};

getItems({
  accessToken: 'abc123',
  archived: 'false',
  sort: '-itemID',
});
