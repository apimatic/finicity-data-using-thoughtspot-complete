
# App Statuses V1

The response for the Get App Registration Status endpoint which returns an array of App Status objects to be able to determine their registration status

## Structure

`AppStatusesV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`AppStatusV1[]`](../../doc/models/app-status-v1.md) | Required | List of App Status's |

## Example (as JSON)

```json
{
  "status": [
    {
      "partnerId": "1234567",
      "appName": "Cool Budget App",
      "submittedDate": 1595303316,
      "preAppId": 4567,
      "modifiedDate": 1595303316,
      "scopes": "Account Info",
      "status": "P"
    },
    {
      "partnerId": "1234567",
      "note": "Approved",
      "appName": "Awesome Budget App",
      "submittedDate": 1595303316,
      "preAppId": 1234,
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
  ]
}
```

