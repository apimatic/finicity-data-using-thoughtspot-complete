
# Generate VOA Report Response

## Structure

`GenerateVOAReportResponse`

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
| `totNumberInsufficientFundsFeeDebitTxAccount` | `bigint \| null` | Required | The count for the total number of insufficient funds transactions, based on the `fromDate` of the report. |
| `totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount` | `bigint \| null` | Required | The count for the total number of insufficient funds transactions for the last two months, based on the `fromDate` of the report. |
| `totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount` | `bigint \| null` | Required | The number of days since the most recent insufficient funds transaction, based on the `fromDate` of the report. |

## Example (as JSON)

```json
{
  "id": "u4hstnnak45g",
  "portfolioId": "dyr6qvqd2yhb-1-port",
  "customerType": "active",
  "customerId": 1000006677,
  "requestId": "sfb7xp439w",
  "requesterName": "Decisioning API",
  "createdDate": 1588350269,
  "title": "Finicity Verification of Assets",
  "consumerId": "ac39e237c7619a4ecf014b8d399c0696",
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
  "type": "voa",
  "status": "inProgress",
  "totNumberInsufficientFundsFeeDebitTxAccount": 0,
  "totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount": 0,
  "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 0
}
```

