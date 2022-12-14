/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema';
import {
  PortfolioConsumer,
  portfolioConsumerSchema,
} from './portfolioConsumer';
import { PortfolioReport, portfolioReportSchema } from './portfolioReport';

export interface PortfolioSummary {
  /** A unique identifier that will be consistent across all reports created for the same customer. */
  portfolioId: string;
  /** Information pertaining to the consumer */
  consumer: PortfolioConsumer;
  /** A list of reports in the portfolio */
  reports: PortfolioReport[];
  [key: string]: unknown;
}

export const portfolioSummarySchema: Schema<PortfolioSummary> = expandoObject({
  portfolioId: ['portfolioId', string()],
  consumer: ['consumer', lazy(() => portfolioConsumerSchema)],
  reports: ['reports', array(lazy(() => portfolioReportSchema))],
});
