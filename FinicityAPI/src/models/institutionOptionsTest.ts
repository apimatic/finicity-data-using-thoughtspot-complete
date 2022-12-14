/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface InstitutionOptionsTest {
  /** The institutionId */
  institutionId: TypeEnum;
  [key: string]: unknown;
}

export const institutionOptionsTestSchema: Schema<InstitutionOptionsTest> = expandoObject(
  { institutionId: ['institutionId', typeEnumSchema] }
);
