# Pay Statements

```ts
const payStatementsController = new PayStatementsController(client);
```

## Class Name

`PayStatementsController`


# Store Customer Pay Statement

Services to store a pay statement for a customer. Within the body of the request, the base 64 encoded value of the pay statement must be passed with a label.

```ts
async storeCustomerPayStatement(
  finicityAppKey: string,
  finicityAppToken: string,
  customerId: bigint,
  body: StorePayStatementRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StorePayStatementResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `finicityAppKey` | `string` | Header, Required | Finicity-App-Key from Developer Portal |
| `finicityAppToken` | `string` | Header, Required | Token returned from Partner Authentication |
| `customerId` | `bigint` | Template, Required | Finicity's ID of the customer |
| `body` | [`StorePayStatementRequest`](../../doc/models/store-pay-statement-request.md) | Body, Required | The base 64 encoded value of the pay statement and pay statement label. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StorePayStatementResponse`](../../doc/models/store-pay-statement-response.md)

## Example Usage

```ts
const finicityAppKey = 'Finicity-App-Key2';
const finicityAppToken = 'Finicity-App-Token4';
const customerId = 4453;
const body: StorePayStatementRequest = {
  label: 'lastPayPeriod',
  statement: 'base64',
};

try {
  const { result, ...httpResponse } = await payStatementsController.storeCustomerPayStatement(finicityAppKey, finicityAppToken, customerId, body);
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
  "assetId": "6b599a7e-236f-4a25-b070-425b52b9c1fe"
}
```

