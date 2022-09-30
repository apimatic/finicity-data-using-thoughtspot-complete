
# Cash Flow Cashflow Balance

## Structure

`CashFlowCashflowBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowBalances` | [`CashFlowMonthlyCashFlowBalances[]`](../../doc/models/cash-flow-monthly-cash-flow-balances.md) | Required | List of attributes for each month |
| `minDailyBalance` | `number` | Required | Min daily balance across entire transaction history |
| `maxDailyBalance` | `number` | Required | Max Daily Balance across entire transaction history |
| `twelveMonthAverageDailyBalance` | `number` | Required | Average Daily Balance across twelve months for the account |
| `sixMonthAverageDailyBalance` | `number` | Required | Average Daily Balance across six months for the account |
| `twoMonthAverageDailyBalance` | `number` | Required | Average Daily Balance across two months for the account |
| `twelveMonthStandardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance across twelve months for the account |
| `sixMonthStandardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance across six months for the account |
| `twoMonthStandardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance across two months for the account |
| `numberDaysNegativeBalance` | `string` | Required | Number of Days Negative Balance over entire transaction history |
| `numberOfDaysPositiveBalance` | `string` | Required | Number of Days positive balance over entire transaction history |

## Example (as JSON)

```json
{
  "monthlyCashFlowBalances": [
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
  "numberDaysNegativeBalance": "6",
  "numberOfDaysPositiveBalance": "0"
}
```

