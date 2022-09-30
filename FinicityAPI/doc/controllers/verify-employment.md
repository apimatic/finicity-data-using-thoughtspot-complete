# Verify Employment

```ts
const verifyEmploymentController = new VerifyEmploymentController(client);
```

## Class Name

`VerifyEmploymentController`

## Methods

* [Generate VOE - Payroll Report](../../doc/controllers/verify-employment.md#generate-voe---payroll-report)
* [Generate VOE - Transactions Report](../../doc/controllers/verify-employment.md#generate-voe---transactions-report)


# Generate VOE - Payroll Report

**Premium Service**: A billable event when the API response is successful.

**MVS Implementation Options**: Direct API Integration

Used as a complementary report to the VOIE-Payroll report. This report is used to fulfill the pre-close VOE requirements. It retrieves the customer’s employment details and employment status through the payroll source without any income information.

To generate this report, pass the values from the customer `SSN`, `DOB`, and the `reportId` from the first VOIE-Payroll report generated after the Connect session.

**After the call**

* Returns status HTTP 202 (accepted)

* A notification gets sent to the report callback URL if specified.

* The application making the call receives a notification sent by the Report Listener Service indicating the report is ready.
  
  Or it could enter a loop, wait about 20 seconds, and then call the service. Use the Get Report API to check if the report is finished.

```ts
async generateVOEPayrollReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  body: PayrollReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOEPayrollReportResponse>>
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

[`GenerateVOEPayrollReportResponse`](../../doc/models/generate-voe-payroll-report-response.md)

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
  const { result, ...httpResponse } = await verifyEmploymentController.generateVOEPayrollReport(customerId, accept, contentType, body, callbackUrl);
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


# Generate VOE - Transactions Report

**Premium Service**: A billable event when the API response is successful.

**MVS-Direct integration developers only**

Used as a complimentary report to the VOA with Income and VOIE - Paystub (with TXVerify) reports. It's used to fulfill the pre-close VOE requirements.

It retrieves the latest credit transaction information from the borrower’s connected bank accounts and groups them into income streams so that you can view their payment history to ensure a direct deport was made within the expected cadence. The report displays transaction descriptions without any dollar amounts so that income re-verification isn’t necessary.

**After the call**

* Returns status HTTP 202 (accepted)

* A notification gets sent to the report callback URL if specified.

* The application making the call receives a notification sent by the Report Listener Service indicating the report is ready.
  
  Or it could enter a loop, wait about 20 seconds, and then call the service. Use the Get Report API to check if the report is finished.

```ts
async generateVOETransactionsReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  callbackUrl?: string,
  body?: VOETransactionsRequestConstraints,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOETransactionsReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity Id of the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `body` | [`VOETransactionsRequestConstraints \| undefined`](../../doc/models/voe-transactions-request-constraints.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateVOETransactionsReportResponse`](../../doc/models/generate-voe-transactions-report-response.md)

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

const body: VOETransactionsRequestConstraints = {};
body.reportId = 'j7k8qbgwsa7d-voietxverify';
body.accountIds = '123456789';
body.incomeStreamConfidenceMinimum = 50;
body.reportCustomFields = bodyReportCustomFields;
body.fromDate = 1580558400;

try {
  const { result, ...httpResponse } = await verifyEmploymentController.generateVOETransactionsReport(customerId, accept, contentType, callbackUrl, body);
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

