/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface CAAnalyticIdsForACustomer {
  /** Analytic ID for a customer. */
  analyticIds: string;
  /** The date that the report was generated. */
  createDate: string;
  [key: string]: unknown;
}

export const cAAnalyticIdsForACustomerSchema: Schema<CAAnalyticIdsForACustomer> = expandoObject(
  {
    analyticIds: ['analytic_ids', string()],
    createDate: ['create_date', string()],
  }
);