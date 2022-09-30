# Transactions

```ts
const transactionsController = new TransactionsController(client);
```

## Class Name

`TransactionsController`

## Methods

* [Generate Transactions Report](../../doc/controllers/transactions.md#generate-transactions-report)
* [Get Customer Account Transactions](../../doc/controllers/transactions.md#get-customer-account-transactions)
* [Get Customer Transaction](../../doc/controllers/transactions.md#get-customer-transaction)
* [Get Customer Transactions All](../../doc/controllers/transactions.md#get-customer-transactions-all)


# Generate Transactions Report

Generate a Transaction Report for specified accounts under the given customer. This service retrieves up to 24 months of transaction history for the given customer. It then uses this information to generate the Transaction Report.

The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will be sent to the specified report callback URL, if specified.

This is a premium service. A billable event will be created upon the successful generation of the Transactions Report.

After making this call, the client app may wait for a notification to be sent to the Report Listener Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report to see if the report is finished. While the report is being generated, Get Report will return a minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report returns a different status.

A Report Consumer must be created for the given Customer (using Create Report Consumer) before calling this service. If no Report Consumer has been created, the service will return HTTP 400 (Bad Request).

There cannot be more than 24 months between fromDate and toDate.

```ts
async generateTransactionsReport(
  accept: string,
  callbackUrl: string,
  customerId: bigint,
  toDate: bigint,
  includePending: boolean,
  body?: GenerateTransactionsReportConstraints,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateTransactionsReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | JSON or XML output. |
| `callbackUrl` | `string` | Query, Required | The Report Listener URL to receive notifications (optional, must be URL-encoded) |
| `customerId` | `bigint` | Template, Required | ID of the customer |
| `toDate` | `bigint` | Query, Required | The ending timestamp for the date range. The value must be greater than fromDate. See Handling Dates and Times. |
| `includePending` | `boolean` | Query, Required | True: Include pending transactions in the report. False: Set by default. |
| `body` | [`GenerateTransactionsReportConstraints \| undefined`](../../doc/models/generate-transactions-report-constraints.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateTransactionsReportResponse`](../../doc/models/generate-transactions-report-response.md)

## Example Usage

```ts
const accept = 'application/json';
const callbackUrl = 'https://finicity-test/webhook';
const customerId = 1003413624;
const toDate = 1594677609;
const includePending = true;
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

const body: GenerateTransactionsReportConstraints = {
  fromDate: 1580558400,
};
body.accountIds = '1027339038 1027339039';
body.reportCustomFields = bodyReportCustomFields;

try {
  const { result, ...httpResponse } = await transactionsController.generateTransactionsReport(accept, callbackUrl, customerId, toDate, includePending, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Account Transactions

Get all transactions available for this customer account within the given date range. This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is provided), with a maximum of 1000 transactions per request.

Standard consumer aggregation provides up to 180 days of transactions prior to the date each account was added to the Finicity system. To access older transactions, you must first call the Cash Flow Verification service Load Historic Transactions for Account.

There is no limit for the size of the window between fromDate and toDate; however, the maximum number of transactions returned on one page is 1000.

If the value of `moreAvailable` in the response is true, you can retrieve the next page of results by increasing the value of the start parameter in your next request:

…&start=6&limit=5

```ts
async getCustomerAccountTransactions(
  accept: string,
  customerId: bigint,
  accountId: string,
  fromDate: bigint,
  toDate: bigint,
  start?: bigint,
  limit?: bigint,
  sort?: string,
  includePending?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID of the customer whose transactions are to be retrieved |
| `accountId` | `string` | Template, Required | Finicity’s ID of the account whose transactions are to be retrieved |
| `fromDate` | `bigint` | Query, Required | Starting timestamp for the date range (required) (see Handling Dates and Times) |
| `toDate` | `bigint` | Query, Required | Ending timestamp for the date range (required, must be greater than fromDate) (see Handling Dates and Times) |
| `start` | `bigint \| undefined` | Query, Optional | Starting index for this page of results<br>**Default**: `1` |
| `limit` | `bigint \| undefined` | Query, Optional | Maximum number of entries for this page of results (max is 1000)<br>**Default**: `1000` |
| `sort` | `string \| undefined` | Query, Optional | Sort order: asc for ascending order (oldest transactions are on page 1), descfor descending order (newest transactions are on page 1).<br>**Default**: `'desc'` |
| `includePending` | `boolean \| undefined` | Query, Optional | true to include pending transactions if available.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTransactionsResponse`](../../doc/models/get-transactions-response.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 'accountId0';
const fromDate = 1588365858;
const toDate = 1588970681;
const start = 1;
const limit = 1000;
const sort = 'desc';
const includePending = false;
try {
  const { result, ...httpResponse } = await transactionsController.getCustomerAccountTransactions(accept, customerId, accountId, fromDate, toDate, start, limit, sort, includePending);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Transaction

Get details for the specified transaction.

```ts
async getCustomerTransaction(
  accept: string,
  customerId: string,
  transactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transaction>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `string` | Template, Required | Finicity ID for the customer whose transactions are to be retrieved |
| `transactionId` | `string` | Template, Required | The transaction to be retrieved |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transaction`](../../doc/models/transaction.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = '1005061234';
const transactionId = '102122887150';
try {
  const { result, ...httpResponse } = await transactionsController.getCustomerTransaction(accept, customerId, transactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Transactions All

Get all transactions available for this customer within the given date range, across all accounts. This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is provided), with a maximum of 1000 transactions per request.

Standard consumer aggregation provides up to 180 days of transactions prior to the date each account was added to the Finicity system. To access older transactions, you must first call the service Load Historic Transactions for Account.

There is no limit for the size of the window between fromDate and toDate; however, the maximum number of transactions returned on one page is 1000.

If the value of `moreAvailable` in the response is true, you can retrieve the next page of results by increasing the value of the start parameter in your next request:

…&start=6&limit=5

```ts
async getCustomerTransactionsAll(
  accept: string,
  customerId: bigint,
  fromDate: bigint,
  toDate: bigint,
  start?: bigint,
  limit?: bigint,
  sort?: string,
  includePending?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID of the customer whose transactions are to be retrieved |
| `fromDate` | `bigint` | Query, Required | Starting timestamp for the date range (required) (see Handling Dates and Times) |
| `toDate` | `bigint` | Query, Required | Ending timestamp for the date range (required, must be greater than fromDate) (see Handling Dates and Times) |
| `start` | `bigint \| undefined` | Query, Optional | Starting index for this page of results<br>**Default**: `1` |
| `limit` | `bigint \| undefined` | Query, Optional | Maximum number of entries for this page of results (max is 1000)<br>**Default**: `1000` |
| `sort` | `string \| undefined` | Query, Optional | Sort order: asc for ascending order (oldest transactions are on page 1), descfor descending order (newest transactions are on page 1).<br>**Default**: `'desc'` |
| `includePending` | `boolean \| undefined` | Query, Optional | true to include pending transactions if available.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTransactionsResponse`](../../doc/models/get-transactions-response.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const fromDate = 1588365858;
const toDate = 1588970681;
const start = 1;
const limit = 1000;
const sort = 'desc';
const includePending = false;
try {
  const { result, ...httpResponse } = await transactionsController.getCustomerTransactionsAll(accept, customerId, fromDate, toDate, start, limit, sort, includePending);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "found": 5,
  "displaying": 5,
  "moreAvailable": false,
  "fromDate": "1588365858",
  "toDate": "1653110643",
  "sort": "desc",
  "transactions": [
    {
      "id": 7030248673,
      "amount": 2.23,
      "accountId": 6002915598,
      "customerId": 6001391193,
      "status": "active",
      "description": "[No description provided by institution]",
      "feeAmount": 9.95,
      "symbol": "ABC",
      "unitQuantity": 100.0,
      "unitAction": "BUY",
      "postedDate": 1653048000,
      "transactionDate": 1653048000,
      "createdDate": 1653046053,
      "categorization": {
        "category": "Restaurants"
      },
      "confirmationNumber": "test confirmation",
      "payeeId": "test PAYEE_ID",
      "extendedPayeeName": "test EXTENDED_PAYEE",
      "originalCurrency": "Y",
      "runningBalanceAmount": 23,
      "escrowTaxAmount": 12,
      "escrowInsuranceAmount": 14,
      "escrowPmiAmount": 15,
      "escrowFeesAmount": 16,
      "escrowOtherAmount": 17,
      "inv401kSource": "test INV_401K_SOURCE",
      "relatedInstitutionTradeId": "test RELATED_INSTITUTION_TRADE_ID",
      "subaccountSecurityType": "test SUB_ACCOUNT_SECURITY_TYPE",
      "penaltyAmount": 18,
      "sharesPerContract": 19,
      "stateWithholding": 20,
      "taxesAmount": 21,
      "unitPrice": 22,
      "securedType": "test SECURED_TYPE",
      "reveralInstitutionTransactionId": "599",
      "investmentTransactionType": "other"
    },
    {
      "id": 6992877866,
      "amount": 2.23,
      "accountId": 6002915598,
      "customerId": 6001391193,
      "status": "active",
      "description": "[No description provided by institution]",
      "feeAmount": 9.95,
      "symbol": "ABC",
      "unitQuantity": 100.0,
      "unitAction": "BUY",
      "postedDate": 1652961600,
      "transactionDate": 1652961600,
      "createdDate": 1652959673,
      "categorization": {
        "category": "Restaurants"
      },
      "confirmationNumber": "test confirmation",
      "payeeId": "test PAYEE_ID",
      "extendedPayeeName": "test EXTENDED_PAYEE",
      "originalCurrency": "Y",
      "runningBalanceAmount": 23,
      "escrowTaxAmount": 12,
      "escrowInsuranceAmount": 14,
      "escrowPmiAmount": 15,
      "escrowFeesAmount": 16,
      "escrowOtherAmount": 17,
      "inv401kSource": "test INV_401K_SOURCE",
      "relatedInstitutionTradeId": "test RELATED_INSTITUTION_TRADE_ID",
      "subaccountSecurityType": "test SUB_ACCOUNT_SECURITY_TYPE",
      "penaltyAmount": 18,
      "sharesPerContract": 19,
      "stateWithholding": 20,
      "taxesAmount": 21,
      "unitPrice": 22,
      "securedType": "test SECURED_TYPE",
      "reveralInstitutionTransactionId": "599",
      "investmentTransactionType": "other"
    },
    {
      "id": 6953690134,
      "amount": 2.23,
      "accountId": 6002915598,
      "customerId": 6001391193,
      "status": "active",
      "description": "[No description provided by institution]",
      "feeAmount": 9.95,
      "symbol": "ABC",
      "unitQuantity": 100.0,
      "unitAction": "BUY",
      "postedDate": 1652875200,
      "transactionDate": 1652875200,
      "createdDate": 1652873275,
      "categorization": {
        "category": "Restaurants"
      },
      "confirmationNumber": "test confirmation",
      "payeeId": "test PAYEE_ID",
      "extendedPayeeName": "test EXTENDED_PAYEE",
      "originalCurrency": "Y",
      "runningBalanceAmount": 23,
      "escrowTaxAmount": 12,
      "escrowInsuranceAmount": 14,
      "escrowPmiAmount": 15,
      "escrowFeesAmount": 16,
      "escrowOtherAmount": 17,
      "inv401kSource": "test INV_401K_SOURCE",
      "relatedInstitutionTradeId": "test RELATED_INSTITUTION_TRADE_ID",
      "subaccountSecurityType": "test SUB_ACCOUNT_SECURITY_TYPE",
      "penaltyAmount": 18,
      "sharesPerContract": 19,
      "stateWithholding": 20,
      "taxesAmount": 21,
      "unitPrice": 22,
      "securedType": "test SECURED_TYPE",
      "reveralInstitutionTransactionId": "599",
      "investmentTransactionType": "other"
    },
    {
      "id": 6912887325,
      "amount": 2.23,
      "accountId": 6002915598,
      "customerId": 6001391193,
      "status": "active",
      "description": "[No description provided by institution]",
      "feeAmount": 9.95,
      "symbol": "ABC",
      "unitQuantity": 100.0,
      "unitAction": "BUY",
      "postedDate": 1652788800,
      "transactionDate": 1652788800,
      "createdDate": 1652786824,
      "categorization": {
        "category": "Restaurants"
      },
      "confirmationNumber": "test confirmation",
      "payeeId": "test PAYEE_ID",
      "extendedPayeeName": "test EXTENDED_PAYEE",
      "originalCurrency": "Y",
      "runningBalanceAmount": 23,
      "escrowTaxAmount": 12,
      "escrowInsuranceAmount": 14,
      "escrowPmiAmount": 15,
      "escrowFeesAmount": 16,
      "escrowOtherAmount": 17,
      "inv401kSource": "test INV_401K_SOURCE",
      "relatedInstitutionTradeId": "test RELATED_INSTITUTION_TRADE_ID",
      "subaccountSecurityType": "test SUB_ACCOUNT_SECURITY_TYPE",
      "penaltyAmount": 18,
      "sharesPerContract": 19,
      "stateWithholding": 20,
      "taxesAmount": 21,
      "unitPrice": 22,
      "securedType": "test SECURED_TYPE",
      "reveralInstitutionTransactionId": "599",
      "investmentTransactionType": "other"
    },
    {
      "id": 6870068613,
      "amount": 2.23,
      "accountId": 6002915598,
      "customerId": 6001391193,
      "status": "active",
      "description": "[No description provided by institution]",
      "feeAmount": 9.95,
      "symbol": "ABC",
      "unitQuantity": 100.0,
      "unitAction": "BUY",
      "postedDate": 1652702400,
      "transactionDate": 1652702400,
      "createdDate": 1652694694,
      "categorization": {
        "category": "Restaurants"
      },
      "confirmationNumber": "test confirmation",
      "payeeId": "test PAYEE_ID",
      "extendedPayeeName": "test EXTENDED_PAYEE",
      "originalCurrency": "Y",
      "runningBalanceAmount": 23,
      "escrowTaxAmount": 12,
      "escrowInsuranceAmount": 14,
      "escrowPmiAmount": 15,
      "escrowFeesAmount": 16,
      "escrowOtherAmount": 17,
      "inv401kSource": "test INV_401K_SOURCE",
      "relatedInstitutionTradeId": "test RELATED_INSTITUTION_TRADE_ID",
      "subaccountSecurityType": "test SUB_ACCOUNT_SECURITY_TYPE",
      "penaltyAmount": 18,
      "sharesPerContract": 19,
      "stateWithholding": 20,
      "taxesAmount": 21,
      "unitPrice": 22,
      "securedType": "test SECURED_TYPE",
      "reveralInstitutionTransactionId": "599",
      "investmentTransactionType": "other"
    }
  ]
}
```

