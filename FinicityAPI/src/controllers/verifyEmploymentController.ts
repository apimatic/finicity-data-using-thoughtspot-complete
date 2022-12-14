/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Error1Error } from '../errors/error1Error';
import {
  GenerateVOEPayrollReportResponse,
  generateVOEPayrollReportResponseSchema,
} from '../models/generateVOEPayrollReportResponse';
import {
  GenerateVOETransactionsReportResponse,
  generateVOETransactionsReportResponseSchema,
} from '../models/generateVOETransactionsReportResponse';
import {
  PayrollReportConstraints,
  payrollReportConstraintsSchema,
} from '../models/payrollReportConstraints';
import {
  VOETransactionsRequestConstraints,
  vOETransactionsRequestConstraintsSchema,
} from '../models/vOETransactionsRequestConstraints';
import { bigint, optional, string } from '../schema';
import { BaseController } from './baseController';

export class VerifyEmploymentController extends BaseController {
  /**
   * **Premium Service**: A billable event when the API response is successful.
   *
   * **MVS Implementation Options**: Direct API Integration
   *
   * Used as a complementary report to the VOIE-Payroll report. This report is used to fulfill the pre-
   * close VOE requirements. It retrieves the customer’s employment details and employment status through
   * the payroll source without any income information.
   *
   * To generate this report, pass the values from the customer `SSN`, `DOB`, and the `reportId` from the
   * first VOIE-Payroll report generated after the Connect session.
   *
   * **After the call**
   * * Returns status HTTP 202 (accepted)
   * * A notification gets sent to the report callback URL if specified.
   * * The application making the call receives a notification sent by the Report Listener Service
   * indicating the report is ready.
   *
   * Or it could enter a loop, wait about 20 seconds, and then call the service. Use the Get Report
   * API to check if the report is finished.
   *
   * @param customerId   Finicity ID for the customer
   * @param accept       application/json
   * @param contentType  application/json
   * @param body
   * @param callbackUrl  The Report Listener URL to receive notifications (optional,
   *                                                        must be URL-encoded).
   * @return Response from the API call
   */
  async generateVOEPayrollReport(
    customerId: bigint,
    accept: string,
    contentType: string,
    body: PayrollReportConstraints,
    callbackUrl?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GenerateVOEPayrollReportResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, bigint()],
      accept: [accept, string()],
      contentType: [contentType, string()],
      body: [body, payrollReportConstraintsSchema],
      callbackUrl: [callbackUrl, optional(string())],
    });
    req.header('Accept', mapped.accept);
    req.header('Content-Type', mapped.contentType);
    req.query('callbackUrl', mapped.callbackUrl);
    req.json(mapped.body);
    req.appendTemplatePath`/decisioning/v2/customers/${mapped.customerId}/voePayroll`;
    req.throwOn(400, Error1Error, 'Bad Request');
    return req.callAsJson(
      generateVOEPayrollReportResponseSchema,
      requestOptions
    );
  }

  /**
   * **Premium Service**: A billable event when the API response is successful.
   *
   * **MVS-Direct integration developers only**
   *
   * Used as a complimentary report to the VOA with Income and VOIE - Paystub (with TXVerify) reports.
   * It's used to fulfill the pre-close VOE requirements.
   *
   * It retrieves the latest credit transaction information from the borrower’s connected bank accounts
   * and groups them into income streams so that you can view their payment history to ensure a direct
   * deport was made within the expected cadence. The report displays transaction descriptions without
   * any dollar amounts so that income re-verification isn’t necessary.
   *
   * **After the call**
   * * Returns status HTTP 202 (accepted)
   * * A notification gets sent to the report callback URL if specified.
   * * The application making the call receives a notification sent by the Report Listener Service
   * indicating the report is ready.
   *
   * Or it could enter a loop, wait about 20 seconds, and then call the service. Use the Get Report
   * API to check if the report is finished.
   *
   * @param customerId   Finicity Id of the customer
   * @param accept       Replace 'json' with 'xml' if preferred
   * @param contentType  Replace 'json' with 'xml' if preferred
   * @param callbackUrl  The Report Listener URL to receive notifications
   *                                                                 (optional, must be URL-encoded).
   * @param body
   * @return Response from the API call
   */
  async generateVOETransactionsReport(
    customerId: bigint,
    accept: string,
    contentType: string,
    callbackUrl?: string,
    body?: VOETransactionsRequestConstraints,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GenerateVOETransactionsReportResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, bigint()],
      accept: [accept, string()],
      contentType: [contentType, string()],
      callbackUrl: [callbackUrl, optional(string())],
      body: [body, optional(vOETransactionsRequestConstraintsSchema)],
    });
    req.header('Accept', mapped.accept);
    req.header('Content-Type', mapped.contentType);
    req.query('callbackUrl', mapped.callbackUrl);
    req.json(mapped.body);
    req.appendTemplatePath`/decisioning/v2/customers/${mapped.customerId}/voeTransactions`;
    req.throwOn(400, Error1Error, 'Bad Request');
    return req.callAsJson(
      generateVOETransactionsReportResponseSchema,
      requestOptions
    );
  }
}
