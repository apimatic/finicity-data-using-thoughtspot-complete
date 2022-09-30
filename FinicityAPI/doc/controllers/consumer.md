# Consumer

```ts
const consumerController = new ConsumerController(client);
```

## Class Name

`ConsumerController`

## Methods

* [Create Consumer](../../doc/controllers/consumer.md#create-consumer)
* [Get Consumer](../../doc/controllers/consumer.md#get-consumer)
* [Get Consumer for Customer](../../doc/controllers/consumer.md#get-consumer-for-customer)
* [Modify Consumer](../../doc/controllers/consumer.md#modify-consumer)


# Create Consumer

Create a consumer record associated with the given customer. A consumer persists as the owner of any reports that are generated, even after the original customer is deleted from the system. A consumer must be created for the given customer before calling any of the Generate Report services.

If a consumer already exists for this customer, this service will return HTTP 409 (Conflict). If the consumer is successfully created, the service will return HTTP 201 (Created).

```ts
async createConsumer(
  customerId: bigint,
  body: CreateConsumerRequest,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateConsumerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID for the customer |
| `body` | [`CreateConsumerRequest`](../../doc/models/create-consumer-request.md) | Body, Required | - |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateConsumerResponse`](../../doc/models/create-consumer-response.md)

## Example Usage

```ts
const customerId = 1000278253;
const bodyBirthday: Birthday = {};
bodyBirthday.year = 1989;
bodyBirthday.month = 8;
bodyBirthday.dayOfMonth = 13;

const body: CreateConsumerRequest = {
  firstName: 'John',
  lastName: 'Smith',
  address: '434 W Ascension Way',
  city: 'Murray',
  state: 'UT',
  zip: '84123',
  phone: '6786786786',
  ssn: '111222333',
  birthday: bodyBirthday,
};
body.email = 'finicity@test.com';
body.suffix = 'Mr';

const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await consumerController.createConsumer(customerId, body, accept, contentType);
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
| 404 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Consumer

Get the details of a consumer record. If the service successfully retrieves the consumer record, HTTP 200 will be returned. If the consumer does not exist, the service will return HTTP 404.

```ts
async getConsumer(
  consumerId: string,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Consumer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Consumer`](../../doc/models/consumer.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await consumerController.getConsumer(consumerId, accept, contentType);
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
| 404 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Consumer for Customer

Get the details of a consumer record.

If the service is successful, HTTP 200 (Accepted) will be returned. If the customer does not exist, the service will return HTTP 404 (Not Found)

```ts
async getConsumerForCustomer(
  customerId: bigint,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Consumer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer<br>**Constraints**: *Pattern*: `[0-9]` |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Consumer`](../../doc/models/consumer.md)

## Example Usage

```ts
const customerId = 1000278253;
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await consumerController.getConsumerForCustomer(customerId, accept, contentType);
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
| 404 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Modify Consumer

Modify the details for an existing consumer. All fields are required for a consumer record, but individual fields for this call are optional because fields that are not specified will be left unchanged.

If the service is successful, HTTP 204 (No Content) will be returned. If the consumer does not exist, the service will return HTTP 404.

```ts
async modifyConsumer(
  consumerId: string,
  body: ModifyConsumerRequest,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity ID of the consumer (UUID with max length 32 characters) |
| `body` | [`ModifyConsumerRequest`](../../doc/models/modify-consumer-request.md) | Body, Required | Consumer details |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const bodyBirthday: Birthday = {};
bodyBirthday.year = 1989;
bodyBirthday.month = 8;
bodyBirthday.dayOfMonth = 13;

const body: ModifyConsumerRequest = {
  firstName: 'John',
  lastName: 'Smith',
  address: '434 W Ascension Way',
  city: 'Murray',
  state: 'UT',
  zip: '84123',
  phone: '6786786786',
  ssn: '111222333',
  birthday: bodyBirthday,
  email: 'finicity@test.com',
  emailAddress: 'finicity@test.com',
};
body.suffix = 'Mr';

const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await consumerController.modifyConsumer(consumerId, body, accept, contentType);
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
| 404 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |

