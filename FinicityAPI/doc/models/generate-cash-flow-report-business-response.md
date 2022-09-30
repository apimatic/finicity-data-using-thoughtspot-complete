
# Generate Cash Flow Report Business Response

## Structure

`GenerateCashFlowReportBusinessResponse`

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
| `constraints` | [`RequestConstraints`](../../doc/models/request-constraints.md) | Required | - |
| `type` | `string` | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |

## Example (as JSON)

```json
{
  "id": "383z55zudewm-cfrb",
  "customerType": "active",
  "customerId": 1275320,
  "requestId": "7a7qyps2iy",
  "requesterName": "Decisioning API",
  "createdDate": 1579819592,
  "title": "Finicity Cash Flow Report - Business",
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
  "type": "cfrb",
  "status": "inProgress"
}
```

