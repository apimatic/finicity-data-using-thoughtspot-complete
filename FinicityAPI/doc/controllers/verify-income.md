# Verify Income

```ts
const verifyIncomeController = new VerifyIncomeController(client);
```

## Class Name

`VerifyIncomeController`


# Generate VOI Report

Generate a Verification of Income (VOI) report for all checking, savings, and money market accounts for the given customer. This service retrieves up to two years of transaction history for each account and uses this information to generate the VOI report.

This is a premium service. The billing rate is the variable rate for Verification of Income under the current subscription plan. The billable event is the successful generation of a VOI report.

HTTP status of 202 (Accepted) means the report is being generated. When the report is finished, a notification will be sent to the specified report callback URL, if specified.

If no account of type of checking, savings, or money market is found, the service will return HTTP 400 (Bad Request).

```ts
async generateVOIReport(
  customerId: bigint,
  accept: string,
  contentType: string,
  callbackUrl?: string,
  body?: RequestConstraintsVOI,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateVOIReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID for the customer |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded). |
| `body` | [`RequestConstraintsVOI \| undefined`](../../doc/models/request-constraints-voi.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateVOIReportResponse`](../../doc/models/generate-voi-report-response.md)

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

const body: RequestConstraintsVOI = {};
body.accountIds = '1000535275';
body.reportCustomFields = bodyReportCustomFields;
body.incomeStreamConfidenceMinimum = 50;
body.fromDate = 1580558400;

try {
  const { result, ...httpResponse } = await verifyIncomeController.generateVOIReport(customerId, accept, contentType, callbackUrl, body);
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

