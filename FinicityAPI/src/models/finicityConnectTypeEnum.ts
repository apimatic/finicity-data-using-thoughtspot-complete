/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FinicityConnectTypeEnum
 */
export enum FinicityConnectTypeEnum {
  Aggregation = 'aggregation',
  Ach = 'ach',
  Fix = 'fix',
  Lite = 'lite',
  Voa = 'voa',
  Voahistory = 'voahistory',
  Voi = 'voi',
  VoieTxverify = 'voieTxVerify',
  VoieStatement = 'voieStatement',
  PayStatement = 'payStatement',
  AssetSummary = 'assetSummary',
  PreQualVoa = 'preQualVoa',
}

/**
 * Schema for FinicityConnectTypeEnum
 */
export const finicityConnectTypeEnumSchema: Schema<FinicityConnectTypeEnum> = stringEnum(FinicityConnectTypeEnum);
