/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  VOIETxverifyReportAccount,
  vOIETxverifyReportAccountSchema,
} from './vOIETxverifyReportAccount';

export interface VOIETxverifyReportPayStatementsInstitution {
  /** The institution ID */
  id: bigint;
  /** The name of the institution */
  name: string;
  /** The URL of the institution’s primary home page */
  urlHomeApp: string;
  /** An array of accounts */
  accounts: VOIETxverifyReportAccount[];
  [key: string]: unknown;
}

export const vOIETxverifyReportPayStatementsInstitutionSchema: Schema<VOIETxverifyReportPayStatementsInstitution> = expandoObject(
  {
    id: ['id', bigint()],
    name: ['name', string()],
    urlHomeApp: ['urlHomeApp', string()],
    accounts: ['accounts', array(lazy(() => vOIETxverifyReportAccountSchema))],
  }
);
