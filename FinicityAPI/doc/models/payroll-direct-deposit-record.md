
# Payroll Direct Deposit Record

## Structure

`PayrollDirectDepositRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountTypeCode` | `string \| undefined` | Optional | Bank account type: <br> * `Checking` <br> * `Savings` <br> * `Loan`:  Loan account employee chooses to direct a portion of their net pay to help pay off a loan |
| `amount` | `number \| undefined` | Optional | Direct deposit amount |
| `accountLastFour` | `string \| undefined` | Optional | Last four digits of the deposit account number |
| `routingNumber` | `string \| undefined` | Optional | Routing number for the deposit account |

## Example (as JSON)

```json
{
  "accountTypeCode": "Savings",
  "amount": 1401.95,
  "accountLastFour": "1234",
  "routingNumber": "000000000"
}
```

