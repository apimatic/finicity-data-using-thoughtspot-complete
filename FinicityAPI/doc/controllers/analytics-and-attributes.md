# Analytics and Attributes

```ts
const analyticsAndAttributesController = new AnalyticsAndAttributesController(client);
```

## Class Name

`AnalyticsAndAttributesController`

## Methods

* [Generate Consumer Attributes - Beta](../../doc/controllers/analytics-and-attributes.md#generate-consumer-attributes---beta)
* [Generate FCRA Consumer Attributes - Beta](../../doc/controllers/analytics-and-attributes.md#generate-fcra-consumer-attributes---beta)
* [Get Consumer Attributes by ID - Beta](../../doc/controllers/analytics-and-attributes.md#get-consumer-attributes-by-id---beta)
* [List Consumer Attributes - Beta](../../doc/controllers/analytics-and-attributes.md#list-consumer-attributes---beta)


# Generate Consumer Attributes - Beta

Used to generate a Consumer Attributes report for a customer. The `To` and `From` date range is the last 12 months of consumer data, based on the `created_date` when the report was generated.

An `analityic_id` value is also created and associated with a customer’s ID. If you generate multiple Consumer Attributes reports for the same `customer_id`, a new `analityic_id` and `created_date` are created for each instance.

To view a list of all the `analytic_ids` for a customer, use the List Consumer Attributes API.

See [List Consumer Attributes - Beta API](https://api-reference.finicity.com/#/rest/api-endpoints/analytics/list-consumer-attributes-beta)

```ts
async generateConsumerAttributesBeta(
  accept: string,
  accountId: AccountIDConsumerAttributes[],
  customerId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConsumerAttributesReponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `accountId` | [`AccountIDConsumerAttributes[]`](../../doc/models/account-id-consumer-attributes.md) | Body, Required | An `accountId` generated for the data requested. |
| `customerId` | `bigint` | Template, Required | The ID for a customer. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConsumerAttributesReponse`](../../doc/models/generate-consumer-attributes-reponse.md)

## Example Usage

```ts
const accept = 'application/json';
const accountId: AccountIDConsumerAttributes[] = [];

const accountId0AccountIds: string[] = ['accountIds5', 'accountIds6'];
const accountId0: AccountIDConsumerAttributes = {
  accountIds: accountId0AccountIds,
};

accountId[0] = accountId0;

const customerId = 5000536031;
try {
  const { result, ...httpResponse } = await analyticsAndAttributesController.generateConsumerAttributesBeta(accept, accountId, customerId);
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
| 400 | **Bad Request**: Request was not formed correctly. | `ApiError` |
| 401 | **Unauthorized Error**: Authentication failed. | `ApiError` |
| 403 | **Forbidden**: The Partner does not have access to the given CustomerID. | `ApiError` |
| 404 | **Not Found**: The requested resource could not be found but may be available in the future. | `ApiError` |
| 503 | **Service Unavailable**: Service currently unavailable. The service may be available with later requests. | `ApiError` |


# Generate FCRA Consumer Attributes - Beta

```ts
async generateFCRAConsumerAttributesBeta(
  accept: string,
  accountId: AccountIDConsumerAttributes,
  customerId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateFCRACAResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `accountId` | [`AccountIDConsumerAttributes`](../../doc/models/account-id-consumer-attributes.md) | Body, Required | An `accountId` generated for the data requested per customer. |
| `customerId` | `number` | Template, Required | The ID of the customer. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateFCRACAResponse`](../../doc/models/generate-fcraca-response.md)

## Example Usage

```ts
const accept = 'application/json';
const accountIdAccountIds: string[] = ['12345678', '87654321'];
const accountId: AccountIDConsumerAttributes = {
  accountIds: accountIdAccountIds,
};

const customerId = 114;
try {
  const { result, ...httpResponse } = await analyticsAndAttributesController.generateFCRAConsumerAttributesBeta(accept, accountId, customerId);
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
| 400 | **Bad Request**: Request was not formed correctly. | `ApiError` |
| 401 | **Unauthorized Error**: Authentication failed. | `ApiError` |
| 403 | **Forbidden**: The Partner does not have access to the given CustomerID. | `ApiError` |
| 404 | **Not Found**: The requested resource could not be found but may be available in the future. | `ApiError` |
| 503 | **Service Unavailable**: Service currently unavailable. The service may be available with later requests. | `ApiError` |


# Get Consumer Attributes by ID - Beta

Used to retrieve a Consumer Attributes (CA) report for a customer. The `analytic_id` and the `created_date` are generated from the [Generate Consumer Attributes API-Beta] (https://api-reference.finicity.com/#/rest/api-endpoints/analytics/generate-consumer-attributes-beta).

Use the `analytic_id` and `customer_id` to retrieve 12 months of data attributes according to the `To` and `From` date range of the report at the time it was created.

If the current date is before the end of the calendar month, then the most recent month provides all available data up to the current date.

The CA data response is grouped into the following attribute objects:

* `accountIds`
* `dateRange`
* `income`
* `expenses`
* `netAmount`
* `nsf` (insufficient funds)
* `assets`
  * `customer`
  * `account`
* `liabilities`

```ts
async getConsumerAttributesByIDBeta(
  accept: string,
  analyticsId: string,
  customerId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetConsumerAttributesByIDResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `analyticsId` | `string` | Template, Required | An analytic ID generated for the requested report. |
| `customerId` | `bigint` | Template, Required | The ID for a customer. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetConsumerAttributesByIDResponse`](../../doc/models/get-consumer-attributes-by-id-response.md)

## Example Usage

```ts
const accept = 'application/json';
const analyticsId = 'ce9693d5-a83e-4ad0-a694-6f48c4fc7877';
const customerId = 5000536031;
try {
  const { result, ...httpResponse } = await analyticsAndAttributesController.getConsumerAttributesByIDBeta(accept, analyticsId, customerId);
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
| 400 | **Bad Request**: Request was not formed correctly. | `ApiError` |
| 401 | **Unauthorized Error**: Authentication failed. | `ApiError` |
| 403 | **Forbidden**: The Partner does not have access to the given CustomerID. | `ApiError` |
| 404 | **Not Found**: The requested resource could not be found but may be available in the future. | `ApiError` |
| 503 | **Service Unavailable**: Service currently unavailable. The service may be available with later requests. | `ApiError` |


# List Consumer Attributes - Beta

Used to retrieve a list of all the `analytic_ids` created for a customer from the Generate Consumer Attributes API.

The list displays all the `analytic_ids` and `created_date` (Epoch time) associated with a customer’s ID.

Depending on the `created_date`, select an analytic_id to
retrieve the Consumer Attributes report using the Get Consumer Attributes by ID API.

See [Get Consumer Attributes by ID – Beta API] (https://api-reference.finicity.com/#/rest/api-endpoints/analytics/get-consumer-attributes-by-id-beta)

```ts
async listConsumerAttributesBeta(
  accept: string,
  customerId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListConsumerAttributesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `customerId` | `bigint` | Template, Required | The ID for a customer. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListConsumerAttributesResponse`](../../doc/models/list-consumer-attributes-response.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 5000536031;
try {
  const { result, ...httpResponse } = await analyticsAndAttributesController.listConsumerAttributesBeta(accept, customerId);
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
| 400 | **Bad Request**: Request was not formed correctly. | `ApiError` |
| 401 | **Unauthorized Error**: Authentication failed. | `ApiError` |
| 403 | **Forbidden**: The Partner does not have access to the given CustomerID. | `ApiError` |
| 404 | **Not Found**: The requested resource could not be found but may be available in the future. | `ApiError` |
| 503 | **Service Unavailable**: Service currently unavailable. The service may be available with later requests. | `ApiError` |

