
# Generate Prequalification Report CRA Response

Asset Ready Report (CRA)

## Structure

`GeneratePrequalificationReportCRAResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity report ID |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer. |
| `customerType` | `string` | Required | Type of the customer |
| `customerId` | `bigint` | Required | Finicity's customer ID |
| `requestId` | `string` | Required | Finicity indicator to track all activity associated with this report. |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `title` | `string` | Required | Finicity's title of the report |
| `consumerId` | `string` | Required | Finicity ID of the consumer |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `constraints` | [`ReportConstraints \| undefined`](../../doc/models/report-constraints.md) | Optional | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Type of the report |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `source` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "88w4fbssrbja-prequalvoa",
  "portfolioId": "0whcism47a34-5-port",
  "customerType": "active",
  "customerId": 1000006677,
  "requestId": "sfb7xacr9w",
  "requesterName": "Decisioning API",
  "createdDate": 1588350269,
  "title": "Finicity Asset Ready Report (CRA)",
  "consumerId": "cb619e10185177cd92271c4da2df3fa3",
  "consumerSsn": "6789",
  "constraints": {
    "accountIds": [
      "1000535275",
      "1000535276"
    ],
    "fromDate": 1577986990,
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
  "type": "preQualVoa",
  "status": "inProgress"
}
```

