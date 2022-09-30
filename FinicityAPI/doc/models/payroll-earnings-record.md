
# Payroll Earnings Record

## Structure

`PayrollEarningsRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the earning as described by the payroll provider, if available. Note: Today the response provides the earnings summed into the defined earning types. In the future we may be able to provide the full earnings breakdown, at which point this field would be used to pass the earnings name as would be displayed on the employee's paystub. |
| `type` | `string` | Required | Earnings type for each earning. Types are: `base`, `overtime`, `bonus`, `other`, `commission` |
| `rate` | `number \| undefined` | Optional | Rate for each earning if available. |
| `amount` | `number` | Required | Earnings amount for each earning type |
| `amountYTD` | `number \| undefined` | Optional | Earnings YTD amount if available |

## Example (as JSON)

```json
{
  "name": "basePayAmount",
  "type": "base",
  "rate": 27.5,
  "amount": 1100,
  "amountYTD": 73925
}
```

