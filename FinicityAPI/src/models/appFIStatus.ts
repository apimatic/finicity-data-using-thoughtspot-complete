/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  optional,
  Schema,
  string,
} from '../schema';

/** The registration status fields for each specific OAuth financial institution */
export interface AppFIStatus {
  /** The finicity financial institution id */
  id: bigint;
  /** The applications abbreviated name */
  abbrvName?: string;
  /** Logo URL for stored logo file */
  logoUrl?: string;
  /** Status of decryption keys for financial institution app registration */
  decryptionKeyActivated: boolean;
  /** Creation date of app's financial institution registration */
  createdDate: bigint;
  /** Last modified date of the app's financial institution registration */
  lastModifiedDate: bigint;
  /** App registered for specific FI what status is true. False indicates registration is still pending. */
  status: boolean;
  [key: string]: unknown;
}

export const appFIStatusSchema: Schema<AppFIStatus> = expandoObject({
  id: ['id', bigint()],
  abbrvName: ['abbrvName', optional(string())],
  logoUrl: ['logoUrl', optional(string())],
  decryptionKeyActivated: ['decryptionKeyActivated', boolean()],
  createdDate: ['createdDate', bigint()],
  lastModifiedDate: ['lastModifiedDate', bigint()],
  status: ['status', boolean()],
});