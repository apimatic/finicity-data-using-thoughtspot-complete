
# Cash Flow Monthly Cash Flow Debit Summaries

## Structure

`CashFlowMonthlyCashFlowDebitSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | One instance for each complete calendar month in the report |
| `numberOfDebits` | `string` | Required | Number of Debits by month across all accounts |
| `totalDebitsAmount` | `number` | Required | Total Amount of Debits by month across all accounts |
| `largestDebit` | `number` | Required | Largest Debit by month |
| `numberOfDebitsLessTransfers` | `string` | Required | Number of Debits by month (less transfers) |
| `totalDebitsAmountLessTransfers` | `number` | Required | Total amount of debits by month (less transfers) |
| `averageDebitAmount` | `number` | Required | The average debit amount |

## Example (as JSON)

```json
{
  "month": 1512111600,
  "numberOfDebits": "1500",
  "totalDebitsAmount": -12345.46,
  "largestDebit": -20000.0,
  "numberOfDebitsLessTransfers": "5",
  "totalDebitsAmountLessTransfers": -2000.0,
  "averageDebitAmount": 500.0
}
```

