export interface QueryData {
  data: any;
  [key: string]: unknown;
}

export function isQueryData(data: unknown): data is QueryData {
  return typeof data === 'object' && data !== null && 'data' in data;
}