/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CustomerAccount,
  customerAccountSchema,
} from '../models/customerAccount';
import {
  CustomerAccounts,
  customerAccountsSchema,
} from '../models/customerAccounts';
import { bigint, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class AccountsController extends BaseController {
  /**
   * Get details for all accounts associated with the given institution login. All accounts returned are
   * accessible by a single set of credentials on a single institution.
   *
   * @param accept             application/json, application/xml
   * @param customerId         Finicity ID for the customer whose accounts are to be retrieved
   * @param institutionLoginId The institution login ID (from the account record)
   * @return Response from the API call
   */
  async getCustomerAccountsByInstitutionLogin(
    accept: string,
    customerId: bigint,
    institutionLoginId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerAccounts>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      institutionLoginId: [institutionLoginId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/institutionLogins/${mapped.institutionLoginId}/accounts`;
    return req.callAsJson(customerAccountsSchema, requestOptions);
  }

  /**
   * Remove the specified set of accounts by institution login id from the Finicity system.
   *
   * (Note that the request and response are the same for JSON and XML clients.)
   *
   * @param customerId         The ID of the customer whose accounts are to be deleted
   * @param institutionLoginId The Finicity ID of the Institution Login for the set of accounts to be
   *                                     deleted
   * @return Response from the API call
   */
  async deleteCustomerAccountsByInstitutionLogin(
    customerId: bigint,
    institutionLoginId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, bigint()],
      institutionLoginId: [institutionLoginId, bigint()],
    });
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/institutionLogins/${mapped.institutionLoginId}`;
    return req.call(requestOptions);
  }

  /**
   * Get details for the specified account.
   *
   * @param accept     application/json, application/xml
   * @param customerId The ID of the customer who owns the account
   * @param accountId  Finicity’s ID of the account to be retrieved
   * @return Response from the API call
   */
  async getCustomerAccount(
    accept: string,
    customerId: bigint,
    accountId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerAccount>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      accountId: [accountId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts/${mapped.accountId}`;
    return req.callAsJson(customerAccountSchema, requestOptions);
  }

  /**
   * Get details for all accounts owned by the specified customer.
   *
   * @param accept     application/json, application/xml
   * @param customerId The ID of the customer whose accounts are to be retrieved
   * @param status     append, ?status=pending, to return accounts and pending status. Pending accounts were
   *                             discovered but not activated and will not have transactions or have balance updates
   * @return Response from the API call
   */
  async getCustomerAccounts(
    accept: string,
    customerId: bigint,
    status?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerAccounts>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      status: [status, optional(string())],
    });
    req.header('Accept', mapped.accept);
    req.query('status', mapped.status);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts`;
    return req.callAsJson(customerAccountsSchema, requestOptions);
  }

  /**
   * Refresh account and transaction data for all accounts associated with a given institutionLoginId
   * with a connection to the institution.
   *
   * Client apps are not permitted to automate calls to the Refresh services. Active accounts are
   * automatically refreshed by Finicity once per day. Because many financial institutions only post
   * transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not
   * recommended.
   *
   * Apps may call Refresh services for a specific customer when there is a specific business case for
   * the need of data that is up to date as of the moment. Please discuss with your account manager and
   * systems engineer for further clarification.
   *
   * The recommended timeout setting for this request is 120 seconds in order to receive a response.
   * However you can terminate the connection after making the call the operation will still complete.
   * You will have to pull the account records to check for an updated aggregation attempt date to know
   * when the refresh is complete.
   *
   * @param contentLength      Must be 0 (this request has no body)
   * @param accept             application/json, application/xml
   * @param customerId         The ID of the customer who owns the accounts
   * @param institutionLoginId The institution login ID from the account records
   * @return Response from the API call
   */
  async refreshCustomerAccountsByInstitutionLogin(
    contentLength: number,
    accept: string,
    customerId: string,
    institutionLoginId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerAccounts>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      contentLength: [contentLength, number()],
      accept: [accept, string()],
      customerId: [customerId, string()],
      institutionLoginId: [institutionLoginId, string()],
    });
    req.header('Content-Length', mapped.contentLength);
    req.header('Accept', mapped.accept);
    req.header('interactive', 'false');
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/institutionLogins/${mapped.institutionLoginId}/accounts`;
    return req.callAsJson(customerAccountsSchema, requestOptions);
  }

  /**
   * Remove the specified account from Finicity Aggregation.
   *
   *
   *
   * @param customerId The ID of the customer who owns the account
   * @param accountId  Finicity’s ID of the account to be deleted
   * @return Response from the API call
   */
  async deleteCustomerAccount(
    customerId: bigint,
    accountId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, bigint()],
      accountId: [accountId, bigint()],
    });
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts/${mapped.accountId}`;
    return req.call(requestOptions);
  }

  /**
   * Get details for all active accounts owned by the specified customer at the specified institution.
   *
   * @param accept        application/json, application/xml
   * @param customerId    The ID of the customer who owns the account
   * @param institutionId Finicity’s ID of the institution
   * @return Response from the API call
   */
  async getCustomerAccountsByInstitution(
    accept: string,
    customerId: bigint,
    institutionId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerAccounts>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      institutionId: [institutionId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/institutions/${mapped.institutionId}/accounts`;
    return req.callAsJson(customerAccountsSchema, requestOptions);
  }

  /**
   * Connect to the account’s financial institution and load up to 24 months of historic transactions for
   * the account. Length of history varies by institution.
   *
   * This is a premium service. The billable event is a call to this service specifying a customerId that
   * has not been seen before by this service. (If this service is called multiple times with the same
   * customerId, to load transactions from multiple accounts, only one billable event has occurred.)
   *
   * HTTP status of 204 means historic transactions have been loaded successfully. The transactions are
   * now available by calling Get Customer Account Transactions.
   *
   * HTTP status of 203 means the response contains an MFA challenge. Contact your Account Manager or
   * Systems Engineers to determine the best route to handle this HTTP status code.
   *
   * The recommended timeout setting for this request is 180 seconds in order to receive a response.
   * However you can terminate the connection after making the call the operation will still complete.
   * You will have to pull the account records to check for an updated aggregation attempt date to know
   * when the refresh is complete.
   *
   * This service usually requires the HTTP header Content-Length: 0 because it is a POST request with no
   * request body.
   *
   * The date range sent to the institution is calculated from the account’s createdDate. This means that
   * calling this service a second time for the same account normally will not add any new transactions
   * for the account. For this reason, a second call to this service for a known accountId will usually
   * return immediately with HTTP 204.
   *
   * In a few specific scenarios, it may be desirable to force a second connection to the institution for
   * a known accountId. Some examples are:
   *
   * - The institution’s policy has changed, making more transactions available.
   * - Finicity has now added a longer transaction history support for the institution.
   * - The first call encountered an error, and the resulting Aggregation Ticket has now been fixed by
   * the Finicity Support Team.
   *
   * In these cases, the POST request can contain the parameter force=true in the request body to force
   * the second connection.
   *
   * @param contentLength  Must be 0 (this request has no body)
   * @param accept         application/json, application/xml
   * @param customerId     The ID Of the customer who owns the account
   * @param accountId      The Finicity ID of the account to pull transaction history for
   * @return Response from the API call
   */
  async loadHistoricTransactionsForCustomerAccount(
    contentLength: number,
    accept: string,
    customerId: bigint,
    accountId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      contentLength: [contentLength, number()],
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      accountId: [accountId, bigint()],
    });
    req.header('Content-Length', mapped.contentLength);
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts/${mapped.accountId}/transactions/historic`;
    return req.call(requestOptions);
  }

  /**
   * Refresh account and transaction data for all accounts associated with a given customerId with a
   * connection to the institution.
   *
   * Client apps are not permitted to automate calls to the Refresh services. Active accounts are
   * automatically refreshed by Finicity once per day. Because many financial institutions only post
   * transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not
   * recommended.
   *
   * Apps may call Refresh services for a specific customer when there is a specific business case for
   * the need of data that is up to date as of the moment. Please discuss with your account manager and
   * systems engineer for further clarification.
   *
   * The recommended timeout setting for this request is 120 seconds in order to receive a response.
   * However you can terminate the connection after making the call the operation will still complete.
   * You will have to pull the account records to check for an updated aggregation attempt date to know
   * when the refresh is complete.
   *
   * @param contentLength  Must be 0 (this request has no body)
   * @param accept         application/json, application/xml
   * @param customerId     The ID of the customer who owns the accounts to be refreshed
   * @return Response from the API call
   */
  async refreshCustomerAccounts(
    contentLength: number,
    accept: string,
    customerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerAccounts>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      contentLength: [contentLength, number()],
      accept: [accept, string()],
      customerId: [customerId, string()],
    });
    req.header('Content-Length', mapped.contentLength);
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts`;
    return req.callAsJson(customerAccountsSchema, requestOptions);
  }
}
