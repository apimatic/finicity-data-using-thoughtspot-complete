# Get Portfolios

```ts
const getPortfoliosController = new GetPortfoliosController(client);
```

## Class Name

`GetPortfoliosController`

## Methods

* [Get Portfolio by Consumer](../../doc/controllers/get-portfolios.md#get-portfolio-by-consumer)
* [Get Portfolio by Customer](../../doc/controllers/get-portfolios.md#get-portfolio-by-customer)


# Get Portfolio by Consumer

Returns a portfolio of most recently generated report for each report type for a specified consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc), only the most recently generated report for the type will be returned.

HTTP 404 status means that there is no data for the consumer or portfolio. HTTP 200 (OK) status means that the call was successful.

```ts
async getPortfolioByConsumer(
  consumerId: string,
  portfolioId: string,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortfolioSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity report consumer ID (max length 32 characters) |
| `portfolioId` | `string` | Template, Required | Finicity portfolio ID (Max 17 characters) with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports for the consumer. |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PortfolioSummary`](../../doc/models/portfolio-summary.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const portfolioId = 'xh67j3xmt47e-1-port';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getPortfoliosController.getPortfolioByConsumer(consumerId, portfolioId, accept, contentType);
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


# Get Portfolio by Customer

Returns a portfolio of most recently generated report for each report type for a specified customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc), only the most recently generated report for the type will be returned.

HTTP 404 status means that there is no data for the customer or portfolio. HTTP 200 (OK) status means that the call was successful.

```ts
async getPortfolioByCustomer(
  customerId: bigint,
  portfolioId: string,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortfolioSummaryByCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity ID of the customer |
| `portfolioId` | `string` | Template, Required | Finicity portfolio ID (Max 17 characters) with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports for the consumer. |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PortfolioSummaryByCustomer`](../../doc/models/portfolio-summary-by-customer.md)

## Example Usage

```ts
const customerId = 1000278253;
const portfolioId = 'xh67j3xmt47e-1-port';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getPortfoliosController.getPortfolioByCustomer(customerId, portfolioId, accept, contentType);
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

