# Institutions

```ts
const institutionsController = new InstitutionsController(client);
```

## Class Name

`InstitutionsController`

## Methods

* [Get Certified Institutions](../../doc/controllers/institutions.md#get-certified-institutions)
* [Get Certified Institutions With RSSD](../../doc/controllers/institutions.md#get-certified-institutions-with-rssd)
* [Get Institution](../../doc/controllers/institutions.md#get-institution)
* [Get Institution Branding](../../doc/controllers/institutions.md#get-institution-branding)
* [Get Institutions](../../doc/controllers/institutions.md#get-institutions)


# Get Certified Institutions

Search for institutions by certified product.

```ts
async getCertifiedInstitutions(
  accept: string,
  search: string,
  start?: number,
  limit?: number,
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCertifiedInstitutionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `search` | `string` | Query, Required | Text to match or * to return all supported institutions. |
| `start` | `number \| undefined` | Query, Optional | Starting index for this page of results (ignored if returning all institutions). This will default to 1.<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of entries for this page of results (ignored if returning all institutions). This will default to 25. Limits the number of results returned to 1000.<br>**Default**: `25` |
| `type` | `string \| undefined` | Query, Optional | Product types: transAgg, ach, stateAgg, voi, voa, aha, availBalance, accountOwner. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCertifiedInstitutionsResponse`](../../doc/models/get-certified-institutions-response.md)

## Example Usage

```ts
const accept = 'application/json';
const search = 'finbank';
const start = 1;
const limit = 25;
const type = 'voa';
try {
  const { result, ...httpResponse } = await institutionsController.getCertifiedInstitutions(accept, search, start, limit, type);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Certified Institutions With RSSD

Get Certified Institution List w/RSSD

```ts
async getCertifiedInstitutionsWithRSSD(
  accept: string,
  search: string,
  start: number,
  limit: number,
  type: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCertifiedInstitutionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `search` | `string` | Query, Required | Search term, * returns all institutions |
| `start` | `number` | Query, Required | Page (Default: 1) |
| `limit` | `number` | Query, Required | Limits the number of results returned (max: 1000) |
| `type` | `string` | Query, Required | Product types: transAgg, ach, stateAgg, voi, voa, aha, availBalance, accountOwner. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCertifiedInstitutionsResponse`](../../doc/models/get-certified-institutions-response.md)

## Example Usage

```ts
const accept = 'application/json';
const search = 'finbank';
const start = 1;
const limit = 25;
const type = 'voa';
try {
  const { result, ...httpResponse } = await institutionsController.getCertifiedInstitutionsWithRSSD(accept, search, start, limit, type);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Institution

Get details for the specified institution

```ts
async getInstitution(
  accept: string,
  institutionId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Institution>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `institutionId` | `bigint` | Template, Required | Finicity’s ID of the institution to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Institution`](../../doc/models/institution.md)

## Example Usage

```ts
const accept = 'application/json';
const institutionId = 101732;
try {
  const { result, ...httpResponse } = await institutionsController.getInstitution(accept, institutionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Institution Branding

This endpoint returns the branding information for an Institution given the `id`

```ts
async getInstitutionBranding(
  accept: string,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InstitutionBrandingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `id` | `number` | Template, Required | ID of the institution |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InstitutionBrandingResponse`](../../doc/models/institution-branding-response.md)

## Example Usage

```ts
const accept = 'application/json';
const id = 5;
try {
  const { result, ...httpResponse } = await institutionsController.getInstitutionBranding(accept, id);
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
| 404 | The requested entity was not found | `ApiError` |


# Get Institutions

Search for all the connected financial institutions (FI) that we support. This returns all the FIs that match the search text for the financial institution’s *name* field.
To get a list of all FIs, leave the *search* parameter out of the body of the API call. If the *search* parameter is in the body of the call but has no value, then the call returns an error.
If the value for *moreAvailable* in the response is true, you can retrieve the next page of results by increasing the value of the *start* parameter in your next request:

1st Request
…start=1&limit=25 (first 25 from list 1-25)

2nd Request
…start=2&limit=25 (next 25 from list 26-51)

```ts
async getInstitutions(
  accept: string,
  search?: string,
  start?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInstitutionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `search` | `string \| undefined` | Query, Optional | Match the text for the query. URL-encoded required. See Handling Spaces in Queries. <br> <br> **Note**: To get a list of all FIs, leave the *search* parameter out of the body of the API call. <br>  <br> If the *search* parameter is in the body of the call but has no value, then the call returns an error. |
| `start` | `number \| undefined` | Query, Optional | The starting page number of records returned. The default is 1. <br> <br>**Example**: If the limit for each call is 25, then start=1 returns 1-25 records. If start=2 then records 26-51 are returned.<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of records per page returned for the search request. The default is 25 records per page.<br>**Default**: `25` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetInstitutionsResponse`](../../doc/models/get-institutions-response.md)

## Example Usage

```ts
const accept = 'application/json';
const search = 'finbank';
const start = 1;
const limit = 25;
try {
  const { result, ...httpResponse } = await institutionsController.getInstitutions(accept, search, start, limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

