
# Generate Report Response

## Structure

`GenerateReportResponse`

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
| `consumerId` | `string \| undefined` | Optional | Finicity ID of the consumer |
| `consumerSsn` | `string \| undefined` | Optional | Last 4 digits of the report consumer’s Social Security number |
| `constraints` | [`ReportConstraints \| undefined`](../../doc/models/report-constraints.md) | Optional | - |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Optional | - |
| `status` | `string \| undefined` | Optional | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `source` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "ID of the report",
  "portfolioId": "ggnrf7kw8k8j-5-port",
  "customerType": "active",
  "customerId": 1000279435,
  "requestId": "by1zprbpbt",
  "requesterName": "Finicity generate reports",
  "createdDate": 1588186104,
  "title": "Finicity's report title"
}
```

