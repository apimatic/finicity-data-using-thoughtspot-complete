
# Statement Report Record

## Structure

`StatementReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity report ID |
| `gseEnabled` | `boolean` | Required | Finicity Internal Use Only |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `title` | `string` | Required | Title of the report |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `constraints` | [`GenerateStatementReportConstraints`](../../doc/models/generate-statement-report-constraints.md) | Required | - |
| `type` | `string` | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `assetId` | `string` | Required | The asset ID of the statement that was retrieved. |

## Example (as JSON)

```json
{
  "id": "38dknche83oh-statement",
  "gseEnabled": true,
  "customerType": "active",
  "customerId": 1000262464,
  "requestId": "nd4b55a4bg",
  "title": "Finicity Statement Report",
  "consumerId": "d15ff15ed0c8627eae61c452928d7fc3",
  "consumerSsn": "1111",
  "requesterName": "Demo",
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
  "status": "success",
  "createdDate": 1586189339,
  "assetId": "aaaa3be2-6f1a-4aac-a360-4ad240aa652d"
}
```

