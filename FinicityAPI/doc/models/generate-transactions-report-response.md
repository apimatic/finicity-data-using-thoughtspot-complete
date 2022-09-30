
# Generate Transactions Report Response

## Structure

`GenerateTransactionsReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The reportId, to be passed to Get Report. (UUID with max length 12 characters) |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer. |
| `customerType` | `string` | Required | active or testing |
| `customerId` | `bigint` | Required | The customer ID. |
| `requestID` | `string` | Required | Finicity’s request ID |
| `requesterName` | `string` | Required | Finicity’s name for the requester |
| `createdDate` | `bigint` | Required | The date the report was generated. |
| `title` | `string` | Required | Finicity Transactions Report |
| `consumerId` | `string` | Required | Finicity report consumer ID, from Create Report Consumer. (UUID with max length 32 characters) |
| `consumerSsn` | `string` | Required | The last four of the consumer’s social security |
| `constraints` | [`TransactionReportConstraints`](../../doc/models/transaction-report-constraints.md) | Required | Specifies use of accountIds, reportCustomFields, includePending, fromDate, and toDate when creating the report. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "dnuru2ua2trs-transactions",
  "portfolioId": "hupvwpdzr9dq-16-port",
  "customerType": "testing",
  "customerId": 1000018865,
  "requestID": "ky2nhsufhv",
  "requesterName": "Decisioning API Tests",
  "createdDate": 1594678007,
  "title": "Finicity Transactions Report",
  "consumerId": "a925b07c9e028c680ad9c1d18d2e7199",
  "consumerSsn": "6789",
  "constraints": {
    "accountIds": [
      "1000075473"
    ],
    "fromDate": 1578952809,
    "toDate": 1594677609,
    "includePending": true,
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
  "type": "transactions",
  "status": "inProgress"
}
```

