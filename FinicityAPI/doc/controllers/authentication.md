# Authentication

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Modify Partner Secret](../../doc/controllers/authentication.md#modify-partner-secret)
* [Partner Authentication](../../doc/controllers/authentication.md#partner-authentication)


# Modify Partner Secret

Change the partner secret that is used to authenticate this partner. The secret does not expire, but can be changed by calling Modify Partner Secret. A valid partner secret may contain upper- and lowercase characters, numbers, and the characters !, @, #, $, %, &, *, _, -, +. It must include at least one number and at least one letter, and its length should be between 12 and 255 characters.

:information_source: **Note** This endpoint does not require authentication.

```ts
async modifyPartnerSecret(
  contentType: string,
  body: ModifyPartnerCredentials,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | application/json |
| `body` | [`ModifyPartnerCredentials`](../../doc/models/modify-partner-credentials.md) | Body, Required | Partner ID and Partner Secret From Developer Portal Along With A Value For The New Partner Secret |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: ModifyPartnerCredentials = {
  partnerId: 'PARTNER_ID',
  partnerSecret: 'PARTNER_SECRET',
  newPartnerSecret: 'NEW_PARTNER_SECRET',
};

try {
  const { result, ...httpResponse } = await authenticationController.modifyPartnerSecret(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Partner Authentication

Partner ID and Partner Secret: Sends to the Partner Authentication service to obtain a token for accessing the APIs.

•The token is valid for two hours and is required on all calls to the Finicity APIs

•As a best practice, use a single token for all calls. Assign a timestamp for each token, and then check the current timestamp before making any calls. If the token is greater than 90 minutes, generate a new one.

Finicity-App-Key: Required on all calls to the Finicity APIs to identify your application.

After five failed attempts to authenticate, your account is locked. Contact support@finicity.com to get help resetting your account.

:information_source: **Note** This endpoint does not require authentication.

```ts
async partnerAuthentication(
  contentType: string,
  accept: string,
  body: PartnerCredentials,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuthenticationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | application/json |
| `accept` | `string` | Header, Required | application/json |
| `body` | [`PartnerCredentials`](../../doc/models/partner-credentials.md) | Body, Required | Partner ID and Partner Secret From Developer Portal |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthenticationResponse`](../../doc/models/authentication-response.md)

## Example Usage

```ts
const contentType = 'application/json';
const accept = 'application/json';
const body: PartnerCredentials = {
  partnerId: 'PARTNER_ID',
  partnerSecret: 'PARTNER_SECRET',
};

try {
  const { result, ...httpResponse } = await authenticationController.partnerAuthentication(contentType, accept, body);
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
  "token": "ACCESS_TOKEN"
}
```

