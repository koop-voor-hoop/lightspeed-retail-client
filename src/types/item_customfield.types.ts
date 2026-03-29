import type z from 'zod';
import type {
  itemCustomFieldChoiceSchema,
  itemCustomFieldMutationSchema,
  itemCustomFieldResponseSchema,
  itemCustomFieldSchema,
  itemCustomFieldsResponseSchema,
  itemCustomFieldTypeSchema,
  itemCustomFieldValueSchema,
} from '../schemas';

export type ItemCustomFieldType = z.infer<typeof itemCustomFieldTypeSchema>;
export type ItemCustomFieldChoice = z.infer<typeof itemCustomFieldChoiceSchema>;
export type ItemCustomFieldValue = z.infer<typeof itemCustomFieldValueSchema>;
export type ItemCustomField = z.infer<typeof itemCustomFieldSchema>;
export type ItemCustomFieldResponse = z.infer<typeof itemCustomFieldResponseSchema>;
export type ItemCustomFieldsResponse = z.infer<typeof itemCustomFieldsResponseSchema>;
export type ItemCustomFieldMutation = z.infer<typeof itemCustomFieldMutationSchema>;
