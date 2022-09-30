
# Payroll Income Record

## Structure

`PayrollIncomeRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payFrequency` | `string` | Required | The current pay frequency: <br> * `Daily` <br> * `Weekly` <br> * `Bi-Weekly` <br> * `Bi-Weekly Odd` (Bi-Weekly pay on odd weeks) <br> * `Bi-Weekly Even` (Bi-Weekly pay on even weeks) <br> * `Semi-Monthly` <br> * `Monthly` <br> * `Quarterly` <br>* `Semi-Annual` <br> * `Annual` <br>  * `Every 2.6 wks` <br> * `Every 4 wks` <br> * `Every 5.2 wks` |
| `payType` | `string \| undefined` | Optional | The current pay type. Options are `Salary`, `Hourly`, or `Daily`. |
| `basePayRate` | `number` | Required | The current regular pay rate from the payroll provider. |
| `annualIncome` | [`PayrollAnnualIncomeRecord[]`](../../doc/models/payroll-annual-income-record.md) | Required | - |
| `monthlyIncome` | [`PayrollMonthlyIncomeRecord`](../../doc/models/payroll-monthly-income-record.md) | Required | - |
| `directPayStatements` | [`DirectPayStatementFields[]`](../../doc/models/direct-pay-statement-fields.md) | Required | An array of direct payments from an employer |

## Example (as JSON)

```json
{
  "payFrequency": "Weekly",
  "payType": "Hourly",
  "basePayRate": 27.5,
  "annualIncome": [
    {
      "year": "2021",
      "grossPayAmountYTD": 73925.12,
      "netPayAmountYTD": 73925.12,
      "basePayAmountYTD": 73925.12,
      "overtimePayAmountYTD": 100.01
    },
    {
      "year": "2020",
      "grossPayAmountYTD": 73925.12,
      "netPayAmountYTD": 73925.12,
      "basePayAmountYTD": 73925.12,
      "overtimePayAmountYTD": 100.01
    },
    {
      "year": "2019",
      "grossPayAmountYTD": 73925.12,
      "netPayAmountYTD": 73925.12,
      "basePayAmountYTD": 73925.12,
      "overtimePayAmountYTD": 100.01
    }
  ],
  "monthlyIncome": {
    "estimatedMonthlyBasePay": 2000,
    "estimatedMonthlyOvertimePay": 100
  },
  "directPayStatements": [
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
  ]
}
```

