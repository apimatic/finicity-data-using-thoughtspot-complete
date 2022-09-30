# Payments

```ts
const paymentsController = new PaymentsController(client);
```

## Class Name

`PaymentsController`

## Methods

* [Get Account ACH Details](../../doc/controllers/payments.md#get-account-ach-details)
* [Get Available Balance](../../doc/controllers/payments.md#get-available-balance)
* [Get Available Balance - Live](../../doc/controllers/payments.md#get-available-balance---live)


# Get Account ACH Details

This will return the real account number and routing number details for an ACH payment.

Note: This is a premium service, billable per every successful API call.

```ts
async getAccountACHDetails(
  accept: string,
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ACHDetails>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `string` | Template, Required | Finicity’s ID for the customer who owns the account |
| `accountId` | `string` | Template, Required | Finicity’s ID of the account |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ACHDetails`](../../doc/models/ach-details.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = '1005061234';
const accountId = '1014136057';
try {
  const { result, ...httpResponse } = await paymentsController.getAccountACHDetails(accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Available Balance

Retrieve the latest cached available and cleared account balances for a customer. Since we update and store balances throughout the day, this is the most accurate balance information available when a connection to a financial institution is unavailable or when a faster response is needed.

Timestamps are in Unix Epoch time.

**Note**: This is a premium service, billable per every successful API call. Enrollment is required.

```ts
async getAvailableBalance(
  accept: string,
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAvailableBalanceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | ID for the customer who owns the account |
| `accountId` | `bigint` | Template, Required | ID for the customer’s account |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAvailableBalanceResponse`](../../doc/models/get-available-balance-response.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await paymentsController.getAvailableBalance(accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Available Balance - Live

Retrieve the available and cleared account balances for a single account in real-time directly from a financial institution.

Timestamps are in Unix Epoch time.

**Note**: This is a premium service, billable per every successful API call.

```ts
async getAvailableBalanceLive(
  accept: string,
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAvailableBalanceLiveResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | ID for the customer who owns the account |
| `accountId` | `bigint` | Template, Required | ID for the customer’s account |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAvailableBalanceLiveResponse`](../../doc/models/get-available-balance-live-response.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await paymentsController.getAvailableBalanceLive(accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

