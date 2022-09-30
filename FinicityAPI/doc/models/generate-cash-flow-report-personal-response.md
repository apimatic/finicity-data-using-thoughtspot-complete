
# Generate Cash Flow Report Personal Response

## Structure

`GenerateCashFlowReportPersonalResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `title` | `string` | Required | Title of the report |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `constraints` | [`RequestConstraints`](../../doc/models/request-constraints.md) | Required | - |
| `type` | `string` | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |

## Example (as JSON)

```json
{
  "id": "383z51zurqwo-cfrp",
  "customerType": "active",
  "customerId": 1275320,
  "requestId": "7a7qyps2iy",
  "requesterName": "Decisioning API",
  "createdDate": 1579819592,
  "title": "Finicity Cash Flow Report - Personal",
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "1234",
  "constraints": {
    "accountIds": "1000535275",
    "reportCustomFields": [
      {
        "label": "loanID",
        "value": "12345",
        "shown": true
      },
      {
        "label": "trackingID",
        "value": "5555",
        "shown": true
      },
      {
        "label": "loanType",
        "value": "car",
        "shown": false
      },
      {
        "label": "vendorID",
        "value": "1613aa23",
        "shown": true
      },
      {
        "label": "vendorName",
        "value": "PSC Finance",
        "shown": false
      }
    ]
  },
  "type": "cfrp",
  "status": "inProgress"
}
```

