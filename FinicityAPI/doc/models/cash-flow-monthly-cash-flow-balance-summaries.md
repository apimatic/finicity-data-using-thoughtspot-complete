
# Cash Flow Monthly Cash Flow Balance Summaries

## Structure

`CashFlowMonthlyCashFlowBalanceSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | One instance for each complete calendar month in the report |
| `minDailyBalance` | `number` | Required | Min Daily Balance for each month for all accounts |
| `maxDailyBalance` | `number` | Required | Max Daily Balance for each month for all accounts |
| `averageDailyBalance` | `number` | Required | Average Daily Balance for each month for all accounts |
| `standardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance for each month for all accounts |
| `numberOfDaysNegativeBalance` | `string` | Required | Number of Days Negative Balance for each month for all accounts |
| `numberOfDaysPositiveBalance` | `string` | Required | Number of Days Positive Balance for each month for all accounts |

## Example (as JSON)

```json
{
  "month": 1512111600,
  "minDailyBalance": 3479.39,
  "maxDailyBalance": 3479.39,
  "averageDailyBalance": 3479.39,
  "standardDeviationOfDailyBalance": "20.45454545",
  "numberOfDaysNegativeBalance": "6",
  "numberOfDaysPositiveBalance": "0"
}
```

