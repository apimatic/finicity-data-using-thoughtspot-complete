# Account Owner

```ts
const accountOwnerController = new AccountOwnerController(client);
```

## Class Name

`AccountOwnerController`


# Get Account Owner

Retrieve the names and addresses of the account owner from a financial institution.

**Note**: This is a premium service, billable per every successful API call.

HTTP status of 200 means the account owner’s name and address were retrieved successfully.

HTTP status of 203 means the response contains an MFA challenge in XML or JSON format. Contact your Account Manager or Systems Engineers to determine the best route to handle this HTTP status code.

This service retrieves account data from the institution. This usually returns quickly, but in some scenarios may take a few minutes to complete. In the event of a timeout condition, retry the call.

```ts
async getAccountOwner(
  accept: string,
  customerId: bigint,
  accountId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountOwnerV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | Finicity’s ID for the customer |
| `accountId` | `bigint` | Template, Required | Finicity’s ID of the account |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountOwnerV1`](../../doc/models/account-owner-v1.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
const accountId = 1014136057;
try {
  const { result, ...httpResponse } = await accountOwnerController.getAccountOwner(accept, customerId, accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

