# Bank Statements

```ts
const bankStatementsController = new BankStatementsController(client);
```

## Class Name

`BankStatementsController`

## Methods

* [Generate Statement Report](../../doc/controllers/bank-statements.md#generate-statement-report)
* [Get Customer Account Statement](../../doc/controllers/bank-statements.md#get-customer-account-statement)


# Generate Statement Report

Generate a Statement Report report for specified accounts under the given customer. This report requires a consumer.

The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will be sent to the specified report callback URL, if specified.

This is a premium service. A billable event will be created upon the successful generation of the Statement Report.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

A Report Consumer must be created for the given Customer (using Create Report Consumer) before calling this service. If no Report Consumer has been created, the service will return HTTP 400 (Bad Request).

```ts
async generateStatementReport(
  accept: string,
  customerId: bigint,
  body: GenerateStatementReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateStatementReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `customerId` | `bigint` | Template, Required | ID of the customer |
| `body` | [`GenerateStatementReportConstraints`](../../doc/models/generate-statement-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | The Report Listener URL to receive notifications (optional, must be URL-encoded) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateStatementReportResponse`](../../doc/models/generate-statement-report-response.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1003413624;
const bodyStatementReportData: StatementReportData = {
  accountId: 1000076901,
};
bodyStatementReportData.index = 1;

const bodyReportCustomFields: ReportCustomFields[] = [];

const bodyreportCustomFields0: ReportCustomFields = {
  label: 'loanID',
  value: '123456',
  shown: true,
};

bodyReportCustomFields[0] = bodyreportCustomFields0;

const body: GenerateStatementReportConstraints = {
  statementReportData: bodyStatementReportData,
};
body.reportCustomFields = bodyReportCustomFields;

const callbackUrl = 'https://finicity-test/webhook';
try {
  const { result, ...httpResponse } = await bankStatementsController.generateStatementReport(accept, customerId, body, callbackUrl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Account Statement

Retrieve the customer's bank statements in PDF format. Up to 24 months of history is available depending on the financial institution. Since this is a premium service, charges incur per each successful statement retrieved.

Our list of [Supported Institutions](https://docs.finicity.com/institutions/) confirms that you can retrieve statements for the following account types:

* Checking
* Savings
* Money market
* CDs
* Investments
* Mortgage
* Credit cards
* Loans
* Line of credit

** Set request timeout **:  We recommend setting the timeout to 180 seconds to allow plenty of time for a response.

** Error codes **

* **HTTP 200**: Success. The response is a binary string that you can save as a PDF file.

* ** HTTP 203 **: The response contains an MFA challenge question in JSON format.
  Contact one of our system engineers for help in resolving this error.

```ts
async getCustomerAccountStatement(
  accept: string,
  customerId: bigint,
  accountId: bigint,
  index?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/pdf, application/json (the document will be in PDF format, but errors will be JSON) |
| `customerId` | `bigint` | Template, Required | Finicity ‘s ID for the customer who owns the account |
| `accountId` | `bigint` | Template, Required | Finicity’s ID of the account |
| `index` | `number \| undefined` | Query, Optional | Request statements from 1- 24. By default, 1 is the most recent statement. Increase the index value to count back (by month) and retrieve its most recent statement.<br>**Default**: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const accept = 'application/pdf, application/json';
const customerId = 1005061234;
const accountId = 1014136057;
const index = 1;
try {
  const { result, ...httpResponse } = await bankStatementsController.getCustomerAccountStatement(accept, customerId, accountId, index);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

