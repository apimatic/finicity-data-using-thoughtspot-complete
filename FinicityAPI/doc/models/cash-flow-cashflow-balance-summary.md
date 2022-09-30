
# Cash Flow Cashflow Balance Summary

## Structure

`CashFlowCashflowBalanceSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowBalanceSummaries` | [`CashFlowMonthlyCashFlowBalanceSummaries[]`](../../doc/models/cash-flow-monthly-cash-flow-balance-summaries.md) | Required | List of attributes for each month |
| `minDailyBalance` | `number` | Required | Min Daily Balance across entire transaction history  for all accounts |
| `maxDailyBalance` | `number` | Required | Max Daily Balance across entire transaction history for all accounts |
| `twelveMonthAverageDailyBalance` | `number` | Required | Average Daily Balance across twelve months for all accounts |
| `sixMonthAverageDailyBalance` | `number` | Required | Average Daily Balance across six months for all accounts |
| `twoMonthAverageDailyBalance` | `number` | Required | Average Daily Balance across two months for all accounts |
| `twelveMonthStandardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance across twelve months for all accounts |
| `sixMonthStandardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance across six months for all accounts |
| `twoMonthStandardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance across two months for all accounts |
| `numberOfDaysNegativeBalance` | `string` | Required | Number of Days Negative Balance over entire transaction history for all accounts |
| `numberOfDaysPositiveBalance` | `string` | Required | Number of Days Positive Balance over entire transaction history for all accounts |

## Example (as JSON)

```json
{
  "monthlyCashFlowBalanceSummaries": [
    {
      "month": 1551423600,
      "minDailyBalance": -65894.54,
      "maxDailyBalance": -62196.98,
      "averageDailyBalance": -64594.87,
      "standardDeviationOfDailyBalance": "1099",
      "numberOfDaysNegativeBalance": "28",
      "numberOfDaysPositiveBalance": "0"
    }
  ],
  "minDailyBalance": 3479.39,
  "maxDailyBalance": 3479.39,
  "twelveMonthAverageDailyBalance": 3479.39,
  "sixMonthAverageDailyBalance": 3479.39,
  "twoMonthAverageDailyBalance": 3479.39,
  "twelveMonthStandardDeviationOfDailyBalance": "20",
  "sixMonthStandardDeviationOfDailyBalance": "20",
  "twoMonthStandardDeviationOfDailyBalance": "20",
  "numberOfDaysNegativeBalance": "6",
  "numberOfDaysPositiveBalance": "11"
}
```

