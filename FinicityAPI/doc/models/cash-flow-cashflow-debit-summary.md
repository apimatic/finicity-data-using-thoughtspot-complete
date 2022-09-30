
# Cash Flow Cashflow Debit Summary

## Structure

`CashFlowCashflowDebitSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowDebitSummaries` | [`CashFlowMonthlyCashFlowDebitSummaries[]`](../../doc/models/cash-flow-monthly-cash-flow-debit-summaries.md) | Required | List of attributes for each month |
| `twelveMonthDebitTotal` | `number` | Required | Sum of all monthly debit transactions for each month by account |
| `twelveMonthDebitTotalLessTransfers` | `number` | Required | Sum of all monthly debit transactions without transfers for the account |
| `sixMonthDebitTotal` | `number` | Required | Six month sum of all debit transactions by account |
| `sixMonthDebitTotalLessTransfers` | `number` | Required | Six month sum of all debit transactions without transfers for the account |
| `twoMonthDebitTotal` | `number` | Required | Two month sum of all debit transactions by account |
| `twoMonthDebitTotalLessTransfers` | `number` | Required | Two month sum of all debit transactions without transfers for the account |

## Example (as JSON)

```json
{
  "monthlyCashFlowDebitSummaries": [
    {
      "month": 1551423600,
      "numberOfDebits": "12",
      "totalDebitsAmount": -2063.43,
      "largestDebit": -953.73,
      "numberOfDebitsLessTransfers": "12",
      "totalDebitsAmountLessTransfers": -2063.43,
      "averageDebitAmount": -171.95
    }
  ],
  "twelveMonthDebitTotal": -1200.0,
  "twelveMonthDebitTotalLessTransfers": -1000.0,
  "sixMonthDebitTotal": -750.0,
  "sixMonthDebitTotalLessTransfers": -500.0,
  "twoMonthDebitTotal": -150.0,
  "twoMonthDebitTotalLessTransfers": -100.0
}
```

