/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Callback {
  /** The callback url for the events */
  callbackUrl?: string;
  /** The content type for the body of the events */
  contentType?: string;
  [key: string]: unknown;
}

export const callbackSchema: Schema<Callback> = expandoObject({
  callbackUrl: ['callbackUrl', optional(string())],
  contentType: ['contentType', optional(string())],
});
