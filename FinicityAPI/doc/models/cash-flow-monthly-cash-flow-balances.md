
# Cash Flow Monthly Cash Flow Balances

## Structure

`CashFlowMonthlyCashFlowBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | One instance for each complete calendar month in the report |
| `minDailyBalance` | `number` | Required | Min Daily Balance for each month |
| `maxDailyBalance` | `number` | Required | Max Daily Balance for each month |
| `averageDailyBalance` | `number` | Required | Average Daily Balance for each month |
| `standardDeviationOfDailyBalance` | `string` | Required | Standard Deviation of Daily Balance for each month |
| `numberOfDaysNegativeBalance` | `string` | Required | Number of Days Negative Balance for each month |
| `numberOfDaysPositiveBalance` | `string` | Required | Number of Days positive balance for each month |

## Example (as JSON)

```json
{
  "month": 1512111600,
  "minDailyBalance": 3479.39,
  "maxDailyBalance": 3479.39,
  "averageDailyBalance": 3479.39,
  "standardDeviationOfDailyBalance": "20",
  "numberOfDaysNegativeBalance": "6",
  "numberOfDaysPositiveBalance": "0"
}
```

