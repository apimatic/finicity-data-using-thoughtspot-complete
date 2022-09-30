
# Asset Summary for Prequalification Reports

## Structure

`AssetSummaryForPrequalificationReports`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentBalance` | `number` | Required | Current balance of the account |
| `availableBalance` | `number` | Required | The available balance for the account |
| `twoMonthAverage` | `number` | Required | Two month average daily balance of the account |
| `sixMonthAverage` | `number` | Required | Six month average daily balance of the account |
| `beginningBalance` | `number` | Required | Beginning balance of account per the time period in the report |

## Example (as JSON)

```json
{
  "currentBalance": 1000,
  "availableBalance": 1000,
  "twoMonthAverage": -1865.96,
  "sixMonthAverage": -7616.01,
  "beginningBalance": -17795.6
}
```

