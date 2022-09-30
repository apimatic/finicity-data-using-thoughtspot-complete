# Cash Flow

```ts
const cashFlowController = new CashFlowController(client);
```

## Class Name

`CashFlowController`

## Methods

* [Generate Cash Flow Report - Business](../../doc/controllers/cash-flow.md#generate-cash-flow-report---business)
* [Generate Cash Flow Report - Personal](../../doc/controllers/cash-flow.md#generate-cash-flow-report---personal)


# Generate Cash Flow Report - Business

Generate a Cash Flow Report (Business) report for all checking and savings under the given Customer. This service retrieves up to two years of transaction history for the given account. It then uses this information to generate the CFR report. A consumer is not required to generate this report.

This report is not provided under FCRA rules, and this report is not available in the Finicity Consumer Portal for the borrower to view.

The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will be sent to the specified report callback URL, if specified.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

If no account of type of checking or savings is found, the service will return HTTP 400 (Bad Request).

```ts
async generateCashFlowReportBusiness(
  customerId: bigint,
  accept: string,
  callbackUrl?: string,
  body?: RequestConstraints,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateCashFlowReportBusinessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | ID of the customer |
| `accept` | `string` | Header, Required | JSON or XML output. |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded) |
| `body` | [`RequestConstraints \| undefined`](../../doc/models/request-constraints.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateCashFlowReportBusinessResponse`](../../doc/models/generate-cash-flow-report-business-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
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
  const { result, ...httpResponse } = await cashFlowController.generateCashFlowReportBusiness(customerId, accept, callbackUrl, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Cash Flow Report - Personal

Generate a Cash Flow Report (Personal) report for all checking and savings under the given Customer. This service retrieves up to two years of transaction history for the given account. It then uses this information to generate the CFR report.

This report is provided under FCRA rules, with Finicity acting as the CRA (Consumer Reporting Agency).  If an individual account is included in the report - for example, with an individual acting as an personal guarantor on the loan - then this version of the report should be used. In case of an adverse action on the loan where the decision was based on this report, then the borrower can be referred to the Finicity Consumer Portal (https://consumer.finicityreports.com) where they can view this report and submit a dispute if they feel any information in this report is inaccurate.

The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will be sent to the specified report callback URL, if specified.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

A Report Consumer must be created for the given Customer before calling this service. If no Report Consumer has been created, the service will return HTTP 400 (Bad Request).

If no account of type of checking or savings is found, the service will return HTTP 400 (Bad Request).

```ts
async generateCashFlowReportPersonal(
  customerId: bigint,
  accept: string,
  callbackUrl?: string,
  body?: RequestConstraints,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateCashFlowReportPersonalResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | ID of the customer |
| `accept` | `string` | Header, Required | JSON or XML output. |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded) |
| `body` | [`RequestConstraints \| undefined`](../../doc/models/request-constraints.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateCashFlowReportPersonalResponse`](../../doc/models/generate-cash-flow-report-personal-response.md)

## Example Usage

```ts
const customerId = 1003413624;
const accept = 'application/json';
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
  const { result, ...httpResponse } = await cashFlowController.generateCashFlowReportPersonal(customerId, accept, callbackUrl, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

