
# Asset Summary for Prequalification Non CRA Reports

## Structure

`AssetSummaryForPrequalificationNonCRAReports`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentBalance` | `number` | Required | Current balance of the account |
| `twoMonthAverage` | `number` | Required | Two month average daily balance of the account |
| `sixMonthAverage` | `number` | Required | Six month average daily balance of the account |
| `beginningBalance` | `number` | Required | Beginning balance of account per the time period in the report |

## Example (as JSON)

```json
{
  "currentBalance": 1000,
  "twoMonthAverage": null,
  "sixMonthAverage": -7616.01,
  "beginningBalance": -17795.6
}
```

