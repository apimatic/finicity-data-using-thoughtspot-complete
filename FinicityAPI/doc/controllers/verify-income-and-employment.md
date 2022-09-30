# Verify Income and Employment

```ts
const verifyIncomeAndEmploymentController = new VerifyIncomeAndEmploymentController(client);
```

## Class Name

`VerifyIncomeAndEmploymentController`

## Methods

* [Generate Pay Statement Report](../../doc/controllers/verify-income-and-employment.md#generate-pay-statement-report)
* [Generate VOIE - Paystub Report](../../doc/controllers/verify-income-and-employment.md#generate-voie---paystub-report)
* [Generate VOIE - Paystub With TXVerify Report](../../doc/controllers/verify-income-and-employment.md#generate-voie---paystub-with-txverify-report)
* [Refresh VOIE - Payroll Report](../../doc/controllers/verify-income-and-employment.md#refresh-voie---payroll-report)


# Generate Pay Statement Report

Generate Pay Statement Extraction Report for the given customer. This service accepts asset IDs of the stored pay statements to generate a Pay Statement Extraction Report.

This is a premium service. The billing rate is the variable rate for Pay Statement Extraction Report under the current subscription plan. The billable event is the successful generation of a Pay Statement Extraction Report.

The service returns immediately with status HTTP 202 (Accepted) if successful. When finished, a notification will be sent to the specified report callback URL, if specified.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

The service will return HTTP 400 (Bad Request) if the asset ID does not exist within Finicity's system.

```ts
async generatePayStatementReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  body: PayStatementConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeneratePayStatementReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID of the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `body` | [`PayStatementConstraints`](../../doc/models/pay-statement-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GeneratePayStatementReportResponse`](../../doc/models/generate-pay-statement-report-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const bodyPaystatementReportAssetIds: string[] = ['6f8fb0a0-e882-4f57-b672-cf53f1397581'];
const bodyPaystatementReport: PayStatementReportData = {
  assetIds: bodyPaystatementReportAssetIds,
};
bodyPaystatementReport.extractEarnings = true;
bodyPaystatementReport.extractDeductions = false;
bodyPaystatementReport.extractDirectDeposit = true;

const bodyReportCustomFields: ReportCustomField[] = [];

const bodyreportCustomFields0: ReportCustomField = {};
bodyreportCustomFields0.label = 'loanID';
bodyreportCustomFields0.value = '12345';
bodyreportCustomFields0.shown = true;

bodyReportCustomFields[0] = bodyreportCustomFields0;

const bodyreportCustomFields1: ReportCustomField = {};
bodyreportCustomFields1.label = 'trackingID';
bodyreportCustomFields1.value = '5555';
bodyreportCustomFields1.shown = true;

bodyReportCustomFields[1] = bodyreportCustomFields1;

const bodyreportCustomFields2: ReportCustomField = {};
bodyreportCustomFields2.label = 'loanType';
bodyreportCustomFields2.value = 'car';
bodyreportCustomFields2.shown = false;

bodyReportCustomFields[2] = bodyreportCustomFields2;

const bodyreportCustomFields3: ReportCustomField = {};
bodyreportCustomFields3.label = 'vendorID';
bodyreportCustomFields3.value = '1613aa23';
bodyreportCustomFields3.shown = true;

bodyReportCustomFields[3] = bodyreportCustomFields3;

const bodyreportCustomFields4: ReportCustomField = {};
bodyreportCustomFields4.label = 'vendorName';
bodyreportCustomFields4.value = 'PSC Finance';
bodyreportCustomFields4.shown = false;

bodyReportCustomFields[4] = bodyreportCustomFields4;

const body: PayStatementConstraints = {
  paystatementReport: bodyPaystatementReport,
};
body.reportCustomFields = bodyReportCustomFields;

const callbackUrl = 'https://finicity-test/webhook';
try {
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generatePayStatementReport(customerId, accept, contentType, body, callbackUrl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Generate VOIE - Paystub Report

Generate a VOIE - Paystub report. This service uses the provided paystub(s), which are passed into the request body as assetIds (generated using the Store Customer Pay Statment API) to generate the VOIE - Paystub (with TXVerify) report with digitized paystub details.

This is a premium service. The billing rate is the variable rate for VOIE - Paystub under the current subscription plan. The billable event is the successful generation of a VOIE - Paystub Report.

The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will be sent to the specified report callback URL, if specified.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

When the call cannot be processed due to invalid input, the service will return HTTP 400 (Bad Request).

```ts
async generateVOIEPaystubReport(
  customerId: bigint,
  accept: string,
  body: VOIEWithStatementConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOIEPaystubReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID for the customer |
| `accept` | `string` | Header, Required | application/json |
| `body` | [`VOIEWithStatementConstraints`](../../doc/models/voie-with-statement-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateVOIEPaystubReportResponse`](../../doc/models/generate-voie-paystub-report-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const bodyVoieWithStatementDataAssetIds: string[] = ['d50ed92f-543b-431c-8286-c8b8f6556679'];
const bodyVoieWithStatementData: VOIEWithStatementData = {
  assetIds: bodyVoieWithStatementDataAssetIds,
};

const bodyReportCustomFields: ReportCustomField[] = [];

const bodyreportCustomFields0: ReportCustomField = {};
bodyreportCustomFields0.label = 'loanID';
bodyreportCustomFields0.value = '123456';
bodyreportCustomFields0.shown = true;

bodyReportCustomFields[0] = bodyreportCustomFields0;

const bodyreportCustomFields1: ReportCustomField = {};
bodyreportCustomFields1.label = 'trackingID';
bodyreportCustomFields1.value = '5555';
bodyreportCustomFields1.shown = true;

bodyReportCustomFields[1] = bodyreportCustomFields1;

const body: VOIEWithStatementConstraints = {
  voieWithStatementData: bodyVoieWithStatementData,
};
body.reportCustomFields = bodyReportCustomFields;

const callbackUrl = 'https://finicity-test/webhook';
try {
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOIEPaystubReport(customerId, accept, body, callbackUrl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Generate VOIE - Paystub With TXVerify Report

Generate a VOIE - Paystub (with TXVerify) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given accounts. It then uses this information as well as the provided paystub(s), which are passed into the request body as assetIds (generated using the Store Customer Pay Statment API) to generate the VOIE - Paystub (with TXVerify) report.

Note: If you are using this endpoint to refresh the bank transactions, use the same assetId from the first report. A new paystub is not required unless the paystub is too old for underwriting requirements. Using the same assetId that was on the original report and the previously extracted details will be used to speed up report generation response time.

This is a premium service. The billing rate is the variable rate for VOIE TXVerify under the current subscription plan. The billable event is the successful generation of a VOIE TXVerify Report.

The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will be sent to the specified report callback URL, if specified.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

When the call cannot be processed due to invalid input, the service will return HTTP 400 (Bad Request).

```ts
async generateVOIEPaystubWithTxverifyReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  body: VOIETxverifyConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOIEPaystubWithTxverifyReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID for the customer |
| `accept` | `string` | Header, Required | application/json or application/xml |
| `contentType` | `string` | Header, Required | application/json or application/xml |
| `body` | [`VOIETxverifyConstraints`](../../doc/models/voie-txverify-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateVOIEPaystubWithTxverifyReportResponse`](../../doc/models/generate-voie-paystub-with-txverify-report-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const bodyVoieWithInterviewDataTxverifyInterview: TxverifyInterview[] = [];

const bodyVoieWithInterviewDatatxverifyInterview0: TxverifyInterview = {
  assetId: '7eb57060-6d98-4449-992d-4dd4490448f3-1236011097',
};

bodyVoieWithInterviewDataTxverifyInterview[0] = bodyVoieWithInterviewDatatxverifyInterview0;

const bodyVoieWithInterviewData: VOIEWithInterviewData = {
  txverifyInterview: bodyVoieWithInterviewDataTxverifyInterview,
};

const bodyReportCustomFields: ReportCustomField[] = [];

const bodyreportCustomFields0: ReportCustomField = {};
bodyreportCustomFields0.label = 'loanID';
bodyreportCustomFields0.value = '123456';
bodyreportCustomFields0.shown = true;

bodyReportCustomFields[0] = bodyreportCustomFields0;

const body: VOIETxverifyConstraints = {
  accountIds: '1028361677',
  voieWithInterviewData: bodyVoieWithInterviewData,
};
body.reportCustomFields = bodyReportCustomFields;

const callbackUrl = 'https://finicity-test/webhook';
try {
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOIEPaystubWithTxverifyReport(customerId, accept, contentType, body, callbackUrl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Refresh VOIE - Payroll Report

The VOIE – Payroll report generates when the customer completes Connect. Lenders, who commonly use this report for pre-close verification employment check, can refresh this report by passing the consumer’s SSN, DOB, and the `reportId` from the first VOIE – Payroll report they received.

We’ll refresh this report and update any new pay histories since the first report generated, including borrower’s employment status as active or not.

Note: Lenders can only refresh this report one time in a 60-day period starting from the date of the first report. Any further report refreshes will incur additional charges.

The service immediately returns the status HTTP 202 (accepted). A notification gets sent to the report callback URL, if specified.

After the call is made, the client’s application can wait for a notification sent by the Report Listener Service. Or it may enter a loop, which waits about 20 seconds and then calls the service, Get Report to check if the report is finished.

While the report’s generating, Get Report returns a minimal report with a status of InProgress.  The loop repeats every 20 seconds until Get Report returns a different status.

```ts
async refreshVOIEPayrollReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  body: PayrollReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefreshVOIEPayrollReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID for the customer |
| `accept` | `string` | Header, Required | application/json |
| `contentType` | `string` | Header, Required | application/json |
| `body` | [`PayrollReportConstraints`](../../doc/models/payroll-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RefreshVOIEPayrollReportResponse`](../../doc/models/refresh-voie-payroll-report-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const bodyPayrollData: PayrollData = {
  ssn: '999990000',
  dob: '315576000',
  reportId: 'abcdefghijkl-voiepayroll',
};

const bodyReportCustomFields: ReportCustomField[] = [];

const bodyreportCustomFields0: ReportCustomField = {};
bodyreportCustomFields0.label = 'loanID';
bodyreportCustomFields0.value = '12345';
bodyreportCustomFields0.shown = true;

bodyReportCustomFields[0] = bodyreportCustomFields0;

const body: PayrollReportConstraints = {
  payrollData: bodyPayrollData,
};
body.reportCustomFields = bodyReportCustomFields;
body.payStatementsFromDate = 1580558400;

const callbackUrl = 'https://finicity-test/webhook';
try {
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.refreshVOIEPayrollReport(customerId, accept, contentType, body, callbackUrl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |

