# Deprecated

```ts
const deprecatedController = new DeprecatedController(client);
```

## Class Name

`DeprecatedController`

## Methods

* [Add Customer V1](../../doc/controllers/deprecated.md#add-customer-v1)
* [Add Testing Customer V1](../../doc/controllers/deprecated.md#add-testing-customer-v1)
* [Generate Connect URL All Types](../../doc/controllers/deprecated.md#generate-connect-url-all-types)
* [Generate Connect URL Data and Payments Connect](../../doc/controllers/deprecated.md#generate-connect-url-data-and-payments-connect)
* [Generate Connect URL Fix](../../doc/controllers/deprecated.md#generate-connect-url-fix)
* [Generate Connect URL Lending](../../doc/controllers/deprecated.md#generate-connect-url-lending)
* [Generate Connect URL Lite](../../doc/controllers/deprecated.md#generate-connect-url-lite)
* [Get App Registration Status V1](../../doc/controllers/deprecated.md#get-app-registration-status-v1)
* [Get Pay Statement by Consumer](../../doc/controllers/deprecated.md#get-pay-statement-by-consumer)
* [Get Pay Statement Extraction by Customer](../../doc/controllers/deprecated.md#get-pay-statement-extraction-by-customer)
* [Get Prequalification Report by Consumer](../../doc/controllers/deprecated.md#get-prequalification-report-by-consumer)
* [Get Prequalification VOA Report by Customer](../../doc/controllers/deprecated.md#get-prequalification-voa-report-by-customer)
* [Get Report by Consumer](../../doc/controllers/deprecated.md#get-report-by-consumer)
* [Get Report by Customer](../../doc/controllers/deprecated.md#get-report-by-customer)
* [Get Statement Report by Consumer](../../doc/controllers/deprecated.md#get-statement-report-by-consumer)
* [Get Statement Report by Customer](../../doc/controllers/deprecated.md#get-statement-report-by-customer)
* [Get Transactions Report by Consumer](../../doc/controllers/deprecated.md#get-transactions-report-by-consumer)
* [Get Transactions Report by Customer](../../doc/controllers/deprecated.md#get-transactions-report-by-customer)
* [Get VOA Report by Consumer](../../doc/controllers/deprecated.md#get-voa-report-by-consumer)
* [Get VOA Report by Customer](../../doc/controllers/deprecated.md#get-voa-report-by-customer)
* [Get VOA With Income Report by Consumer](../../doc/controllers/deprecated.md#get-voa-with-income-report-by-consumer)
* [Get VOA With Income Report by Customer](../../doc/controllers/deprecated.md#get-voa-with-income-report-by-customer)
* [Get VOI Report by Consumer](../../doc/controllers/deprecated.md#get-voi-report-by-consumer)
* [Get VOI Report by Customer](../../doc/controllers/deprecated.md#get-voi-report-by-customer)
* [Get VOIE TXVerify Report by Consumer](../../doc/controllers/deprecated.md#get-voie-txverify-report-by-consumer)
* [Get VOIE TXVerify Report by Customer](../../doc/controllers/deprecated.md#get-voie-txverify-report-by-customer)
* [Invoice Billing Endpoint](../../doc/controllers/deprecated.md#invoice-billing-endpoint)
* [Migrate Institution Login Accounts V1](../../doc/controllers/deprecated.md#migrate-institution-login-accounts-v1)
* [Send Connect Email](../../doc/controllers/deprecated.md#send-connect-email)


# Add Customer V1

This version 1 service has been replaced with version 2

Enroll an active customer, which is the actual owner of one or more real-world accounts. This is a billable customer.

This service is not available from the Test Drive. Calls to this service before enrolling in a paid plan will return HTTP 429 (Too Many Requests).

```ts
async addCustomerV1(
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
body.firstName = 'FIRST_NAME';
body.lastName = 'LAST_NAME';

try {
  const { result, ...httpResponse } = await deprecatedController.addCustomerV1(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add Testing Customer V1

Enroll a testing customer. A testing customer may only register accounts with FinBank institutions.

```ts
async addTestingCustomerV1(
  contentType: string,
  accept: string,
  body: AddCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AddCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | application/json, application/xml |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`AddCustomerRequest`](../../doc/models/add-customer-request.md) | Body, Required | The Fields For The New Testing Customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AddCustomerResponse`](../../doc/models/add-customer-response.md)

## Example Usage

```ts
const contentType = 'application/json';
const accept = 'application/json';
const body: AddCustomerRequest = {
  username: 'customerusername1',
};

try {
  const { result, ...httpResponse } = await deprecatedController.addTestingCustomerV1(contentType, accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Connect URL All Types

No matter how you plan on implementing Finicity Connect, you’ll need to generate and retrieve a Finicity Connect Link.  You will need to specify what type of Finicity Connect you need depending on what will happen once the customer accounts and transaction data are gathered.  Below you’ll find how to generate the Connect link as well as where to specify what type of Finicity Connect you need.

Once you have generated the link it will only last until the authentication token under which it was generated expires.  After that you will need to regenerate the Connect link under a new authentication token. We recommend generating a new authentication token when you generate a Connect link, to guarantee a full two hour life-span.

Several Finicity products utilize Finicity Connect, and most products have their own type of Connect.  The Connect type is controlled by the “type” code in the call.  Many times the type also corresponds to the report that will be run upon completing the Connect flow.

It is best to use the documentation for the specific use case you are interested in as the documentation here is a list of all the possible parameters you can send for this endpoint depending on the use case. See the following more specific documentation for your use case.......
Generate Finicity Connect URL (Data and Payments)
Generate Finicity Connect URL (Lending)
Generate Finicity Connect URL (Lite)
Generate Finicity Connect URL (Fix)

```ts
async generateConnectURLAllTypes(
  accept: string,
  body: GenerateConnectURLRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequest`](../../doc/models/generate-connect-url-request.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequest = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  type: 'aggregation',
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.analytics = 'google:UA-123456789-1';

try {
  const { result, ...httpResponse } = await deprecatedController.generateConnectURLAllTypes(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Connect URL Data and Payments Connect

No matter how you plan on implementing Finicity Connect, you’ll need to generate and retrieve a Finicity Connect Link.  You will need to specify what type of Finicity Connect you need depending on what will happen once the customer accounts and transaction data are gathered.  Below you’ll find how to generate the Connect link as well as where to specify what type of Finicity Connect you need.

Once you have generated the link it will only last until the authentication token under which it was generated expires.  After that you will need to regenerate the Connect link under a new authentication token. We recommend generating a new authentication token when you generate a Connect link, to guarantee a full two hour life-span.

Several Finicity products utilize Finicity Connect, and most products have their own type of Connect.  The Connect type is controlled by the “type” code in the call.

See the specific documentation for the types to see more details on the flow. This documentation gives the applicable implementation details for the following types......

- ach
- aggregation

```ts
async generateConnectURLDataAndPaymentsConnect(
  accept: string,
  body: GenerateConnectURLRequestDataAndPayments,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequestDataAndPayments`](../../doc/models/generate-connect-url-request-data-and-payments.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequestDataAndPayments = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  type: 'aggregation',
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.analytics = 'google:UA-123456789-1';

try {
  const { result, ...httpResponse } = await deprecatedController.generateConnectURLDataAndPaymentsConnect(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Connect URL Fix

No matter how you plan on implementing Finicity Connect, you’ll need to generate and retrieve a Finicity Connect Link.  You will need to specify what type of Finicity Connect you need depending on what will happen once the customer accounts and transaction data are gathered.  Below you’ll find how to generate the Connect link as well as where to specify what type of Finicity Connect you need.

Once you have generated the link it will only last until the authentication token under which it was generated expires.  After that you will need to regenerate the Connect link under a new authentication token. We recommend generating a new authentication token when you generate a Connect link, to guarantee a full two hour life-span.

Several Finicity products utilize Finicity Connect, and most products have their own type of Connect.  The Connect type is controlled by the “type” code in the call.

See the specific documentation for the types to see more details on the flow. This documentation gives the applicable implementation details for the following types......

- fix

```ts
async generateConnectURLFix(
  accept: string,
  body: GenerateConnectURLRequestFix,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequestFix`](../../doc/models/generate-connect-url-request-fix.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequestFix = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  type: 'fix',
};
body.institutionLoginId = '1007302745';
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.analytics = 'google:UA-123456789-1';

try {
  const { result, ...httpResponse } = await deprecatedController.generateConnectURLFix(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Connect URL Lending

No matter how you plan on implementing Finicity Connect, you’ll need to generate and retrieve a Finicity Connect Link.  You will need to specify what type of Finicity Connect you need depending on what will happen once the customer accounts and transaction data are gathered.  Below you’ll find how to generate the Connect link as well as where to specify what type of Finicity Connect you need.

Once you have generated the link it will only last until the authentication token under which it was generated expires.  After that you will need to regenerate the Connect link under a new authentication token. We recommend generating a new authentication token when you generate a Connect link, to guarantee a full two hour life-span.

Several Finicity products utilize Finicity Connect, and most products have their own type of Connect.  The Connect type is controlled by the “type” code in the call. For lending, each type signifies a report that will be generated as part of the connect flow unless otherwise specified.

See the specific documentation for the types to see more details on the flow. This documentation gives the applicable implementation details for the following types......

- voa
- voahistory
- voi
- voieTxVerify
- voieStatement
- payStatement
- assetSummary
- preQualVoa

```ts
async generateConnectURLLending(
  accept: string,
  body: GenerateConnectURLRequestLending,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequestLending`](../../doc/models/generate-connect-url-request-lending.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequestLending = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  consumerId: '86238nvnw7269e224a4e3de12352d87d',
  type: 'voa',
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.analytics = 'google:UA-123456789-1';

try {
  const { result, ...httpResponse } = await deprecatedController.generateConnectURLLending(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Connect URL Lite

No matter how you plan on implementing Finicity Connect, you’ll need to generate and retrieve a Finicity Connect Link.  You will need to specify what type of Finicity Connect you need depending on what will happen once the customer accounts and transaction data are gathered.  Below you’ll find how to generate the Connect link as well as where to specify what type of Finicity Connect you need.

Once you have generated the link it will only last until the authentication token under which it was generated expires.  After that you will need to regenerate the Connect link under a new authentication token. We recommend generating a new authentication token when you generate a Connect link, to guarantee a full two hour life-span.

Several Finicity products utilize Finicity Connect, and most products have their own type of Connect.  The Connect type is controlled by the “type” code in the call.

See the specific documentation for the types to see more details on the flow. This documentation gives the applicable implementation details for the following types......

- lite

```ts
async generateConnectURLLite(
  accept: string,
  body: GenerateConnectURLRequestLite,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequestLite`](../../doc/models/generate-connect-url-request-lite.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequestLite = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  type: 'lite',
  institutionId: 102224,
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.analytics = 'google:UA-123456789-1';

try {
  const { result, ...httpResponse } = await deprecatedController.generateConnectURLLite(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get App Registration Status V1

Get the status of your application registration to access FI's with OAuth connections.

```ts
async getAppRegistrationStatusV1(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AppStatusesV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AppStatusesV1`](../../doc/models/app-statuses-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await deprecatedController.getAppRegistrationStatusV1();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Pay Statement by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getPayStatementByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayStatementReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PayStatementReportRecord`](../../doc/models/pay-statement-report-record.md)

## Example Usage

```ts
const consumerId = 'cb1ca7514739c7c7e18b576581e42e82';
const reportId = 'kfyd4c77ianm-paystatement';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getPayStatementByConsumer(consumerId, reportId, accept, contentType);
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


# Get Pay Statement Extraction by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getPayStatementExtractionByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayStatementReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PayStatementReportRecord`](../../doc/models/pay-statement-report-record.md)

## Example Usage

```ts
const customerId = 2177270;
const reportId = 'kfyd4c77ianm-paystatement';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getPayStatementExtractionByCustomer(customerId, reportId, accept, contentType);
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


# Get Prequalification Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getPrequalificationReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrequalificationReportNonCRA>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrequalificationReportNonCRA`](../../doc/models/prequalification-report-non-cra.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = '88w4fbssrbja-prequalvoa';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getPrequalificationReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get Prequalification VOA Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getPrequalificationVOAReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrequalificationReportNonCRA>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrequalificationReportNonCRA`](../../doc/models/prequalification-report-non-cra.md)

## Example Usage

```ts
const customerId = 1000006504;
const reportId = '88w4fbssrbja-prequalvoa';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getPrequalificationVOAReportByCustomer(customerId, reportId, accept, contentType);
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


# Get Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditableReport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report (UUID with max length 32 characters) |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuditableReport`](../../doc/models/auditable-report.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditableReport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuditableReport`](../../doc/models/auditable-report.md)

## Example Usage

```ts
const customerId = 1000278253;
const reportId = '41h4nzppn37u';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getReportByCustomer(customerId, reportId, accept, contentType);
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


# Get Statement Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getStatementReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementReportRecord`](../../doc/models/statement-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = '38dknche83oh-statement';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getStatementReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get Statement Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getStatementReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementReportRecord`](../../doc/models/statement-report-record.md)

## Example Usage

```ts
const customerId = 1000006504;
const reportId = '38dknche83oh-statement';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getStatementReportByCustomer(customerId, reportId, accept, contentType);
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


# Get Transactions Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getTransactionsReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | JSON or  XML |
| `contentType` | `string` | Header, Required | JSON or  XML |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsReportRecord`](../../doc/models/transactions-report-record.md)

## Example Usage

```ts
const consumerId = 'cb1ca7514739c7c7e18b576581e42e82';
const reportId = 'kfyd4c77ianm-transactions';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getTransactionsReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get Transactions Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getTransactionsReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report (UUID with max length 32 characters) |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsReportRecord`](../../doc/models/transactions-report-record.md)

## Example Usage

```ts
const customerId = 1000006504;
const reportId = 'nez710uwgi1a-transactions';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getTransactionsReportByCustomer(customerId, reportId, accept, contentType);
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


# Get VOA Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOAReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOAReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOAReportRecord`](../../doc/models/voa-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = 'dgww4v7zsmy0';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOAReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get VOA Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOAReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOAReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOAReportRecord`](../../doc/models/voa-report-record.md)

## Example Usage

```ts
const customerId = 1000006504;
const reportId = 'dgww4v7zsmy0';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOAReportByCustomer(customerId, reportId, accept, contentType);
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


# Get VOA With Income Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOAWithIncomeReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOAWithIncomeReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOAWithIncomeReportRecord`](../../doc/models/voa-with-income-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = 'm7vk4btjvwtb';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOAWithIncomeReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get VOA With Income Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOAWithIncomeReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOAWithIncomeReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOAWithIncomeReportRecord`](../../doc/models/voa-with-income-report-record.md)

## Example Usage

```ts
const customerId = 1000006504;
const reportId = 'm7vk4btjvwtb';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOAWithIncomeReportByCustomer(customerId, reportId, accept, contentType);
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


# Get VOI Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIReportRecord`](../../doc/models/voi-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = 'nez710uwgi1a-voi';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOIReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get VOI Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report (UUID with max length 32 characters) |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIReportRecord`](../../doc/models/voi-report-record.md)

## Example Usage

```ts
const customerId = 1000006504;
const reportId = 'nez710uwgi1a-voi';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOIReportByCustomer(customerId, reportId, accept, contentType);
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


# Get VOIE TXVerify Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIETxverifyReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPaystubWithTxverifyReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPaystubWithTxverifyReportRecord`](../../doc/models/voie-paystub-with-txverify-report-record.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u-voietxverify';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOIETxverifyReportByConsumer(consumerId, reportId, accept, contentType);
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


# Get VOIE TXVerify Report by Customer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIETxverifyReportByCustomer(
  customerId: bigint,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  purpose?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPaystubWithTxverifyReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `purpose` | `string \| undefined` | Query, Optional | 2-digit code from Permissible Purpose Codes, specifying the reason for retrieving this report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPaystubWithTxverifyReportRecord`](../../doc/models/voie-paystub-with-txverify-report-record.md)

## Example Usage

```ts
const customerId = 1000278253;
const reportId = '41h4nzppn37u-voietxverify';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await deprecatedController.getVOIETxverifyReportByCustomer(customerId, reportId, accept, contentType);
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


# Invoice Billing Endpoint

Partners would like the capability to see the reports generated for a specific date range as well as the custom fields associated with the report. This will allow partners to determine which branches have generated specific reports to better bill those branches

```ts
async invoiceBillingEndpoint(
  accept: string,
  partnerId: string,
  startDate: string,
  endDate: string,
  viewTestingReports: string,
  size?: string,
  page?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceBillingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `partnerId` | `string` | Template, Required | Partner ID From Developer Portal |
| `startDate` | `string` | Query, Required | The earliest date to be analyzed in this report. This is required.  Note: The range between startDate and endDate must be 31 days or less. |
| `endDate` | `string` | Query, Required | The latest date to be analyzed in this report. This is required. |
| `viewTestingReports` | `string` | Query, Required | Designate as true to only display testing reports in the response. By default, this is false. |
| `size` | `string \| undefined` | Query, Optional | The size of the results returned per page. By default, this is 100 results per page and can be no more than 1000 results per page. This is optional. |
| `page` | `string \| undefined` | Query, Optional | The page to be viewed. Zero based index. This is optional. Default 0. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InvoiceBillingResponse`](../../doc/models/invoice-billing-response.md)

## Example Usage

```ts
const accept = 'application/json';
const partnerId = 'partnerId2';
const startDate = 'startDate0';
const endDate = 'endDate2';
const viewTestingReports = 'viewTestingReports0';
try {
  const { result, ...httpResponse } = await deprecatedController.invoiceBillingEndpoint(accept, partnerId, startDate, endDate, viewTestingReports);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Migrate Institution Login Accounts V1

This service has been replaced by version 2 call now "Migrate Institution Login Accounts"

This service is to migrate accounts from legacy FI to new OAuth FI.

A successful API response will return a list of accounts for the given institution login id with an http status code as 200.

```ts
async migrateInstitutionLoginAccountsV1(
  customerId: bigint,
  institutionLoginId: bigint,
  newInstitutionId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `bigint` | Template, Required | Finicity’s ID of the customer for the institutionLoginId of accounts |
| `institutionLoginId` | `bigint` | Template, Required | Finicity's institutionLoginId for the set of accounts to be migrated |
| `newInstitutionId` | `bigint` | Template, Required | New OAuth FI ID where accounts  will be migrated |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = 1005061234;
const institutionLoginId = 1007302745;
const newInstitutionId = 102224;
try {
  const { result, ...httpResponse } = await deprecatedController.migrateInstitutionLoginAccountsV1(customerId, institutionLoginId, newInstitutionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Connect Email

A connect email sends an email to the customer which will contain a link to the connect flow. You will need to specify what type of Finicity Connect you need depending on what will happen once the customer accounts and transaction data are gathered.

Several Finicity products utilize Finicity Connect, and most products have their own type of Connect.  The Connect type is controlled by the “type” code in the call.  Many times the type also corresponds to the report that will be run upon completing the Connect flow.

For Send Connect Email service it does not support the types aggregation, lite and fix.

See the endpoint Generate Finicity Connect URL (Lending) for additional details on a non email implementation.

```ts
async sendConnectEmail(
  accept: string,
  body: GenerateConnectEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectEmailResponseMultiBorrowers>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `body` | [`GenerateConnectEmailRequest`](../../doc/models/generate-connect-email-request.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectEmailResponseMultiBorrowers`](../../doc/models/generate-connect-email-response-multi-borrowers.md)

## Example Usage

```ts
const accept = 'application/json';
const bodyEmailSignature: string[] = ['Cindy Mayfield', 'Senior Loan Officer', 'Direct 123-456-7890'];
const bodyEmail: ConnectEmailOptions = {
  to: 'fin.user@finicity.com',
};
bodyEmail.supportPhone = '800-555-5555';
bodyEmail.subject = 'Verify your income';
bodyEmail.firstName = 'Bob';
bodyEmail.brandColor = '#4287f5';
bodyEmail.brandLogo = 'https://acme-lending.com/logo.png';
bodyEmail.institutionName = 'Acme Lending';
bodyEmail.institutionAddress = '222 Winipeg Drive SLC UT, 84109';
bodyEmail.signature = bodyEmailSignature;

const body: GenerateConnectEmailRequest = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  type: 'voa',
  email: bodyEmail,
};
body.consumerId = '86238nvnw7269e224a4e3de12352d87d';
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.analytics = 'google:UA-123456789-1';

try {
  const { result, ...httpResponse } = await deprecatedController.sendConnectEmail(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

