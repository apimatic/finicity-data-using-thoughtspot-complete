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
  optional,
  Schema,
  string,
} from '../schema';
import { AppFIStatus, appFIStatusSchema } from './appFIStatus';

/** The registration status fields for the application. This is version 2 of this object. */
export interface AppStatus {
  partnerId: string;
  /** An identifier to track the application registration request */
  preAppId: bigint;
  /** A note on registration. Typically used to indicate reasons for rejected apps. */
  note?: string;
  /** The official applicationId to be used in customer creation and setting customer application Id services. This is populated after the app is in A status for approved. */
  applicationId?: string;
  /** The App Name submitted during registration */
  appName: string;
  /** A timestamp showing when the registration was submitted (see Handling Dates and Times) */
  submittedDate: bigint;
  /** A timestamp showing when the registration was last modified. Typically when it was approved or rejected. (see Handling Dates and Times) */
  modifiedDate: bigint;
  /** The status of the app registration request. A means approved. P means pending which is the status when initially submitted or when the app is modified and awaiting approval. R means rejected. If it is rejected there will be a note with the rejected reason. */
  status: string;
  /** Indicates scopes of data accessible to the app */
  scopes?: string;
  /** A list of the registration status for each FI for the application */
  institutionDetails?: AppFIStatus[];
  [key: string]: unknown;
}

export const appStatusSchema: Schema<AppStatus> = expandoObject({
  partnerId: ['partnerId', string()],
  preAppId: ['preAppId', bigint()],
  note: ['note', optional(string())],
  applicationId: ['applicationId', optional(string())],
  appName: ['appName', string()],
  submittedDate: ['submittedDate', bigint()],
  modifiedDate: ['modifiedDate', bigint()],
  status: ['status', string()],
  scopes: ['scopes', optional(string())],
  institutionDetails: [
    'institutionDetails',
    optional(array(lazy(() => appFIStatusSchema))),
  ],
});
