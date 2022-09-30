
# Pay Stat

## Structure

`PayStat`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The normalized category of the earnings with a number appended. The number is the will be the iterating number of the type’s occurrence starting at one. |
| `type` | [`PayStatEarningsCategorizationTypeEnum \| undefined`](../../doc/models/pay-stat-earnings-categorization-type-enum.md) | Optional | Categorization based on the earning line’s description. |
| `description` | `string \| undefined` | Optional | The earnings line’s pay type description |
| `amountCurrent` | `number \| undefined` | Optional | The amount for the earning line paid out to the employee for the specified pay period. |
| `amountYTD` | `number \| undefined` | Optional | The amount for the earning line being paid out to the employee for the current pay year. |

## Example (as JSON)

```json
{
  "name": "regular 1",
  "type": "regular",
  "description": "regular income",
  "amountCurrent": 6000.0,
  "amountYTD": 18000.0
}
```

