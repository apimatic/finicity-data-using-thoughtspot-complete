
# Payroll Monthly Income Record

## Structure

`PayrollMonthlyIncomeRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedMonthlyBasePay` | `number \| undefined` | Optional | The estimated monthly base pay amount for the employment record, as calculated by Finicity. |
| `estimatedMonthlyOvertimePay` | `number \| undefined` | Optional | The estimated monthly overtime pay amount for the employment record, as calculated by Finicity. |
| `estimatedMonthlyBonusPay` | `number \| undefined` | Optional | The estimated monthly bonus pay amount for the employment record, as calculated by Finicity. |
| `estimatedMonthlyOtherPay` | `number \| undefined` | Optional | The estimated monthly other pay amount for the employment record, as calculated by Finicity. |

## Example (as JSON)

```json
{
  "estimatedMonthlyBasePay": 2000,
  "estimatedMonthlyOvertimePay": 100
}
```

