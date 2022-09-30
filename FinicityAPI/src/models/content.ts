/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ReportCustomField1,
  reportCustomField1Schema,
} from './reportCustomField1';

export interface Content {
  reseller: string | null;
  resellerProvider: string | null;
  platformProvider: string | null;
  customerId: number;
  consumerId: string;
  consumerSsn: string;
  firstName: string;
  lastName: string;
  lastFourReportId: string;
  createdDate: number;
  reportType: string;
  reportCustomFields: ReportCustomField1[];
  status?: string;
  [key: string]: unknown;
}

export const contentSchema: Schema<Content> = expandoObject({
  reseller: ['reseller', nullable(string())],
  resellerProvider: ['resellerProvider', nullable(string())],
  platformProvider: ['platformProvider', nullable(string())],
  customerId: ['customerId', number()],
  consumerId: ['consumerId', string()],
  consumerSsn: ['consumerSsn', string()],
  firstName: ['firstName', string()],
  lastName: ['lastName', string()],
  lastFourReportId: ['lastFourReportId', string()],
  createdDate: ['createdDate', number()],
  reportType: ['reportType', string()],
  reportCustomFields: [
    'reportCustomFields',
    array(lazy(() => reportCustomField1Schema)),
  ],
  status: ['status', optional(string())],
});