
# Institution

A financial institution's Finicity registered details

## Structure

`Institution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution’s ID |
| `name` | `string \| undefined` | Optional | The name of the institution |
| `transAgg` | `boolean` | Required | **true**: The institution is certified for the Transaction Aggregation product. <br> <br> **false**: The institution is decertified for the Transaction Aggregation product |
| `ach` | `boolean` | Required | **true**: The institution is certified for the ACH product. <br> <br> **false**: The institution is decertified for the ACH product. |
| `stateAgg` | `boolean` | Required | **true**: The institution is certified for the Statement Aggregation product. <br> <br> **false**: The institution is decertified for the Statement Aggregation product |
| `voi` | `boolean` | Required | **true**: The institution is certified for the VOI product. <br> <br> **false**: The institution is decertified for the VOI product. |
| `voa` | `boolean` | Required | **true**: The institution is certified for the VOA product. <br> <br> **false**: The institution is decertified for the VOA product. |
| `aha` | `boolean` | Required | **true**: The institution is certified for the Account History Aggregation product. <br> <br> **false**: The institution is decertified for the Account History Aggregation product |
| `availBalance` | `boolean` | Required | **true**: The institution is certified for the Account Balance Check (ABC) product. <br> <br> **false**: The institution is decertified for the Account Balance Check product. |
| `accountOwner` | `boolean` | Required | **true**: The institution is certified for the Account Owner product. <br> <br> **false**: The institution is decertified for the Account Owner product. |
| `accountTypeDescription` | `string \| undefined` | Optional | **Values**: Banking, Investments, Credit Cards/Accounts, Workplace Retirement, Mortgages and Loans, Insurance |
| `phone` | `string \| undefined` | Optional | The institution’s primary phone number |
| `urlHomeApp` | `string \| undefined` | Optional | The URL of the institution’s primary home page |
| `urlLogonApp` | `string \| undefined` | Optional | The URL of the institution’s login page |
| `oauthEnabled` | `boolean` | Required | **true**: The institution is an OAuth connection. |
| `urlForgotPassword` | `string \| undefined` | Optional | Institution's forgot password page |
| `urlOnlineRegistration` | `string \| undefined` | Optional | Institution's signup page |
| `mClass` | `string \| undefined` | Optional | Institution's class |
| `specialText` | `string \| undefined` | Optional | Special instructions given to customer for login |
| `specialInstructions` | `string[] \| undefined` | Optional | Instructions given to the customer before they are sent to the institution website to login for OAuth institutions. <br> <br> **Note**: This helps the customer to provide the proper permission for data needed for the application. |
| `address` | [`InstitutionAddress \| undefined`](../../doc/models/institution-address.md) | Optional | The address for the financial institution |
| `currency` | `string` | Required | Institution's currency |
| `email` | `string \| undefined` | Optional | The institution’s primary contact email |
| `status` | `string` | Required | Institution's status: online, offline, maintenance, testing |
| `newInstitutionId` | `number \| undefined` | Optional | The new id for the financial institution’s ID you are replacing. <br> <br> **Note**: This is the same as the `oauthInstitutionId` field, which will eventually be replaced by this field. |
| `branding` | [`GetInstitutionsInstitutionBranding \| undefined`](../../doc/models/get-institutions-institution-branding.md) | Optional | The branding associated with the institution |
| `oauthInstitutionId` | `number \| undefined` | Optional | The new ID for the OAuth institution’s ID you are replacing. |

## Example (as JSON)

```json
{
  "name": "FinBank",
  "id": 101732,
  "transAgg": true,
  "ach": true,
  "stateAgg": false,
  "voi": true,
  "voa": true,
  "aha": false,
  "availBalance": false,
  "accountOwner": true,
  "accountTypeDescription": "TestFI",
  "phone": "",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "urlLogonApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "oauthEnabled": true,
  "urlForgotPassword": "https://developer.finicity.com/admin/account/password/new",
  "urlOnlineRegistration": "https://www.finicity.com/signup/",
  "class": "testfi",
  "specialText": "Please enter your FinBank Username and Password required for login.",
  "specialInstructions": [
    "Account details",
    "Balances and transactions",
    "Personal and account ownership info"
  ],
  "address": {
    "city": "Murray",
    "state": "Utah",
    "country": "USA",
    "postalCode": "83020",
    "addressLine1": "5555 Northwest Way",
    "addressLine2": ""
  },
  "currency": "USD",
  "email": "finbank.ds5@finicity.com",
  "status": "online",
  "newInstitutionId": 12345,
  "branding": {
    "logo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/logo.svg",
    "alternateLogo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/alternateLogo.svg",
    "icon": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/icon.svg",
    "primaryColor": "#1B3E4A",
    "tile": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/tile.svg"
  },
  "oauthInstitutionId": 12345
}
```

