/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  Schema,
  string,
} from '../schema';
import {
  TransactionReportConstraints,
  transactionReportConstraintsSchema,
} from './transactionReportConstraints';
import {
  TransactionsReportInstitution,
  transactionsReportInstitutionSchema,
} from './transactionsReportInstitution';
import { TypeEnum, typeEnumSchema } from './typeEnum';

/** The fields used for the Transaction History Report (CRA products). */
export interface TransactionsReportRecord {
  /** The Finicity report ID (max 32 characters) */
  id: string;
  /** Finicity Transactions Report */
  title: string;
  /** active or testing */
  customerType: string;
  /** Finicity customer ID */
  customerId: bigint;
  /** Finicity report consumer ID (max length 32 characters). */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number. */
  consumerSsn: string;
  /** Report type */
  type: TypeEnum;
  /** inProgress or success or failure. */
  status: string;
  /** The date the report was generated. */
  createdDate: bigint;
  /** Specifies use of accountIds, reportCustomFields, includePending, fromDate, and toDate when creating the report. */
  constraints: TransactionReportConstraints;
  /** The postedDate of the earliest transaction analyzed for this report. */
  startDate: bigint;
  /** The postedDate of the latest transaction analyzed for this report. */
  endDate: bigint;
  /** Number of days covered by the report. */
  days: bigint;
  /** true: if the report covers more than 365 days. */
  seasoned: boolean;
  /** Finicity internal use only. */
  gseEnabled: boolean;
  /** Finicity’s portfolio ID associated with the consumer on the report. */
  portfolioId: string;
  /** A list of institution records, including information about the individual accounts used in this report. See the Institution Record structure. */
  institutions: TransactionsReportInstitution[];
  [key: string]: unknown;
}

export const transactionsReportRecordSchema: Schema<TransactionsReportRecord> = expandoObject(
  {
    id: ['id', string()],
    title: ['title', string()],
    customerType: ['customerType', string()],
    customerId: ['customerId', bigint()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    type: ['type', typeEnumSchema],
    status: ['status', string()],
    createdDate: ['createdDate', bigint()],
    constraints: [
      'constraints',
      lazy(() => transactionReportConstraintsSchema),
    ],
    startDate: ['startDate', bigint()],
    endDate: ['endDate', bigint()],
    days: ['days', bigint()],
    seasoned: ['seasoned', boolean()],
    gseEnabled: ['gseEnabled', boolean()],
    portfolioId: ['portfolioId', string()],
    institutions: [
      'institutions',
      array(lazy(() => transactionsReportInstitutionSchema)),
    ],
  }
);
