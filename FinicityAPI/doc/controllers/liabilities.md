# Liabilities

```ts
const liabilitiesController = new LiabilitiesController(client);
```

## Class Name

`LiabilitiesController`


# Get Loan Payment Details

This returns the loan payment details of the customer for a loan-type account.

**Note**: This is a premium service, billable per every successful API call.

**Depreciation Notice**: V1 of this endpoint will be depricated. Please use Get Loan Payment Details V2

```ts
async getLoanPaymentDetails(
  accept: string,
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoanPaymentDetails>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | ID of the customer |
| `accountId` | `bigint` | Template, Required | The Finicity ID of the account |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoanPaymentDetails`](../../doc/models/loan-payment-details.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await liabilitiesController.getLoanPaymentDetails(accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

