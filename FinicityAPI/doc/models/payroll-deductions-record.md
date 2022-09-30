
# Payroll Deductions Record

## Structure

`PayrollDeductionsRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the deduction as described by the payroll provider, if available. Note: Today the response provides the deductions summed into the defined deduction types. In the future we may be able to provide the full deduction breakdown, at which point this field would be used to pass the deduction name as would be displayed on the employee's paystub. |
| `type` | `string` | Required | Deduction name types: <br> * `Federal tax`: Federal tax withholdings <br> * `State tax`: State tax withholdings <br> * `Local tax`: Local tax withholdings <br> * `Social security tax`: Social security tax withholdings <br> * `Medicare tax`: Medicare tax withholdings <br> * `SUI SDI VPDI tax`: SUI SDI VPDI tax <br> * `Retirement deductions`: Retirement withholdings <br> * `Benefit deductions`: Medical/Health benefits withholdings (i.e. medical, dental, vision insurance) <br> * `Garnishment deductions`: Garnishment withholdings, (i.e. bankruptcy, student loan, state garnishments, tax levy garnishments, child support) <br> * `Other deductions`: Other withholdings, Includes any other and uncommon withholdings, pension plan, stock plans, etc. |
| `amount` | `number` | Required | The amount associated with each deduction |
| `amountYTD` | `number \| undefined` | Optional | The YTD total amount for each deduction (if available). |

## Example (as JSON)

```json
{
  "type": "Federal tax",
  "amount": 143.45
}
```

