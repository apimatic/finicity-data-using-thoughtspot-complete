/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { ReportSummary, reportSummarySchema } from './reportSummary';

export interface ReportSummaries {
  /** Data pertaining to each report */
  reports: ReportSummary[];
  [key: string]: unknown;
}

export const reportSummariesSchema: Schema<ReportSummaries> = expandoObject({
  reports: ['reports', array(lazy(() => reportSummarySchema))],
});
