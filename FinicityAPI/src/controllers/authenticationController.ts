/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AuthenticationResponse,
  authenticationResponseSchema,
} from '../models/authenticationResponse';
import {
  ModifyPartnerCredentials,
  modifyPartnerCredentialsSchema,
} from '../models/modifyPartnerCredentials';
import {
  PartnerCredentials,
  partnerCredentialsSchema,
} from '../models/partnerCredentials';
import { string } from '../schema';
import { BaseController } from './baseController';

export class AuthenticationController extends BaseController {
  /**
   * Change the partner secret that is used to authenticate this partner. The secret does not expire, but
   * can be changed by calling Modify Partner Secret. A valid partner secret may contain upper- and
   * lowercase characters, numbers, and the characters !, @, #, $, %, &, *, _, -, +. It must include at
   * least one number and at least one letter, and its length should be between 12 and 255 characters.
   *
   * @param contentType  application/json
   * @param body         Partner ID and Partner Secret From Developer Portal Along
   *                                                        With A Value For The New Partner Secret
   * @return Response from the API call
   */
  async modifyPartnerSecret(
    contentType: string,
    body: ModifyPartnerCredentials,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest(
      'PUT',
      '/aggregation/v2/partners/authentication'
    );
    const mapped = req.prepareArgs({
      contentType: [contentType, string()],
      body: [body, modifyPartnerCredentialsSchema],
    });
    req.header('Content-Type', mapped.contentType);
    req.json(mapped.body);
    req.authenticate(false);
    return req.call(requestOptions);
  }

  /**
   * Partner ID and Partner Secret: Sends to the Partner Authentication service to obtain a token for
   * accessing the APIs.
   *
   * •The token is valid for two hours and is required on all calls to the Finicity APIs
   *
   * •As a best practice, use a single token for all calls. Assign a timestamp for each token, and then
   * check the current timestamp before making any calls. If the token is greater than 90 minutes,
   * generate a new one.
   *
   * Finicity-App-Key: Required on all calls to the Finicity APIs to identify your application.
   *
   * After five failed attempts to authenticate, your account is locked. Contact support@finicity.com to
   * get help resetting your account.
   *
   * @param contentType  application/json
   * @param accept       application/json
   * @param body         Partner ID and Partner Secret From Developer Portal
   * @return Response from the API call
   */
  async partnerAuthentication(
    contentType: string,
    accept: string,
    body: PartnerCredentials,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AuthenticationResponse>> {
    const req = this.createRequest(
      'POST',
      '/aggregation/v2/partners/authentication'
    );
    const mapped = req.prepareArgs({
      contentType: [contentType, string()],
      accept: [accept, string()],
      body: [body, partnerCredentialsSchema],
    });
    req.header('Content-Type', mapped.contentType);
    req.header('Accept', mapped.accept);
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(authenticationResponseSchema, requestOptions);
  }
}