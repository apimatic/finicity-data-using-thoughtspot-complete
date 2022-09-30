
# Cash Flow Cash Flow Characteristics Summary

## Structure

`CashFlowCashFlowCharacteristicsSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowCharacteristicSummaries` | [`CashFlowMonthlyCashFlowCharacteristicSummaries[]`](../../doc/models/cash-flow-monthly-cash-flow-characteristic-summaries.md) | Required | List of attributes for each month |
| `averageMonthlyNet` | `number` | Required | Average monthly net amount |
| `averageMonthlyNetLessTransfers` | `number` | Required | Average monthly net less transfers |
| `twelveMonthTotalNet` | `number` | Required | Sum of all monthly (Total Credits - Total Debits) each month by the account |
| `twelveMonthTotalNetLessTransfers` | `number` | Required | Sum of all monthly (Total Credits - Total Debits) without transfers by the account |
| `sixMonthAverageTotalCreditsLessTotalDebits` | `number` | Required | 6 Month Average (Total Credits - Total Debits) across all accounts |
| `sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers` | `number` | Required | 6 Month Average (Total Credits - Total Debits) - (Without Transfers) across all accounts |
| `twoMonthAverageTotalCreditsLessTotalDebits` | `number` | Required | 2 Month Average (Total Credits - Total Debits) across all accounts |
| `twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers` | `number` | Required | 2 Month Average (Total Credits - Total Debits) - (Without Transfers) across all accounts |

## Example (as JSON)

```json
{
  "monthlyCashFlowCharacteristicSummaries": [
    {
      "month": 1551423600,
      "totalCreditsLessTotalDebits": 2936.86,
      "totalCreditsLessTotalDebitsLessTransfers": 2936.86,
      "averageTransactionAmount": 195.79
    }
  ],
  "averageMonthlyNet": 1250.0,
  "averageMonthlyNetLessTransfers": 1000.0,
  "twelveMonthTotalNet": 12500.0,
  "twelveMonthTotalNetLessTransfers": 12400.0,
  "sixMonthAverageTotalCreditsLessTotalDebits": 55555.0,
  "sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0,
  "twoMonthAverageTotalCreditsLessTotalDebits": 55555.0,
  "twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0
}
```

