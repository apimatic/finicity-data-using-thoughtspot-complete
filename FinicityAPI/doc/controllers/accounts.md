# Accounts

```ts
const accountsController = new AccountsController(client);
```

## Class Name

`AccountsController`

## Methods

* [Delete Customer Account](../../doc/controllers/accounts.md#delete-customer-account)
* [Delete Customer Accounts by Institution Login](../../doc/controllers/accounts.md#delete-customer-accounts-by-institution-login)
* [Get Customer Account](../../doc/controllers/accounts.md#get-customer-account)
* [Get Customer Accounts](../../doc/controllers/accounts.md#get-customer-accounts)
* [Get Customer Accounts by Institution](../../doc/controllers/accounts.md#get-customer-accounts-by-institution)
* [Get Customer Accounts by Institution Login](../../doc/controllers/accounts.md#get-customer-accounts-by-institution-login)
* [Load Historic Transactions for Customer Account](../../doc/controllers/accounts.md#load-historic-transactions-for-customer-account)
* [Refresh Customer Accounts](../../doc/controllers/accounts.md#refresh-customer-accounts)
* [Refresh Customer Accounts by Institution Login](../../doc/controllers/accounts.md#refresh-customer-accounts-by-institution-login)


# Delete Customer Account

Remove the specified account from Finicity Aggregation.

```ts
async deleteCustomerAccount(
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | The ID of the customer who owns the account |
| `accountId` | `bigint` | Template, Required | Finicity’s ID of the account to be deleted |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await accountsController.deleteCustomerAccount(customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Customer Accounts by Institution Login

Remove the specified set of accounts by institution login id from the Finicity system.

(Note that the request and response are the same for JSON and XML clients.)

```ts
async deleteCustomerAccountsByInstitutionLogin(
  customerId: bigint,
  institutionLoginId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | The ID of the customer whose accounts are to be deleted |
| `institutionLoginId` | `bigint` | Template, Required | The Finicity ID of the Institution Login for the set of accounts to be deleted |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 1005061234;
const institutionLoginId = 1007302745;
try {
  const { result, ...httpResponse } = await accountsController.deleteCustomerAccountsByInstitutionLogin(customerId, institutionLoginId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Account

Get details for the specified account.

```ts
async getCustomerAccount(
  accept: string,
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID of the customer who owns the account |
| `accountId` | `bigint` | Template, Required | Finicity’s ID of the account to be retrieved |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccount`](../../doc/models/customer-account.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await accountsController.getCustomerAccount(accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Accounts

Get details for all accounts owned by the specified customer.

```ts
async getCustomerAccounts(
  accept: string,
  customerId: bigint,
  status?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID of the customer whose accounts are to be retrieved |
| `status` | `string \| undefined` | Query, Optional | append, ?status=pending, to return accounts and pending status. Pending accounts were discovered but not activated and will not have transactions or have balance updates |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const status = 'pending';
try {
  const { result, ...httpResponse } = await accountsController.getCustomerAccounts(accept, customerId, status);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Accounts by Institution

Get details for all active accounts owned by the specified customer at the specified institution.

```ts
async getCustomerAccountsByInstitution(
  accept: string,
  customerId: bigint,
  institutionId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID of the customer who owns the account |
| `institutionId` | `bigint` | Template, Required | Finicity’s ID of the institution |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const institutionId = 102224;
try {
  const { result, ...httpResponse } = await accountsController.getCustomerAccountsByInstitution(accept, customerId, institutionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer Accounts by Institution Login

Get details for all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.

```ts
async getCustomerAccountsByInstitutionLogin(
  accept: string,
  customerId: bigint,
  institutionLoginId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | Finicity ID for the customer whose accounts are to be retrieved |
| `institutionLoginId` | `bigint` | Template, Required | The institution login ID (from the account record) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const institutionLoginId = 1007302745;
try {
  const { result, ...httpResponse } = await accountsController.getCustomerAccountsByInstitutionLogin(accept, customerId, institutionLoginId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Load Historic Transactions for Customer Account

Connect to the account’s financial institution and load up to 24 months of historic transactions for the account. Length of history varies by institution.

This is a premium service. The billable event is a call to this service specifying a customerId that has not been seen before by this service. (If this service is called multiple times with the same customerId, to load transactions from multiple accounts, only one billable event has occurred.)

HTTP status of 204 means historic transactions have been loaded successfully. The transactions are now available by calling Get Customer Account Transactions.

HTTP status of 203 means the response contains an MFA challenge. Contact your Account Manager or Systems Engineers to determine the best route to handle this HTTP status code.

The recommended timeout setting for this request is 180 seconds in order to receive a response. However you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

This service usually requires the HTTP header Content-Length: 0 because it is a POST request with no request body.

The date range sent to the institution is calculated from the account’s createdDate. This means that calling this service a second time for the same account normally will not add any new transactions for the account. For this reason, a second call to this service for a known accountId will usually return immediately with HTTP 204.

In a few specific scenarios, it may be desirable to force a second connection to the institution for a known accountId. Some examples are:

- The institution’s policy has changed, making more transactions available.
- Finicity has now added a longer transaction history support for the institution.
- The first call encountered an error, and the resulting Aggregation Ticket has now been fixed by the Finicity Support Team.

In these cases, the POST request can contain the parameter force=true in the request body to force the second connection.

```ts
async loadHistoricTransactionsForCustomerAccount(
  contentLength: number,
  accept: string,
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentLength` | `number` | Header, Required | Must be 0 (this request has no body) |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID Of the customer who owns the account |
| `accountId` | `bigint` | Template, Required | The Finicity ID of the account to pull transaction history for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentLength = 0;
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await accountsController.loadHistoricTransactionsForCustomerAccount(contentLength, accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Refresh Customer Accounts

Refresh account and transaction data for all accounts associated with a given customerId with a connection to the institution.

Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.

Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

The recommended timeout setting for this request is 120 seconds in order to receive a response. However you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

```ts
async refreshCustomerAccounts(
  contentLength: number,
  accept: string,
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentLength` | `number` | Header, Required | Must be 0 (this request has no body) |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `string` | Template, Required | The ID of the customer who owns the accounts to be refreshed |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const contentLength = 0;
const accept = 'application/json';
const customerId = '1005061234';
try {
  const { result, ...httpResponse } = await accountsController.refreshCustomerAccounts(contentLength, accept, customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Refresh Customer Accounts by Institution Login

Refresh account and transaction data for all accounts associated with a given institutionLoginId with a connection to the institution.

Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.

Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

The recommended timeout setting for this request is 120 seconds in order to receive a response. However you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

```ts
async refreshCustomerAccountsByInstitutionLogin(
  contentLength: number,
  accept: string,
  customerId: string,
  institutionLoginId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentLength` | `number` | Header, Required | Must be 0 (this request has no body) |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `string` | Template, Required | The ID of the customer who owns the accounts |
| `institutionLoginId` | `string` | Template, Required | The institution login ID from the account records |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const contentLength = 0;
const accept = 'application/json';
const interactive = null;
const customerId = '1005061234';
const institutionLoginId = '1007302745';
try {
  const { result, ...httpResponse } = await accountsController.refreshCustomerAccountsByInstitutionLogin(contentLength, accept, customerId, institutionLoginId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

