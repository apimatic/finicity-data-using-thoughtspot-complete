/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Branding, brandingSchema } from './branding';

export interface InstitutionBrandingResponse {
  branding: Branding;
  [key: string]: unknown;
}

export const institutionBrandingResponseSchema: Schema<InstitutionBrandingResponse> = expandoObject(
  { branding: ['branding', lazy(() => brandingSchema)] }
);
