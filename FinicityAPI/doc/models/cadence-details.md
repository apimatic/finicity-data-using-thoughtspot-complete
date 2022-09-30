
# Cadence Details

## Structure

`CadenceDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `bigint \| undefined` | Optional | postedDate of the first deposit transaction |
| `stopDate` | `bigint \| undefined` | Optional | postedDate of the final deposit transaction (omitted if status is active) |
| `days` | `number \| undefined` | Optional | Number of days between the recurring deposits |

## Example (as JSON)

```json
{
  "startDate": 1577986990,
  "stopDate": 1587986990,
  "days": 14
}
```

