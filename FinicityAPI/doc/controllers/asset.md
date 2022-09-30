# Asset

```ts
const assetController = new AssetController(client);
```

## Class Name

`AssetController`


# Get Asset by Customer ID

Retrieve a binary file with the given assetId. The returned content type is always application/octet-stream. If the service successfully retrieves the asset, HTTP 200 (OK) will be returned. If the asset doesn’t exist, HTTP 404 (Not Found) will be returned. If you would like to see an error message on the return, include application/json or application/xml in your desired format for the Accept header.

```ts
async getAssetByCustomerID(
  customerId: string,
  assetId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | - |
| `assetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 'customerId6';
const assetId = 'assetId4';
try {
  const { result, ...httpResponse } = await assetController.getAssetByCustomerID(customerId, assetId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

