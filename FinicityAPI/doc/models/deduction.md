
# Deduction

## Structure

`Deduction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The normalized category of the deductions in the format [type][number]. The number is the will be the iterating number of the type’s occurrence starting at one. |
| `description` | `string \| undefined` | Optional | The deduction line’s deduction type description |
| `amountCurrent` | `number \| undefined` | Optional | The amount for the deduction line deducted from employee’s pay for the specified pay period. |
| `amountYTD` | `number \| undefined` | Optional | The amount for the deduction line being deducted from the employee’s pay for the current pay year. |
| `type` | `string \| undefined` | Optional | Categorization based on the deduction line’s description. |

## Example (as JSON)

```json
{
  "name": "401",
  "description": "401k",
  "amountCurrent": 1744.61,
  "amountYTD": 1744.61,
  "type": "401 Deductions"
}
```

