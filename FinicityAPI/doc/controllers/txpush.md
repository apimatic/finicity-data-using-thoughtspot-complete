# TxPush

```ts
const txpushController = new TxpushController(client);
```

## Class Name

`TxpushController`

## Methods

* [Create TxPush Test Transaction](../../doc/controllers/txpush.md#create-txpush-test-transaction)
* [Delete TxPush Subscription](../../doc/controllers/txpush.md#delete-txpush-subscription)
* [Disable TxPush Notifications](../../doc/controllers/txpush.md#disable-txpush-notifications)
* [Subscribe to TxPush Notifications](../../doc/controllers/txpush.md#subscribe-to-txpush-notifications)


# Create TxPush Test Transaction

Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app’s TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts (accounts on institution 101732).

```ts
async createTxpushTestTransaction(
  contentType: string,
  accept: string,
  customerId: bigint,
  accountId: bigint,
  body: CreateTxpushTestTransactionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTxpushTestTransactionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | application/json, application/xml |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The ID of the customer who owns the account |
| `accountId` | `bigint` | Template, Required | The Finicity ID of the account whose events will be sent to the TxPUSH Listener |
| `body` | [`CreateTxpushTestTransactionRequest`](../../doc/models/create-txpush-test-transaction-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTxpushTestTransactionResponse`](../../doc/models/create-txpush-test-transaction-response.md)

## Example Usage

```ts
const contentType = 'application/json';
const accept = 'application/json';
const customerId = 45856;
const accountId = 789656;
const body: CreateTxpushTestTransactionRequest = {
  amount: -4.25,
  description: 'a testing transaction description',
  postedDate: 1588888169,
  transactionDate: 1588801769,
};
body.status = 'pending';

try {
  const { result, ...httpResponse } = await txpushController.createTxpushTestTransaction(contentType, accept, customerId, accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete TxPush Subscription

Delete a specific subscription to TxPush notifications for the indicated account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.

```ts
async deleteTxpushSubscription(
  customerId: bigint,
  subscriptionId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | The ID of the customer who owns the account |
| `subscriptionId` | `bigint` | Template, Required | The ID of the specific subscription to be deleted, returned from Enable TxPUSH Notifications |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 1005061234;
const subscriptionId = 12345678;
try {
  const { result, ...httpResponse } = await txpushController.deleteTxpushSubscription(customerId, subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Disable TxPush Notifications

Delete all TxPush subscriptions with their notifications for the indicated account. No more notifications will be sent for account or transaction events.

```ts
async disableTxpushNotifications(
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | The ID of the customer who owns the account |
| `accountId` | `bigint` | Template, Required | The Finicity ID of the account whose events will be sent to the TxPUSH Listener |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await txpushController.disableTxpushNotifications(customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Subscribe to TxPush Notifications

Register a client app’s TxPUSH Listener to receive TxPUSH notifications related to the given account.

Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account’s fields (such as balance or interestRate). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPUSH services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.

The listener’s URL must be secure (https) for any real-world account. In addition, the client’sTxPUSH Listener will need to be verified. HTTP and HTTPS connections are only allowed on the standard ports 80 (HTTP) and 443 (HTTPS). The use of other ports will result with the call failing. For additional details on this process please see, TxPUSH Listener Service.

```ts
async subscribeToTxpushNotifications(
  contentType: string,
  accept: string,
  customerId: bigint,
  accountId: bigint,
  body: TxpushSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TxpushSubscriptions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | application/json, application/xml |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | The Finicity ID of the customer who owns the account |
| `accountId` | `bigint` | Template, Required | The Finicity ID of the account whose events will be sent to the TxPUSH Listener |
| `body` | [`TxpushSubscriptionRequest`](../../doc/models/txpush-subscription-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TxpushSubscriptions`](../../doc/models/txpush-subscriptions.md)

## Example Usage

```ts
const contentType = 'application/json';
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
const body: TxpushSubscriptionRequest = {
  callbackUrl: 'https://www.mydomain.com/txpush/listener',
};

try {
  const { result, ...httpResponse } = await txpushController.subscribeToTxpushNotifications(contentType, accept, customerId, accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

