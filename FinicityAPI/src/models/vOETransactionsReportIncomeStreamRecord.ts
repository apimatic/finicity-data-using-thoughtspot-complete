/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  expandoObject,
  lazy,
  number,
  Schema,
  string,
} from '../schema';
import { CadenceDetails, cadenceDetailsSchema } from './cadenceDetails';
import {
  EstimateInclusionEnum,
  estimateInclusionEnumSchema,
} from './estimateInclusionEnum';
import { StatusEnum, statusEnumSchema } from './statusEnum';
import {
  VOETReportTransactionsForIncomeStreams,
  vOETReportTransactionsForIncomeStreamsSchema,
} from './vOETReportTransactionsForIncomeStreams';

export interface VOETransactionsReportIncomeStreamRecord {
  /** Finicity’s income stream ID */
  id: string;
  /** A human-readable name based on the normalizedPayee name of the transactions for this income stream */
  name: string;
  /** active or inactive */
  status: StatusEnum;
  estimateInclusion: EstimateInclusionEnum;
  /** Level of confidence that the deposit stream represents income (example: 85%) */
  confidence: number;
  cadence: CadenceDetails;
  /** The number of days since the last credit transaction for the particular income stream */
  daysSinceLastTransaction: number;
  /** The next expected credit transaction date for the particular income stream, based on the cadence */
  nextExpectedTransactionDate: bigint;
  /** The number of months the income transactions are observed */
  incomeStreamMonths: number;
  /** A list of transaction records */
  transactions: VOETReportTransactionsForIncomeStreams[];
  [key: string]: unknown;
}

export const vOETransactionsReportIncomeStreamRecordSchema: Schema<VOETransactionsReportIncomeStreamRecord> = expandoObject(
  {
    id: ['id', string()],
    name: ['name', string()],
    status: ['status', statusEnumSchema],
    estimateInclusion: ['estimateInclusion', estimateInclusionEnumSchema],
    confidence: ['confidence', number()],
    cadence: ['cadence', lazy(() => cadenceDetailsSchema)],
    daysSinceLastTransaction: ['daysSinceLastTransaction', number()],
    nextExpectedTransactionDate: ['nextExpectedTransactionDate', bigint()],
    incomeStreamMonths: ['incomeStreamMonths', number()],
    transactions: [
      'transactions',
      array(lazy(() => vOETReportTransactionsForIncomeStreamsSchema)),
    ],
  }
);
