/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  lazy,
  Schema,
  string,
} from '../schema';
import {
  GenerateStatementReportConstraints,
  generateStatementReportConstraintsSchema,
} from './generateStatementReportConstraints';

export interface StatementReportRecord {
  /** The Finicity report ID */
  id: string;
  /** Finicity Internal Use Only */
  gseEnabled: boolean;
  /** Customer type */
  customerType: string;
  /** Finicity ID for the customer */
  customerId: bigint;
  /** Unique requestId for this specific call request */
  requestId: string;
  /** Title of the report */
  title: string;
  /** Finicity report consumer ID (max length 32 characters) */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number */
  consumerSsn: string;
  /** Name of Finicity partner requesting the report */
  requesterName: string;
  constraints: GenerateStatementReportConstraints;
  /** Report type */
  type: string;
  /** inProgress, success, or failure */
  status: string;
  /** The date the report was generated */
  createdDate: bigint;
  /** The asset ID of the statement that was retrieved. */
  assetId: string;
  [key: string]: unknown;
}

export const statementReportRecordSchema: Schema<StatementReportRecord> = expandoObject(
  {
    id: ['id', string()],
    gseEnabled: ['gseEnabled', boolean()],
    customerType: ['customerType', string()],
    customerId: ['customerId', bigint()],
    requestId: ['requestId', string()],
    title: ['title', string()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    requesterName: ['requesterName', string()],
    constraints: [
      'constraints',
      lazy(() => generateStatementReportConstraintsSchema),
    ],
    type: ['type', string()],
    status: ['status', string()],
    createdDate: ['createdDate', bigint()],
    assetId: ['assetId', string()],
  }
);