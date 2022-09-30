# App Registration and OAuth Migration

```ts
const appRegistrationAndOauthMigrationController = new AppRegistrationAndOauthMigrationController(client);
```

## Class Name

`AppRegistrationAndOauthMigrationController`

## Methods

* [App Registration](../../doc/controllers/app-registration-and-oauth-migration.md#app-registration)
* [Get App Registration Status V2](../../doc/controllers/app-registration-and-oauth-migration.md#get-app-registration-status-v2)
* [Migrate Institution Login Accounts V2](../../doc/controllers/app-registration-and-oauth-migration.md#migrate-institution-login-accounts-v2)
* [Modify App Registration](../../doc/controllers/app-registration-and-oauth-migration.md#modify-app-registration)
* [Set Customer Application ID](../../doc/controllers/app-registration-and-oauth-migration.md#set-customer-application-id)


# App Registration

Register new applications to access financial institutions using OAuth connections.

```ts
async appRegistration(
  body: AppRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AppRegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AppRegistrationRequest`](../../doc/models/app-registration-request.md) | Body, Required | The values for the new app registration |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AppRegistrationResponse`](../../doc/models/app-registration-response.md)

## Example Usage

```ts
const body: AppRegistrationRequest = {
  appDescription: 'The app that makes your budgeting experience awesome',
  appName: 'Awesome Budget App',
  appUrl: 'https://www.finicity.com/',
  ownerAddressLine1: '434 W Ascension Way',
  ownerAddressLine2: 'Suite #200',
  ownerCity: 'Murray',
  ownerCountry: 'USA',
  ownerName: 'Finicity',
  ownerPostalCode: '84123',
  ownerState: 'UT',
  image: '{bytes of image}',
};

try {
  const { result, ...httpResponse } = await appRegistrationAndOauthMigrationController.appRegistration(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get App Registration Status V2

Get the status of your application registration to access financial institutions using OAuth connections.

```ts
async getAppRegistrationStatusV2(
  accept?: string,
  preAppId?: bigint,
  applicationId?: string,
  status?: string,
  appName?: string,
  submittedDate?: bigint,
  modifiedDate?: bigint,
  page?: bigint,
  pageSize?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AppStatuses>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string \| undefined` | Header, Optional | application/json, application/xml<br>**Default**: `'application/json'` |
| `preAppId` | `bigint \| undefined` | Query, Optional | Look up the status of an app by the preAppId |
| `applicationId` | `string \| undefined` | Query, Optional | Look up the status of an app by the applicationId |
| `status` | `string \| undefined` | Query, Optional | Look up the status of app registration requests by the registration request status. Valid values P (For Pending), A (For Approved), R (For Rejected) |
| `appName` | `string \| undefined` | Query, Optional | Look up app registration requests by the application name |
| `submittedDate` | `bigint \| undefined` | Query, Optional | Look up app registration requests by the date they were submitted in epoch format. |
| `modifiedDate` | `bigint \| undefined` | Query, Optional | Look up app registration requests by the date the request was updated. This could be used to determine when the app was updated to approved or rejected. |
| `page` | `bigint \| undefined` | Query, Optional | Select which page of results to return<br>**Default**: `1` |
| `pageSize` | `bigint \| undefined` | Query, Optional | Select how many results per page to return<br>**Default**: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AppStatuses`](../../doc/models/app-statuses.md)

## Example Usage

```ts
const accept = 'application/json';
const preAppId = 7456;
const applicationId = '123456789';
const status = 'A';
const submittedDate = 1595303316;
const modifiedDate = 1595303316;
const page = 1;
const pageSize = 20;
try {
  const { result, ...httpResponse } = await appRegistrationAndOauthMigrationController.getAppRegistrationStatusV2(accept, preAppId, applicationId, status, None, submittedDate, modifiedDate, page, pageSize);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Migrate Institution Login Accounts V2

The institutionLoginId parameter uses Finicity’s internal FI mapping to move accounts from the current FI legacy connection to the new OAuth FI connection.

The API returns a list of accounts for the institution login id specified with an HTTP status code 200.

```ts
async migrateInstitutionLoginAccountsV2(
  customerId: bigint,
  institutionLoginId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | The target customer for the account migration |
| `institutionLoginId` | `bigint` | Template, Required | The institutionLoginId for the set of accounts to be migrated from the legacy FI ID to the new OAuth FI ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = 1005061234;
const institutionLoginId = 1007302745;
try {
  const { result, ...httpResponse } = await appRegistrationAndOauthMigrationController.migrateInstitutionLoginAccountsV2(customerId, institutionLoginId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Modify App Registration

Update the field values you want to change for the registered applications accessing financial institutions using OAuth connections.

```ts
async modifyAppRegistration(
  preAppId: bigint,
  body: ModifyAppRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AppRegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preAppId` | `bigint` | Template, Required | The preAppId from the App Registration and Get App Registration Status endpoints |
| `body` | [`ModifyAppRegistrationRequest`](../../doc/models/modify-app-registration-request.md) | Body, Required | The values for the app registration modification |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AppRegistrationResponse`](../../doc/models/app-registration-response.md)

## Example Usage

```ts
const preAppId = 1234;
const body: ModifyAppRegistrationRequest = {
  appDescription: 'The app that makes your budgeting experience even more awesome',
  appName: 'New Awesome Budget App',
  appUrl: 'https://www.finicity.com/',
  ownerAddressLine1: '434 W Ascension Way',
  ownerAddressLine2: 'Suite #200',
  ownerCity: 'Murray',
  ownerCountry: 'USA',
  ownerName: 'Finicity',
  ownerPostalCode: 84123,
  ownerState: 'UT',
  image: '{bytes of new logo image}',
};

try {
  const { result, ...httpResponse } = await appRegistrationAndOauthMigrationController.modifyAppRegistration(preAppId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Set Customer Application ID

If you have multiple applications for a single client, and you want to register their applications to access financial institutions using OAuth connections, then use this API to assign all applications to an existing customer.

```ts
async setCustomerApplicationID(
  customerId: bigint,
  applicationId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | The customer's ID for the customer you want to assign the app for. |
| `applicationId` | `bigint` | Template, Required | Application ID you want to assign the customer to. This is the "applicationId" value returned from the Get App Registration Status endpoint |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = 1005061234;
const applicationId = 12345;
try {
  const { result, ...httpResponse } = await appRegistrationAndOauthMigrationController.setCustomerApplicationID(customerId, applicationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

