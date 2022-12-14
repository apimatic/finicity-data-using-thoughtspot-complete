/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface PayrollData {
  /** The full SSN without hyphens that matches the consumer’s SSN. */
  ssn: string;
  /** The consumer’s date of birth is in Unix epoch time (in seconds).  The timestamp is UTC at the start of day of birth. <br>   <br> **Example**: If the DOB is 1/1/1980, then the timestamp passed is 315576000. <br>   <br> **Note**: DOB’s prior to 1970 result in a negative timestamp; this is acceptable. To avoid errors, the DOB and consumer’s DOB must match.   <br> **Note**: All other timestamps in Decisioning are in MST. */
  dob: string;
  /** The `reportId` of the original VOIE Payroll report. */
  reportId: string;
  [key: string]: unknown;
}

export const payrollDataSchema: Schema<PayrollData> = expandoObject({
  ssn: ['ssn', string()],
  dob: ['dob', string()],
  reportId: ['reportId', string()],
});
