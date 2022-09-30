# Customer

```ts
const customerController = new CustomerController(client);
```

## Class Name

`CustomerController`

## Methods

* [Add Customer](../../doc/controllers/customer.md#add-customer)
* [Add Testing Customer](../../doc/controllers/customer.md#add-testing-customer)
* [Delete Customer](../../doc/controllers/customer.md#delete-customer)
* [Get Customer](../../doc/controllers/customer.md#get-customer)
* [Get Customer With Application Data](../../doc/controllers/customer.md#get-customer-with-application-data)
* [Get Customers](../../doc/controllers/customer.md#get-customers)
* [Modify Customer](../../doc/controllers/customer.md#modify-customer)


# Add Customer

This is a version 2 service that replaces version 1. The new version supports passing an applicationId for assigning applicationId's to customers if a partner has more than one registered app.

Enroll an active customer, which is the actual owner of one or more real-world accounts. This is a billable customer.

This service is not available from the Test Drive. Calls to this service before enrolling in a paid plan will return HTTP 429 (Too Many Requests).

```ts
async addCustomer(
  accept: string,
  contentType: string,
  body: AddCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AddCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `contentType` | `string` | Header, Required | application/json, application/xml |
| `body` | [`AddCustomerRequest`](../../doc/models/add-customer-request.md) | Body, Required | The Fields For The New Customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AddCustomerResponse`](../../doc/models/add-customer-response.md)

## Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
const body: AddCustomerRequest = {
  username: 'USERNAME',
};
body.applicationId = '12345';

try {
  const { result, ...httpResponse } = await customerController.addCustomer(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add Testing Customer

This is a version 2 service that replaces version 1. The new version supports passing an applicationId for assigning applicationId's to customers if a partner has more than one registered app.

Enroll a testing customer that is available for Test Drive accounts.

For using testing customers when testing Finbank OAuth register a test application with your systems engineer or account manager. You would then use that testing applicationId for the creating of any testing customers. Testing customers can only be assigned to testing OAuth applications and Testing customers can only add accounts to Finbank OAuth for testing OAuth implementation as well as other Finbank testing institutions.

```ts
async addTestingCustomer(
  accept: string,
  contentType: string,
  body: AddCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AddCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `contentType` | `string` | Header, Required | application/json, application/xml |
| `body` | [`AddCustomerRequest`](../../doc/models/add-customer-request.md) | Body, Required | The Fields For The New Customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AddCustomerResponse`](../../doc/models/add-customer-response.md)

## Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
const body: AddCustomerRequest = {
  username: 'USERNAME',
};
body.applicationId = '12345';

try {
  const { result, ...httpResponse } = await customerController.addTestingCustomer(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Customer

Completely remove a customer from the system. This will remove the customer and all associated accounts and transactions.

(Note that the request and response is the same for JSON or XML clients.)

Use this service carefully! It will not pause for confirmation before performing the operation!

Success: HTTP 204 (No Content)

```ts
async deleteCustomer(
  customerId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 1005061234;
try {
  const { result, ...httpResponse } = await customerController.deleteCustomer(customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer

Get the details for the specified customer. The service will return HTTP 200 upon a successful call. If the customer does not exist, the service will return HTTP 404.

```ts
async getCustomer(
  contentLength: string,
  accept: string,
  customerId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Customer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentLength` | `string` | Header, Required | Must be 0 (this request has no body) |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Customer`](../../doc/models/customer.md)

## Example Usage

```ts
const contentLength = '0';
const accept = 'application/json';
const customerId = 1005061234;
try {
  const { result, ...httpResponse } = await customerController.getCustomer(contentLength, accept, customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer With Application Data

Get the details for the specified customer with additional details that includes the OAuth application info. The service will return HTTP 200 upon a successful call. If the customer does not exist, the service will return HTTP 404.

```ts
async getCustomerWithApplicationData(
  accept: string,
  customerId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerWithApplicationData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerWithApplicationData`](../../doc/models/customer-with-application-data.md)

## Example Usage

```ts
const accept = 'application/json';
const customerId = 1005061234;
try {
  const { result, ...httpResponse } = await customerController.getCustomerWithApplicationData(accept, customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customers

Find all customers enrolled by the current partner, where the search text is found in the customer’s username or any combination of firstName and lastName fields. If no search text is provided, return all customers.

Valid values for type are testing, active.

If the value of moreAvailable in the response is true, you can retrieve the next page of results by increasing the value of the start parameter in your next request:

…&start=6&limit=5

```ts
async getCustomers(
  accept: string,
  search?: string,
  username?: string,
  start?: bigint,
  limit?: bigint,
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCustomersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `search` | `string \| undefined` | Query, Optional | The text you wish to match. Leave this empty if you wish to return all customers. Must be URL-encoded (see Handling Spaces in Queries) |
| `username` | `string \| undefined` | Query, Optional | Username for exact match. (Will return 0 or 1 records.) |
| `start` | `bigint \| undefined` | Query, Optional | Starting index for this page of results. The default value is 1.<br>**Default**: `1` |
| `limit` | `bigint \| undefined` | Query, Optional | Maximum number of entries for this page of results. The default value is 25.<br>**Default**: `25` |
| `type` | `string \| undefined` | Query, Optional | One of the values testing or active to return only customers of that type, or leave empty to return all customers. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCustomersResponse`](../../doc/models/get-customers-response.md)

## Example Usage

```ts
const accept = 'application/json';
const search = 'searchvalue';
const username = 'customerusername1';
const start = 1;
const limit = 25;
const type = 'active';
try {
  const { result, ...httpResponse } = await customerController.getCustomers(accept, search, username, start, limit, type);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Modify Customer

Modify the details for an enrolled customer. You must specify either the first name, the last name, or both in the request.

If the service is successful, HTTP 204 (No Content) will be returned.

```ts
async modifyCustomer(
  contentType: string,
  customerId: bigint,
  body: ModifyCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | application/json, application/xml |
| `customerId` | `bigint` | Template, Required | Finicity ‘s ID of the customer to modify |
| `body` | [`ModifyCustomerRequest`](../../doc/models/modify-customer-request.md) | Body, Required | The information to be modified for the customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const customerId = 1005061234;
const body: ModifyCustomerRequest = {
  firstName: 'John',
  lastName: 'Smith',
};

try {
  const { result, ...httpResponse } = await customerController.modifyCustomer(contentType, customerId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

