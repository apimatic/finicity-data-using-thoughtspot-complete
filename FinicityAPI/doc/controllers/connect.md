# Connect

Connect API

```ts
const connectController = new ConnectController(client);
```

## Class Name

`ConnectController`

## Methods

* [Generate V2 Connect URL](../../doc/controllers/connect.md#generate-v2-connect-url)
* [Generate V2 Connect URL - Joint Borrower](../../doc/controllers/connect.md#generate-v2-connect-url---joint-borrower)
* [Generate V2 Fix Connect URL](../../doc/controllers/connect.md#generate-v2-fix-connect-url)
* [Generate V2 Lite Connect URL](../../doc/controllers/connect.md#generate-v2-lite-connect-url)
* [Send V2 Connect Email](../../doc/controllers/connect.md#send-v2-connect-email)
* [Send V2 Connect Email - Joint Borrower](../../doc/controllers/connect.md#send-v2-connect-email---joint-borrower)


# Generate V2 Connect URL

Generates a Connect 2.0 URL link to add within your own applications. Use the `experience` parameter to call Connect (per session) in the body of the request. Configure the `experience` parameter to change the brand color, logo, icon, which credit decisioning report to generate when the Connect application completes, and more.

**Note**: Contact your Sales Account Team to set up the `experience` parameter.

**MVS Developers** : You can pre-populate the consumer’s SSN on the Find employment records page at the beginning of the MVS payroll app. Pass the SSN value for the consumer in the body of the request call.

```ts
async generateV2ConnectURL(
  accept: string,
  body: GenerateV2ConnectURLRequest,
  language?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateV2ConnectURLRequest`](../../doc/models/generate-v2-connect-url-request.md) | Body, Required | Expected body to be sent with the request |
| `language` | `string \| undefined` | Query, Optional | The language parameter is used when generating a 2.0 Connect URL. Currently, the parameter supports English, Spanish (United States), and French (Canada). <br> <br> Add a language parameter with either `es` or `fr` (or `fr-CA`) to generate a translated Connect URL link. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const bodyReportCustomFields: ReportCustomFields[] = [];

const bodyreportCustomFields0: ReportCustomFields = {
  label: 'loanID',
  value: '12345',
  shown: true,
};

bodyReportCustomFields[0] = bodyreportCustomFields0;

const bodyreportCustomFields1: ReportCustomFields = {
  label: 'branchID',
  value: '55555',
  shown: false,
};

bodyReportCustomFields[1] = bodyreportCustomFields1;

const bodyOptionalConsumerInfo: OptionalConsumerInformation = {
  ssn: '123412134',
};

const body: GenerateV2ConnectURLRequest = {
  partnerId: '1445585709680',
  customerId: '1005061234',
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.experience = 'default';
body.fromDate = 1607450357;
body.reportCustomFields = bodyReportCustomFields;
body.optionalConsumerInfo = bodyOptionalConsumerInfo;
body.singleUseUrl = true;

const language = 'fr-CA';
try {
  const { result, ...httpResponse } = await connectController.generateV2ConnectURL(accept, body, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate V2 Connect URL - Joint Borrower

Generates a Connect 2.0 URL link to add within your own applications. Use the `experience` parameter to call Connect (per session) in the body of the request. Configure the `experience` parameter to change the brand color, logo, icon, which credit decisioning report to generate when the Connect App completes, and more.

**Note**: Contact your Sales Account Team to set up the `experience` parameter.

MVS prompts both the primary and joint borrower to enter each of their financial, payroll, and paystub information in the same Connect session.

You can prepopulate the consumer’s SSN to display on the Find employment records page at the beginning of the MVS payroll app. Pass the SSN value for the consumer in the body of the request call.

```ts
async generateV2ConnectURLJointBorrower(
  accept: string,
  body: GenerateV2ConnectURLRequestJointBorrower,
  language?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateV2ConnectURLRequestJointBorrower`](../../doc/models/generate-v2-connect-url-request-joint-borrower.md) | Body, Required | Expected body to be sent with the request |
| `language` | `string \| undefined` | Query, Optional | The language parameter is used when generating a 2.0 Connect URL. Currently, the parameter supports English, Spanish (United States), and French (Canada). <br> <br> Add a language parameter with either `es` or `fr` (or `fr-CA`) to generate a translated Connect URL link. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const bodyBorrowers: Borrowers[] = [];

const bodyborrowers0: Borrowers = {
  customerId: '1005061234',
  consumerId: '1973f901305e2ab3ba8840f411f6b057',
  type: 'primary',
};

bodyBorrowers[0] = bodyborrowers0;

const bodyborrowers1: Borrowers = {
  customerId: '1005061234',
  consumerId: '1973f901305e2ab3ba8840f411f6b057',
  type: 'jointBorrower',
};

bodyBorrowers[1] = bodyborrowers1;

const bodyOptionalConsumerInfo: OptionalConsumerInformation = {
  ssn: '123412134',
};

const body: GenerateV2ConnectURLRequestJointBorrower = {
  partnerId: '1445585709680',
  borrowers: bodyBorrowers,
  optionalConsumerInfo: bodyOptionalConsumerInfo,
};

const language = 'fr-CA';
try {
  const { result, ...httpResponse } = await connectController.generateV2ConnectURLJointBorrower(accept, body, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate V2 Fix Connect URL

Use the connect fix endpoint when the following conditions occur:

* The connection to the user’s financial institution is lost.
* The user’s credentials were updated (for any number of reasons).
* The user’s MFA challenge has expired.

```ts
async generateV2FixConnectURL(
  accept: string,
  body: GenerateConnectURLRequestFixV2,
  language?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequestFixV2`](../../doc/models/generate-connect-url-request-fix-v2.md) | Body, Required | Expected body to be sent with the request |
| `language` | `string \| undefined` | Query, Optional | The language parameter is used when generating a 2.0 Connect URL. Currently, the parameter supports English, Spanish (United States), and French (Canada). <br> <br> Add a language parameter with either `es` or `fr` (or `fr-CA`) to generate a translated Connect URL link. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequestFixV2 = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  institutionLoginId: 13556634,
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.experience = 'default';
body.singleUseUrl = true;

const language = 'fr-CA';
try {
  const { result, ...httpResponse } = await connectController.generateV2FixConnectURL(accept, body, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate V2 Lite Connect URL

Connect Lite is a variation of Connect Full, which has a limited set of features.
• Sign in, user’s credentials, and Multi-Factor Authentication (MFA).
• No user account management.

The Connect Web SDK isn’t a requirement when using Connect lite. However, if you want to use the SDK events, routes, and user events, then you need to integrate with the Connect Web SDK.

```ts
async generateV2LiteConnectURL(
  accept: string,
  body: GenerateConnectURLRequestLiteV2,
  language?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateConnectURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json, application/xml |
| `body` | [`GenerateConnectURLRequestLiteV2`](../../doc/models/generate-connect-url-request-lite-v2.md) | Body, Required | Expected body to be sent with the request |
| `language` | `string \| undefined` | Query, Optional | The language parameter is used when generating a 2.0 Connect URL. Currently, the parameter supports English, Spanish (United States), and French (Canada). <br> <br> Add a language parameter with either `es` or `fr` (or `fr-CA`) to generate a translated Connect URL link. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateConnectURLResponse`](../../doc/models/generate-connect-url-response.md)

## Example Usage

```ts
const accept = 'application/json';
const body: GenerateConnectURLRequestLiteV2 = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  institutionId: 101723,
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.experience = 'default';
body.singleUseUrl = true;

const language = 'fr-CA';
try {
  const { result, ...httpResponse } = await connectController.generateV2LiteConnectURL(accept, body, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send V2 Connect Email

Send a Connect email to the consumer.
Use the `experience` parameter to call Connect (per session) in the body of the request. When the consumer opens the email, they’ll click a button that opens the Connect application.

Configure the `experience` parameter to change the brand color, logo, icon, which credit decisioning report to generate when the Connect application completes, and more.

**Note**: Contact your Sales Account Team to set up the `experience` parameter.

**MVS Developers**: You can prepopulate the consumer’s SSN to display on the Find employment records page at the beginning of the MVS payroll app. Pass the SSN value for the consumer in the body of the request call.

```ts
async sendV2ConnectEmail(
  accept: string,
  body: GenerateV2ConnectEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateV2ConnectEmailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `body` | [`GenerateV2ConnectEmailRequest`](../../doc/models/generate-v2-connect-email-request.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateV2ConnectEmailResponse`](../../doc/models/generate-v2-connect-email-response.md)

## Example Usage

```ts
const accept = 'application/json';
const bodyEmailSignature: string[] = ['Cindy Mayfield', 'Senior Loan Officer', 'Direct 123-456-7890'];
const bodyEmail: ConnectV2EmailOptions = {
  to: 'fin.user@finicity.com',
};
bodyEmail.from = 'testLender@test.com';
bodyEmail.supportPhone = '800-555-5555';
bodyEmail.subject = 'Verify your income';
bodyEmail.firstName = 'Bob';
bodyEmail.institutionName = 'Acme Lending';
bodyEmail.institutionAddress = '222 Winipeg Drive SLC UT, 84109';
bodyEmail.signature = bodyEmailSignature;

const bodyReportCustomFields: ReportCustomFields[] = [];

const bodyreportCustomFields0: ReportCustomFields = {
  label: 'loanID',
  value: '12345',
  shown: true,
};

bodyReportCustomFields[0] = bodyreportCustomFields0;

const bodyreportCustomFields1: ReportCustomFields = {
  label: 'branchID',
  value: '55555',
  shown: false,
};

bodyReportCustomFields[1] = bodyreportCustomFields1;

const body: GenerateV2ConnectEmailRequest = {
  partnerId: '1445585709680',
  customerId: '1005061234',
  consumerId: '86238nvnw7269e224a4e3de12352d87d',
  email: bodyEmail,
  experience: 'default',
};
body.webhook = 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b';
body.webhookContentType = 'application/json';
body.fromDate = 12345678;
body.reportCustomFields = bodyReportCustomFields;
body.singleUseUrl = true;

try {
  const { result, ...httpResponse } = await connectController.sendV2ConnectEmail(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send V2 Connect Email - Joint Borrower

Send a Connect email to at least one of the joint borrower’s email addresses. When the consumer opens the email, MVS prompts both the primary and joint borrower to enter each of their financial, payroll, and paystub information in the same Connect session.

Use the `experience` parameter to call Connect (per session) in the body of the request. Configure the `experience` parameter to change the brand color, logo, icon, which credit decisioning report to generate when the Connect application completes, and more.

**Note**: Contact your Sales Account Team to set up the `experience` parameter.

You can prepopulate the consumer’s SSN to display on the Find employment records page at the beginning of the MVS payroll app. Pass the SSN value for the consumer in the body of the request call.

```ts
async sendV2ConnectEmailJointBorrower(
  accept: string,
  body: V2ConnectEmailRequestJointBorrower,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateV2ConnectEmailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | application/json |
| `body` | [`V2ConnectEmailRequestJointBorrower`](../../doc/models/v2-connect-email-request-joint-borrower.md) | Body, Required | Expected body to be sent with the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateV2ConnectEmailResponse`](../../doc/models/generate-v2-connect-email-response.md)

## Example Usage

```ts
const accept = 'application/json';
const bodyBorrowers: Borrowers[] = [];

const bodyborrowers0: Borrowers = {
  customerId: '1005061234',
  consumerId: '1973f901305e2ab3ba8840f411f6b057',
  type: 'primary',
};

bodyBorrowers[0] = bodyborrowers0;

const bodyborrowers1: Borrowers = {
  customerId: '1005061234',
  consumerId: '1973f901305e2ab3ba8840f411f6b057',
  type: 'jointBorrower',
};

bodyBorrowers[1] = bodyborrowers1;

const bodyEmailSignature: string[] = ['Cindy Mayfield', 'Senior Loan Officer', 'Direct 123-456-7890'];
const bodyEmail: ConnectV2EmailOptions = {
  to: 'fin.user@finicity.com',
};
bodyEmail.from = 'testLender@test.com';
bodyEmail.supportPhone = '800-555-5555';
bodyEmail.subject = 'Verify your income';
bodyEmail.firstName = 'Bob';
bodyEmail.institutionName = 'Acme Lending';
bodyEmail.institutionAddress = '222 Winipeg Drive SLC UT, 84109';
bodyEmail.signature = bodyEmailSignature;

const bodyOptionalConsumerInfo: OptionalConsumerInformation = {
  ssn: '123412134',
};

const body: V2ConnectEmailRequestJointBorrower = {
  partnerId: '1445585709680',
  borrowers: bodyBorrowers,
  email: bodyEmail,
  experience: 'default',
  optionalConsumerInfo: bodyOptionalConsumerInfo,
};

try {
  const { result, ...httpResponse } = await connectController.sendV2ConnectEmailJointBorrower(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

