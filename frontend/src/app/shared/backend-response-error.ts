import * as z from 'zod';

export const BackendResponseErrorSchema = z.object({
  body: z.string().nullable(),
  errorCode: z.string(),
  errorGroup: z.string().nullable(),
  message: z.string(),
  where: z.string().nullable(),
});

export type BackendResponseError = z.infer<typeof BackendResponseErrorSchema>;
