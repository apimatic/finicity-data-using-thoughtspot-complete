/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, optional, Schema, string } from '../schema';

export interface CreateConsumerResponse {
  /** Finicity ID of the consumer (UUID with max length 32 characters) */
  id?: string;
  /** Consumer created date */
  createdDate?: bigint;
  /** Finicity?s ID of the customer */
  customerId?: bigint;
  [key: string]: unknown;
}

export const createConsumerResponseSchema: Schema<CreateConsumerResponse> = expandoObject(
  {
    id: ['id', optional(string())],
    createdDate: ['createdDate', optional(bigint())],
    customerId: ['customerId', optional(bigint())],
  }
);
