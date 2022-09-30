
# App Statuses

The response for the Get App Registration Status endpoint which returns an array of App Status objects to be able to determine their registration status. This is version 2 of this response.

## Structure

`AppStatuses`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalRecords` | `bigint` | Required | Total number of applications in query |
| `totalPages` | `bigint` | Required | Total number of pages in application query for size of results per page |
| `pageNumber` | `bigint` | Required | The page number returned as per the application query |
| `numberOfRecordsPerPage` | `bigint` | Required | The number of records per page as per the application query |
| `applications` | [`AppStatus[]`](../../doc/models/app-status.md) | Required | List of applications with their status information |

## Example (as JSON)

```json
{
  "totalRecords": 50,
  "totalPages": 5,
  "pageNumber": 2,
  "numberOfRecordsPerPage": 10,
  "applications": [
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
      "applicationId": "123456789",
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

