
# Direct Pay Statement Fields

## Structure

`DirectPayStatementFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payrollPayHistoryId` | `string` | Required | An id for the income and employment details from a pay period. |
| `lastPayPeriodIndicator` | `boolean` | Required | The payment history from the last pay period of the year. If there are 3 years of pay history, then the value is true for 3 payment histories. |
| `mainPayStatementFields` | [`PayrollMainPaystatementFields`](../../doc/models/payroll-main-paystatement-fields.md) | Required | - |
| `earnings` | [`PayrollEarningsRecord[]`](../../doc/models/payroll-earnings-record.md) | Required | - |
| `deductions` | [`PayrollDeductionsRecord[]`](../../doc/models/payroll-deductions-record.md) | Required | - |
| `directDeposits` | [`PayrollDirectDepositRecord[]`](../../doc/models/payroll-direct-deposit-record.md) | Required | - |

## Example (as JSON)

```json
{
  "payrollPayHistoryId": "cy1a742k28",
  "lastPayPeriodIndicator": true,
  "mainPayStatementFields": {
    "payDate": 1596175200,
    "startDate": 1595138400,
    "endDate": 1595656800,
    "payPeriodHours": 40,
    "payFrequency": "Weekly",
    "payType": "Hourly",
    "grossPayAmount": 1888.75,
    "grossPayAmountYTD": 73925,
    "netPayAmount": 1401.95,
    "netPayAmountYTD": 73925
  },
  "earnings": [
    {
      "name": "basePayAmount",
      "type": "base",
      "rate": 27.5,
      "amount": 1100,
      "amountYTD": 5500
    }
  ],
  "deductions": [
    {
      "type": "Federal tax",
      "amount": 143.45
    },
    {
      "type": "State tax",
      "amount": 12.5
    }
  ],
  "directDeposits": [
    {
      "accountTypeCode": "Savings",
      "amount": 1401.95,
      "accountLastFour": "1234",
      "routingNumber": "000000000"
    }
  ]
}
```

