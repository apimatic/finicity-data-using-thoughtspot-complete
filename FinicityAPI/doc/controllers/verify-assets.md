# Verify Assets

```ts
const verifyAssetsController = new VerifyAssetsController(client);
```

## Class Name

`VerifyAssetsController`

## Methods

* [Generate Prequalification Non-CRA Report](../../doc/controllers/verify-assets.md#generate-prequalification-non-cra-report)
* [Generate Prequalification Report](../../doc/controllers/verify-assets.md#generate-prequalification-report)
* [Generate VOA Report](../../doc/controllers/verify-assets.md#generate-voa-report)
* [Generate VOA With Income Report](../../doc/controllers/verify-assets.md#generate-voa-with-income-report)


# Generate Prequalification Non-CRA Report

Used to retrieve all checking, savings, money market, and investment accounts for a customer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.

**Note**: This is a premium service, billable per every successful API call.

**Error codes**

* **HTTP 200**: Success. The report is generating. When it’s finished, a notification is sent to the report callback URL as specified in the report webhook.

* ** HTTP 400**: Bad Request. No account type of checking, savings, money market, or investment was found.

```ts
async generatePrequalificationNonCRAReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  callbackUrl?: string,
  body?: RequestConstraintsPrequal,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeneratePrequalificationReportNonCRAResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity's ID of the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `body` | [`RequestConstraintsPrequal \| undefined`](../../doc/models/request-constraints-prequal.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GeneratePrequalificationReportNonCRAResponse`](../../doc/models/generate-prequalification-report-non-cra-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const callbackUrl = 'https://finicity-test/webhook';
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

const body: RequestConstraintsPrequal = {};
body.accountIds = '1000535275';
body.reportCustomFields = bodyReportCustomFields;
body.showNsf = false;
body.fromDate = 1580558400;

try {
  const { result, ...httpResponse } = await verifyAssetsController.generatePrequalificationNonCRAReport(customerId, accept, contentType, callbackUrl, body);
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


# Generate Prequalification Report

Generate a Prequalification Report (preQualVoa) for all checking, savings, money market, and investment accounts for the given customer. This service retrieves account and owner information as well as the number of NSFs for any account that is a checking account for the customer.

This is a premium service. The billing rate is billed per report for the Prequalification report.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report with status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

If using the listener service, the following format must be followed and the webhook must respond to the Finicity API with a 200 series code:

https://api.finicity.com/decisioning/v2/customers/[customerId]/preQualVoa?callbackUrl=[webhookUrl]

HTTP status of 202 (Accepted) means the report is being generated. When the report is finished, a notification will be sent to the specified report callback URL, if specified.

If no account type of checking, savings, money market, or investment is found, the service will return HTTP 400 (Bad Request).

```ts
async generatePrequalificationReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  callbackUrl?: string,
  body?: RequestConstraintsPrequal,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeneratePrequalificationReportCRAResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity's ID of the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `body` | [`RequestConstraintsPrequal \| undefined`](../../doc/models/request-constraints-prequal.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GeneratePrequalificationReportCRAResponse`](../../doc/models/generate-prequalification-report-cra-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const callbackUrl = 'https://finicity-test/webhook';
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

const body: RequestConstraintsPrequal = {};
body.accountIds = '1000535275';
body.reportCustomFields = bodyReportCustomFields;
body.showNsf = false;
body.fromDate = 1580558400;

try {
  const { result, ...httpResponse } = await verifyAssetsController.generatePrequalificationReport(customerId, accept, contentType, callbackUrl, body);
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


# Generate VOA Report

Generate a Verification of Assets (VOA) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to twelve months of transaction history for each account and uses this information to generate the VOA report.

This is a premium service. The billing rate is the variable rate for Verification of Assets under the current subscription plan. The billable event is the successful generation of a VOA report.

HTTP status of 202 (Accepted) means the report is being generated. When the report is finished, a notification will be sent to the specified report callback URL, if specified.

If no account of type of checking, savings, money market, or investment is found, the service will return HTTP 400 (Bad Request).

```ts
async generateVOAReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  callbackUrl?: string,
  body?: RequestConstraintsGenerateVOAReport,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOAReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID for the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `body` | [`RequestConstraintsGenerateVOAReport \| undefined`](../../doc/models/request-constraints-generate-voa-report.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateVOAReportResponse`](../../doc/models/generate-voa-report-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const callbackUrl = 'https://finicity-test/webhook';
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

const body: RequestConstraintsGenerateVOAReport = {};
body.accountIds = '1000535275';
body.reportCustomFields = bodyReportCustomFields;
body.showNsf = false;
body.fromDate = 1580558400;

try {
  const { result, ...httpResponse } = await verifyAssetsController.generateVOAReport(customerId, accept, contentType, callbackUrl, body);
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


# Generate VOA With Income Report

Generate a Verification of Assets with Income (VOAI) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to 24 months of transaction history for each account and uses this information to generate the VOAI report. The report includes 1 - 6 months of all debit and credit transactions for asset verification. By default, the history is set to 61 days, however, you can change the transaction history in this section by setting the fromDate parameter. The report also includes up to 24 months of income credit transactions (ordered by account and confidence level) regardless of fromDate for income verification.

This is a premium service. The billable event is the successful generation of a VOAI report.

A report consumer must be created for the given customer before calling Generate VOAI Report (see Report Consumers).

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report with status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

If using the listener service, the following format must be followed and the webhook must respond to the Finicity API with a 200 series code:

https://api.finicity.com/decisioning/v2/customers/[customerId]/voaHistory?callbackUrl=[webhookUrl]

HTTP status of 202 (Accepted) means the report is being generated. When the report is finished, a notification will be sent to the specified report callback URL, if specified.

If no account of type of checking, savings, money market, or investment is found, the service will return HTTP 400 (Bad Request).

```ts
async generateVOAWithIncomeReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  callbackUrl?: string,
  body?: RequestConstraints,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOAWithIncomeReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity Id of the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `body` | [`RequestConstraints \| undefined`](../../doc/models/request-constraints.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateVOAWithIncomeReportResponse`](../../doc/models/generate-voa-with-income-report-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
const contentType = 'application/json';
const callbackUrl = 'https://finicity-test/webhook';
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

const body: RequestConstraints = {};
body.accountIds = '1000535275';
body.incomeStreamConfidenceMinimum = 50;
body.reportCustomFields = bodyReportCustomFields;
body.showNsf = false;
body.fromDate = 1580558400;

try {
  const { result, ...httpResponse } = await verifyAssetsController.generateVOAWithIncomeReport(customerId, accept, contentType, callbackUrl, body);
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

