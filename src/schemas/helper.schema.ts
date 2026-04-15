import z from 'zod';

export const integerLikeSchema = z.union([
  z.number().int(),
  z
    .string()
    .regex(/^-?\d+$/)
    .transform((value) => Number.parseInt(value, 10)),
]);

export const numberLikeSchema = z.union([
  z.number(),
  z
    .string()
    .regex(/^-?\d+(\.\d+)?$/)
    .transform((value) => Number.parseFloat(value)),
]);

export const booleanLikeSchema = z.union([
  z.boolean(),
  z.enum(['true', 'false']).transform((value) => value === 'true'),
]);

export const unknownRelationSchema = z.record(z.string(), z.any());

export const oneOrMany = <TSchema extends z.ZodTypeAny>(schema: TSchema) => {
  return z.union([schema.transform((value) => [value]), z.array(schema)]);
};
