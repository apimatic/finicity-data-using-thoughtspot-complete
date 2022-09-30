
# Cash Flow Cashflow Characteristic

## Structure

`CashFlowCashflowCharacteristic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowCharacteristics` | [`CashFlowMonthlyCashFlowCharacteristics[]`](../../doc/models/cash-flow-monthly-cash-flow-characteristics.md) | Required | List of attributes for each month |
| `averageMonthlyNet` | `number` | Required | Average (Total Credits - Total Debits) for the account |
| `averageMonthlyNetLessTransfers` | `number` | Required | Average (Total Credits - Total Debits) without transfers for the account |
| `twelveMonthTotalNet` | `number` | Required | Sum of all monthly (Total Credits - Total Debits) each month for the account |
| `twelveMonthTotalNetLessTransfers` | `number` | Required | Sum of all monthly (Total Credits - Total Debits) without transfers for the account |
| `sixMonthAverageTotalCreditsLessTotalDebits` | `number` | Required | 6 Month Average (Total Credits - Total Debits) |
| `sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers` | `number` | Required | 6 Month Average (Total Credits - Total Debits) - (Without Transfers) |
| `twoMonthAverageTotalCreditsLessTotalDebits` | `number` | Required | 2 Month Average (Total Credits - Total Debits) |
| `twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers` | `number` | Required | 2 Month Average (Total Credits - Total Debits) - (Without Transfers) |

## Example (as JSON)

```json
{
  "monthlyCashFlowCharacteristics": [
    {
      "month": 1551423600,
      "totalCreditsLessTotalDebits": 2936.86,
      "totalCreditsLessTotalDebitsLessTransfers": 2936.86,
      "averageTransactionAmount": 195.79
    }
  ],
  "averageMonthlyNet": 2350.0,
  "averageMonthlyNetLessTransfers": 1000.0,
  "twelveMonthTotalNet": 12500.0,
  "twelveMonthTotalNetLessTransfers": 12400.0,
  "sixMonthAverageTotalCreditsLessTotalDebits": 55555.0,
  "sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0,
  "twoMonthAverageTotalCreditsLessTotalDebits": 55555.0,
  "twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0
}
```

