
# Generate Pay Statement Report Response

## Structure

`GeneratePayStatementReportResponse`

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
| `constraints` | [`PayStatementConstraints`](../../doc/models/pay-statement-constraints.md) | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Type of the report |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `source` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "y0ejausptjg1-paystatement",
  "portfolioId": "spd8aehuw63i-10-port",
  "customerType": "active",
  "customerId": 1003413624,
  "requestId": "8wy5htqg8u",
  "requesterName": "Decisioning API",
  "createdDate": 1588350269,
  "title": "Finicity Pay Statement Extraction Report",
  "consumerId": "4089f408963dd6b90b28a935e9903c0e",
  "consumerSsn": "6789",
  "constraints": {
    "paystatementReport": {
      "assetIds": [
        "6f8fb0a0-e882-4f57-b672-cf53f1397581"
      ],
      "extractEarnings": true,
      "extractDeductions": false,
      "extractDirectDeposit": true
    },
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
  "type": "paystatement",
  "status": "inProgress"
}
```

