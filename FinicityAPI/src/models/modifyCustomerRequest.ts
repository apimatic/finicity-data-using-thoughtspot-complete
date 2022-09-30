/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** The fields to be modified for a customer record */
export interface ModifyCustomerRequest {
  /** The first name associated with the customer */
  firstName: string;
  /** The last name associated with the customer */
  lastName: string;
  [key: string]: unknown;
}

export const modifyCustomerRequestSchema: Schema<ModifyCustomerRequest> = expandoObject(
  { firstName: ['firstName', string()], lastName: ['lastName', string()] }
);
