
# Get Institutions Response

A list of Finicity financial institutions from the standard get institutions response

## Structure

`GetInstitutionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | Total number of results found |
| `displaying` | `number` | Required | Display the results count |
| `moreAvailable` | `boolean` | Required | **True**: There are more institutions, matching the search parameters, that you can display. |
| `createdDate` | `bigint` | Required | Date the request was created |
| `institutions` | [`Institution[]`](../../doc/models/institution.md) | Required | An array of institutions<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1000` |

## Example (as JSON)

```json
{
  "found": 4041,
  "displaying": 1,
  "moreAvailable": true,
  "createdDate": 1586288664,
  "institutions": {
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
}
```

