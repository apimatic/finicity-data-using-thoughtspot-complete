
# Generate Statement Report Response

## Structure

`GenerateStatementReportResponse`

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
| `constraints` | [`GenerateStatementReportConstraints`](../../doc/models/generate-statement-report-constraints.md) | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Type of the report |
| `status` | `string` | Required | inProgress, success, or failure |

## Example (as JSON)

```json
{
  "id": "38dknche83oh-statement",
  "portfolioId": "sy7aa68w2ugx-1-port",
  "customerType": "active",
  "customerId": 1010560999,
  "requestId": "ny7x32stfq",
  "requesterName": "Demo",
  "createdDate": 1596226182,
  "title": "Finicity Statement Report",
  "consumerId": "555595ec74c8ec57adf44dadddb6a35",
  "consumerSsn": "1234",
  "constraints": {
    "statementReportData": {
      "accountId": 1000076901,
      "index": 1
    },
    "reportCustomFields": [
      {
        "label": "loanID",
        "value": "123456",
        "shown": true
      }
    ]
  },
  "type": "statement",
  "status": "inProgress"
}
```

