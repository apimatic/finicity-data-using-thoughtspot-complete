/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface GetInstitutionsInstitutionBranding {
  /** The logo of the institution that’s used for white backgrounds */
  logo?: string;
  /** The alternate logo of the institution that’s used for branded or colored backgrounds. */
  alternateLogo?: string;
  /** The branding icon of the institution */
  icon?: string;
  /** The branding’s primary color for the institution */
  primaryColor?: string;
  /** The branding tile that displays on the Connect Search for a bank page. */
  tile?: string;
  [key: string]: unknown;
}

export const getInstitutionsInstitutionBrandingSchema: Schema<GetInstitutionsInstitutionBranding> = expandoObject(
  {
    logo: ['logo', optional(string())],
    alternateLogo: ['alternateLogo', optional(string())],
    icon: ['icon', optional(string())],
    primaryColor: ['primaryColor', optional(string())],
    tile: ['tile', optional(string())],
  }
);