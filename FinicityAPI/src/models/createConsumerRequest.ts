/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Birthday, birthdaySchema } from './birthday';

export interface CreateConsumerRequest {
  /** The consumer first name(s) / given name(s) */
  firstName: string;
  /** The consumer last name(s) / surname(s) */
  lastName: string;
  /** The consumer’s street address */
  address: string;
  /** The consumer’s city */
  city: string;
  /** The consumer’s state */
  state: string;
  /** The consumer’s ZIP code */
  zip: string;
  /** The consumer’s phone number */
  phone: string;
  /** The consumer’s 9-digit Social Security number (may include separators: nnn-nn-nnnn) */
  ssn: string;
  /** The consumer birth date */
  birthday: Birthday;
  /** The consumer’s email address */
  email?: string;
  /** The consumer suffix */
  suffix?: string;
  [key: string]: unknown;
}

export const createConsumerRequestSchema: Schema<CreateConsumerRequest> = expandoObject(
  {
    firstName: ['firstName', string()],
    lastName: ['lastName', string()],
    address: ['address', string()],
    city: ['city', string()],
    state: ['state', string()],
    zip: ['zip', string()],
    phone: ['phone', string()],
    ssn: ['ssn', string()],
    birthday: ['birthday', lazy(() => birthdaySchema)],
    email: ['email', optional(string())],
    suffix: ['suffix', optional(string())],
  }
);
