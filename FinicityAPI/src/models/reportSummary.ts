/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  ReportConstraints,
  reportConstraintsSchema,
} from './reportConstraints';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface ReportSummary {
  /** The Finicity report ID */
  id: string;
  /** Finicity ID for the consumer */
  consumerId: string;
  /** Last 4 digits of the report consumer's Social Security number */
  consumerSsn: string;
  /** Name of Finicity partner requesting the report */
  requesterName: string;
  /** The unique requestId for this specific call request */
  requestId: string;
  constraints: ReportConstraints;
  /** Report type */
  type: TypeEnum;
  /** inProgress, success, or failure */
  status: string;
  /** The date the report was generated */
  createdDate: bigint;
  [key: string]: unknown;
}

export const reportSummarySchema: Schema<ReportSummary> = expandoObject({
  id: ['id', string()],
  consumerId: ['consumerId', string()],
  consumerSsn: ['consumerSsn', string()],
  requesterName: ['requesterName', string()],
  requestId: ['requestId', string()],
  constraints: ['constraints', lazy(() => reportConstraintsSchema)],
  type: ['type', typeEnumSchema],
  status: ['status', string()],
  createdDate: ['createdDate', bigint()],
});
