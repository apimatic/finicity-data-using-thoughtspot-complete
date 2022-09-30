
# Generate Prequalification Report Non CRA Response

## Structure

`GeneratePrequalificationReportNonCRAResponse`

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
| `constraints` | [`ReportConstraints \| undefined`](../../doc/models/report-constraints.md) | Optional | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Type of the report |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `source` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "rceiqx616awa-assetsummary",
  "portfolioId": "0whcism47ttt-5-port",
  "customerType": "active",
  "customerId": 1000006677,
  "requestId": "sfb7xp4iui",
  "requesterName": "Decisioning API",
  "createdDate": 1588350269,
  "title": "Finicity Asset Ready Report (non-CRA)",
  "type": "assetSummary",
  "status": "inProgress"
}
```

