/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ExpiredTokenError } from '../errors/expiredTokenError';
import {
  AccountIDConsumerAttributes,
  accountIDConsumerAttributesSchema,
} from '../models/accountIDConsumerAttributes';
import {
  GenerateConsumerAttributesReponse,
  generateConsumerAttributesReponseSchema,
} from '../models/generateConsumerAttributesReponse';
import {
  GenerateFCRACAResponse,
  generateFCRACAResponseSchema,
} from '../models/generateFCRACAResponse';
import {
  GetConsumerAttributesByIDResponse,
  getConsumerAttributesByIDResponseSchema,
} from '../models/getConsumerAttributesByIDResponse';
import {
  ListConsumerAttributesResponse,
  listConsumerAttributesResponseSchema,
} from '../models/listConsumerAttributesResponse';
import { array, bigint, number, string } from '../schema';
import { BaseController } from './baseController';

export class AnalyticsAndAttributesController extends BaseController {
  /**
   * Used to generate a Consumer Attributes report for a customer. The `To` and `From` date range is the
   * last 12 months of consumer data, based on the `created_date` when the report was generated.
   *
   * An `analityic_id` value is also created and associated with a customer’s ID. If you generate
   * multiple Consumer Attributes reports for the same `customer_id`, a new `analityic_id` and
   * `created_date` are created for each instance.
   *
   * To view a list of all the `analytic_ids` for a customer, use the List Consumer Attributes API.
   *
   * See [List Consumer Attributes - Beta API](https://api-reference.finicity.com/#/rest/api-
   * endpoints/analytics/list-consumer-attributes-beta)
   *
   * @param accept      application/json
   * @param accountId   An `accountId` generated for the data requested.
   * @param customerId  The ID for a customer.
   * @return Response from the API call
   */
  async generateConsumerAttributesBeta(
    accept: string,
    accountId: AccountIDConsumerAttributes[],
    customerId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GenerateConsumerAttributesReponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      accountId: [accountId, array(accountIDConsumerAttributesSchema)],
      customerId: [customerId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.json(mapped.accountId);
    req.appendTemplatePath`/analytics/ca360/v1/customers/${mapped.customerId}/analytics`;
    req.throwOn(400, ExpiredTokenError, '**Bad Request**: Request was not formed correctly.');
    req.throwOn(401, ExpiredTokenError, '**Unauthorized Error**: Authentication failed.');
    req.throwOn(403, ExpiredTokenError, '**Forbidden**: The Partner does not have access to the given CustomerID.');
    req.throwOn(404, ExpiredTokenError, '**Not Found**: The requested resource could not be found but may be available in the future.');
    req.throwOn(503, ExpiredTokenError, '**Service Unavailable**: Service currently unavailable. The service may be available with later requests.');
    return req.callAsJson(
      generateConsumerAttributesReponseSchema,
      requestOptions
    );
  }

  /**
   * Used to retrieve a list of all the `analytic_ids` created for a customer from the Generate Consumer
   * Attributes API.
   *
   * The list displays all the `analytic_ids` and `created_date` (Epoch time) associated with a
   * customer’s ID.
   *
   * Depending on the `created_date`, select an analytic_id to
   * retrieve the Consumer Attributes report using the Get Consumer Attributes by ID API.
   *
   * See [Get Consumer Attributes by ID – Beta API] (https://api-reference.finicity.com/#/rest/api-
   * endpoints/analytics/get-consumer-attributes-by-id-beta)
   *
   * @param accept      application/json
   * @param customerId  The ID for a customer.
   * @return Response from the API call
   */
  async listConsumerAttributesBeta(
    accept: string,
    customerId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListConsumerAttributesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/analytics/ca360/v1/customers/${mapped.customerId}/analytics`;
    req.throwOn(400, ExpiredTokenError, '**Bad Request**: Request was not formed correctly.');
    req.throwOn(401, ExpiredTokenError, '**Unauthorized Error**: Authentication failed.');
    req.throwOn(403, ExpiredTokenError, '**Forbidden**: The Partner does not have access to the given CustomerID.');
    req.throwOn(404, ExpiredTokenError, '**Not Found**: The requested resource could not be found but may be available in the future.');
    req.throwOn(503, ExpiredTokenError, '**Service Unavailable**: Service currently unavailable. The service may be available with later requests.');
    return req.callAsJson(listConsumerAttributesResponseSchema, requestOptions);
  }

  /**
   * Used to retrieve a Consumer Attributes (CA) report for a customer. The `analytic_id` and the
   * `created_date` are generated from the [Generate Consumer Attributes API-Beta] (https://api-reference.
   * finicity.com/#/rest/api-endpoints/analytics/generate-consumer-attributes-beta).
   *
   * Use the `analytic_id` and `customer_id` to retrieve 12 months of data attributes according to the
   * `To` and `From` date range of the report at the time it was created.
   *
   * If the current date is before the end of the calendar month, then the most recent month provides all
   * available data up to the current date.
   *
   * The CA data response is grouped into the following attribute objects:
   *
   * * `accountIds`
   * * `dateRange`
   * * `income`
   * * `expenses`
   * * `netAmount`
   * * `nsf` (insufficient funds)
   * * `assets`
   * * `customer`
   * * `account`
   * * `liabilities`
   *
   * @param accept       application/json
   * @param analyticsId  An analytic ID generated for the requested report.
   * @param customerId   The ID for a customer.
   * @return Response from the API call
   */
  async getConsumerAttributesByIDBeta(
    accept: string,
    analyticsId: string,
    customerId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetConsumerAttributesByIDResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      analyticsId: [analyticsId, string()],
      customerId: [customerId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/analytics/ca360/v1/customers/${mapped.analyticsId}/analytics/${mapped.customerId}`;
    req.throwOn(400, ExpiredTokenError, '**Bad Request**: Request was not formed correctly.');
    req.throwOn(401, ExpiredTokenError, '**Unauthorized Error**: Authentication failed.');
    req.throwOn(403, ExpiredTokenError, '**Forbidden**: The Partner does not have access to the given CustomerID.');
    req.throwOn(404, ExpiredTokenError, '**Not Found**: The requested resource could not be found but may be available in the future.');
    req.throwOn(503, ExpiredTokenError, '**Service Unavailable**: Service currently unavailable. The service may be available with later requests.');
    return req.callAsJson(
      getConsumerAttributesByIDResponseSchema,
      requestOptions
    );
  }

  /**
   * @param accept     application/json
   * @param accountId  An `accountId` generated for the data requested per
   *                                                         customer.
   * @param customerId The ID of the customer.
   * @return Response from the API call
   */
  async generateFCRAConsumerAttributesBeta(
    accept: string,
    accountId: AccountIDConsumerAttributes,
    customerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GenerateFCRACAResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      accountId: [accountId, accountIDConsumerAttributesSchema],
      customerId: [customerId, number()],
    });
    req.header('Accept', mapped.accept);
    req.json(mapped.accountId);
    req.appendTemplatePath`/analytics/ca360/v1/customer/${mapped.customerId}/analytics/fcra`;
    req.throwOn(400, ExpiredTokenError, '**Bad Request**: Request was not formed correctly.');
    req.throwOn(401, ExpiredTokenError, '**Unauthorized Error**: Authentication failed.');
    req.throwOn(403, ExpiredTokenError, '**Forbidden**: The Partner does not have access to the given CustomerID.');
    req.throwOn(404, ExpiredTokenError, '**Not Found**: The requested resource could not be found but may be available in the future.');
    req.throwOn(503, ExpiredTokenError, '**Service Unavailable**: Service currently unavailable. The service may be available with later requests.');
    return req.callAsJson(generateFCRACAResponseSchema, requestOptions);
  }
}
