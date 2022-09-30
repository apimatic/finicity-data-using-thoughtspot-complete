
# VOE Transactions Report Account

## Structure

`VOETransactionsReportAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The generated FInicity ID of the account |
| `number` | `string` | Required | The account number from the institution (all digits except the last four are obfuscated) |
| `ownerName` | `string` | Required | The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `name` | `string` | Required | The account name from the institution |
| `type` | `string` | Required | One of the values from Account Types |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) |
| `incomeStreams` | [`VOETransactionsReportIncomeStreamRecord[]`](../../doc/models/voe-transactions-report-income-stream-record.md) | Required | A list of income stream records |

## Example (as JSON)

```json
{
  "id": 1000023996,
  "number": "1111",
  "ownerName": "JOHN DOE",
  "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
  "name": "Checking",
  "type": "checking",
  "aggregationStatusCode": 0,
  "incomeStreams": {
    "id": "dens28i3vsch-voetransactions",
    "name": "none",
    "status": "ACTIVE",
    "estimateInclusion": "MODERATE",
    "confidence": 70,
    "cadence": {
      "startDate": 1577986990,
      "stopDate": 1587986990,
      "days": 14
    },
    "daysSinceLastTransaction": 15,
    "nextExpectedTransactionDate": 1572625469,
    "incomeStreamMonths": 18,
    "transactions": {
      "id": 100000527471,
      "postedDate": 1582286400,
      "description": "FINICITY INC PAYROLL",
      "normalizedPayee": "Finicity",
      "institutionTransactionId": "100000000",
      "category": "Paycheck"
    }
  }
}
```

