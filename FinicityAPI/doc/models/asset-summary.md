
# Asset Summary

## Structure

`AssetSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | checking / savings / moneyMarket / cd / investment* |
| `currentBalance` | `number` | Required | Current balance of the account |
| `twoMonthAverage` | `number` | Required | Two month average daily balance of the account |
| `sixMonthAverage` | `number` | Required | Six month average daily balance of the account |
| `beginningBalance` | `number` | Required | Beginning balance of account per the time period in the report |

## Example (as JSON)

```json
{
  "type": "checking",
  "currentBalance": 1000,
  "twoMonthAverage": -1865.96,
  "sixMonthAverage": -7616.01,
  "beginningBalance": -17795.6
}
```

