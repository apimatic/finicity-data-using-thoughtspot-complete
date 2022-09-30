/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, unknown } from '../schema';

export interface ConsumerAttributesDataNSF {
  /** The number of non-sufficient funds occurrences per calendar month. */
  monthlyNSFOccurrences?: unknown;
  /** The number of late fee occurrences. */
  monthlyLateFeeOccurrences?: unknown;
  [key: string]: unknown;
}

export const consumerAttributesDataNSFSchema: Schema<ConsumerAttributesDataNSF> = expandoObject(
  {
    monthlyNSFOccurrences: ['monthlyNSFOccurrences', unknown()],
    monthlyLateFeeOccurrences: ['monthlyLateFeeOccurrences', unknown()],
  }
);
