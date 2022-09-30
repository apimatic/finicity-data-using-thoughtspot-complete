
# Paystub Monthly Income Record

## Structure

`PaystubMonthlyIncomeRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedMonthlyBasePay` | `number \| undefined` | Optional | The estimated monthly base pay amount for the employment from the paystub, calculated by Finicity. |
| `estimatedMonthlyOvertimePay` | `number \| undefined` | Optional | The estimated monthly overtime pay amount for the employment from the paystub, calculated by Finicity. |
| `estimatedMonthlyBonusPay` | `number \| undefined` | Optional | The estimated monthly bonus pay amount for the employment from the paystub, calculated by Finicity. |
| `estimatedMonthlyCommissionPay` | `number \| undefined` | Optional | The estimated commission bonus pay amount for the employment from the paystub, calculated by Finicity. |

## Example (as JSON)

```json
{
  "estimatedMonthlyBasePay": 2000,
  "estimatedMonthlyOvertimePay": 50,
  "estimatedMonthlyBonusPay": 20,
  "estimatedMonthlyCommissionPay": 50
}
```

