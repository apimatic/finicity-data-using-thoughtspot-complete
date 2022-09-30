/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { BorrowerTypeEnum, borrowerTypeEnumSchema } from './borrowerTypeEnum';
import {
  OptionalConsumerInformation,
  optionalConsumerInformationSchema,
} from './optionalConsumerInformation';

export interface Borrowers {
  /** Customer ID from the [Add Customer API]( https://api-reference.finicity.com/#/rest/api-endpoints/customer/add-customer) */
  customerId: string;
  /** Consumer ID from the [Create Consumer API]( https://api-reference.finicity.com/#/rest/api-endpoints/consumer/create-consumer) */
  consumerId: string;
  /** (MVS) Borrower type: `primary` or `jointBorrower` */
  type: BorrowerTypeEnum;
  /** (MVS-Optional) Optional consumer information such as the consumer’s SSN and DOB. Use to prepopulate the consumer’s SSN (only the last 4 digits appear) and DOB on the Find employment records page at the beginning of the MVS payroll module. */
  optionalConsumerInfo?: OptionalConsumerInformation;
  [key: string]: unknown;
}

export const borrowersSchema: Schema<Borrowers> = expandoObject({
  customerId: ['customerId', string()],
  consumerId: ['consumerId', string()],
  type: ['type', borrowerTypeEnumSchema],
  optionalConsumerInfo: [
    'optionalConsumerInfo',
    optional(lazy(() => optionalConsumerInformationSchema)),
  ],
});
