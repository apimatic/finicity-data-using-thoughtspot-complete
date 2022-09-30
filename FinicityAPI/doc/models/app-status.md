
# App Status

The registration status fields for the application. This is version 2 of this object.

## Structure

`AppStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | - |
| `preAppId` | `bigint` | Required | An identifier to track the application registration request |
| `note` | `string \| undefined` | Optional | A note on registration. Typically used to indicate reasons for rejected apps. |
| `applicationId` | `string \| undefined` | Optional | The official applicationId to be used in customer creation and setting customer application Id services. This is populated after the app is in A status for approved. |
| `appName` | `string` | Required | The App Name submitted during registration |
| `submittedDate` | `bigint` | Required | A timestamp showing when the registration was submitted (see Handling Dates and Times) |
| `modifiedDate` | `bigint` | Required | A timestamp showing when the registration was last modified. Typically when it was approved or rejected. (see Handling Dates and Times) |
| `status` | `string` | Required | The status of the app registration request. A means approved. P means pending which is the status when initially submitted or when the app is modified and awaiting approval. R means rejected. If it is rejected there will be a note with the rejected reason. |
| `scopes` | `string \| undefined` | Optional | Indicates scopes of data accessible to the app |
| `institutionDetails` | [`AppFIStatus[] \| undefined`](../../doc/models/app-fi-status.md) | Optional | A list of the registration status for each FI for the application |

## Example (as JSON)

```json
{
  "partnerId": "1234567",
  "note": "Approved",
  "appName": "Awesome Budget App",
  "submittedDate": 1595303316,
  "preAppId": 7456,
  "modifiedDate": 1595303316,
  "scopes": "Account Info",
  "status": "A",
  "euaId": "123456789",
  "institutionDetails": [
    {
      "id": 102224,
      "decryptionKeyActivated": false,
      "createdDate": 1595526299,
      "lastModifiedDate": 1595526299,
      "status": false
    },
    {
      "id": 170881,
      "decryptionKeyActivated": false,
      "createdDate": 1595526300,
      "lastModifiedDate": 1595526300,
      "status": true
    }
  ]
}
```

