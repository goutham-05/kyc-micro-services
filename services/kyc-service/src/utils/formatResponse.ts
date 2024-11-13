// src/utils/formatResponse.ts
export const formatResponse = (statusCode: number, body: unknown) => ({
  statusCode,
  body: JSON.stringify(body),
});
