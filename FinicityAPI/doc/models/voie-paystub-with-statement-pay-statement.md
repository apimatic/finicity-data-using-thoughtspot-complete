
# VOIE Paystub With Statement Pay Statement

## Structure

`VOIEPaystubWithStatementPayStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPeriod` | `string` | Required | The pay period of the pay statement. |
| `billable` | `boolean` | Required | This will display true if the pay statement is billable. If a pay statement has been digitized previously, this will display as false as it will not be billable. |
| `assetId` | `string` | Required | The asset ID of the stored pay statement |
| `payDate` | `bigint` | Required | The listed pay date for the pay statement. |
| `startDate` | `bigint` | Required | The beginning of the pay period. |
| `endDate` | `bigint` | Required | The end of the pay period. |
| `netPayCurrent` | `number` | Required | The total pay after deductions for the employee for the current pay period. |
| `netPayYTD` | `number` | Required | The total accumulation of pay after deductions for the employee for the current pay year. |
| `grossPayCurrent` | `number` | Required | The total pay before deductions for the employee for the current pay period. |
| `grossPayYTD` | `number` | Required | The total accumulation of pay before deductions for the employee for the current pay year. |
| `payrollProvider` | `string \| undefined` | Optional | The payroll provider extracted from the pay statement. |
| `employer` | [`Employer`](../../doc/models/employer.md) | Required | Information pertaining to the employer |
| `employee` | [`Employee`](../../doc/models/employee.md) | Required | Information pertaining to the employee |
| `payStat` | [`PayStat[]`](../../doc/models/pay-stat.md) | Required | Information pertaining to the earnings on the pay statement |
| `directDeposits` | [`DirectDeposit[]`](../../doc/models/direct-deposit.md) | Required | Information pertaining to the direct deposits on the pay statement |
| `monthlyIncome` | [`PaystubMonthlyIncomeRecord`](../../doc/models/paystub-monthly-income-record.md) | Required | The Finicity estimated monthly income based on the pay cadence and the earnings categories from the paystub, as available. |
| `institutions` | `string[]` | Required | Not populated for the voieWithStatement style of paystub report. For the VOIE - Paystub (with TXVerfiy) reports this would include details of the financial institution accounts and income streams with matching transactions to the pay statement. |
| `errorCode` | `number \| undefined` | Optional | Error code for the asset |
| `errorMessage` | `string \| undefined` | Optional | Error message for the asset |

## Example (as JSON)

```json
{
  "payPeriod": "LastPayPeriod",
  "billable": true,
  "assetId": "6f8fb0a0-e882-4f57-b672-cf53f1397581",
  "payDate": 1559241000,
  "startDate": 1557513000,
  "endDate": 1558722600,
  "netPayCurrent": 1802.22,
  "netPayYTD": 36000.0,
  "grossPayCurrent": 24200.0,
  "grossPayYTD": 72600.0,
  "employer": {
    "name": "Rocket Surgery"
  },
  "employee": {
    "name": "Patrick Purchaser"
  },
  "payStat": {
    "name": "regular 1",
    "type": "regular",
    "description": "regular income",
    "amountCurrent": 6000.0,
    "amountYTD": 18000.0
  },
  "directDeposits": [
    {
      "amountCurrent": 1744.61,
      "accountLastFour": "1234"
    }
  ],
  "monthlyIncome": {
    "estimatedMonthlyBasePay": 2000,
    "estimatedMonthlyOvertimePay": 50,
    "estimatedMonthlyBonusPay": 20,
    "estimatedMonthlyCommissionPay": 50
  },
  "institutions": []
}
```

