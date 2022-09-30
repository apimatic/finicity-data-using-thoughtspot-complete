
# Cash Flow Monthly Cash Flow Characteristic Summaries

## Structure

`CashFlowMonthlyCashFlowCharacteristicSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | One instance for each complete calendar month in the report |
| `totalCreditsLessTotalDebits` | `number` | Required | Total Credits - Total Debits by month across all accounts |
| `totalCreditsLessTotalDebitsLessTransfers` | `number` | Required | Total Credits - Total Debits by month (Without Transfers) across all accounts |
| `averageTransactionAmount` | `number` | Required | Average transaction amount across all accounts |

## Example (as JSON)

```json
{
  "month": 1512111600,
  "totalCreditsLessTotalDebits": 15000.0,
  "totalCreditsLessTotalDebitsLessTransfers": 11000.0,
  "averageTransactionAmount": 10.0
}
```

