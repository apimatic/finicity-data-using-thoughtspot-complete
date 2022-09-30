
# VOIE Pay Statement

## Structure

`VOIEPayStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPeriod` | `string` | Required | The pay period of the pay statement. |
| `billable` | `boolean` | Required | Designates whether the pay statement is billable. |
| `assetId` | `string` | Required | The asset ID of the stored pay statement |
| `payDate` | `bigint` | Required | The listed pay date for the pay statement. |
| `startDate` | `bigint` | Required | The beginning of the pay period. |
| `endDate` | `bigint` | Required | The end of the pay period. |
| `netPayCurrent` | `number` | Required | The total pay after deductions for the employee for the current pay period. |
| `netPayYTD` | `number` | Required | The total accumulation of pay after deductions for the employee for the current pay year. |
| `grossPayCurrent` | `number` | Required | The total pay before deductions for the employee for the current pay period. |
| `grossPayYTD` | `number` | Required | The total accumulation of pay before deductions for the employee for the current pay year. |
| `payrollProvider` | `string` | Required | The company that provides the pay stub. |
| `employer` | [`Employer`](../../doc/models/employer.md) | Required | Information pertaining to the employer |
| `employee` | [`Employee`](../../doc/models/employee.md) | Required | Information pertaining to the employee |
| `payStat` | [`PayStat[]`](../../doc/models/pay-stat.md) | Required | Information pertaining to the earnings on the pay statement |
| `deductions` | [`Deduction[]`](../../doc/models/deduction.md) | Required | Information pertaining to deductions on the pay statement |
| `directDeposits` | [`DirectDeposit[]`](../../doc/models/direct-deposit.md) | Required | Information pertaining to direct deposits on the pay statement |

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
  "payrollProvider": "Finicity",
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
  "deductions": [
    {
      "name": "401",
      "description": "401k",
      "amountCurrent": 1744.61,
      "amountYTD": 1744.6,
      "type": "401 Deductions"
    }
  ],
  "directDeposits": [
    {
      "financialInstitutionName": "America First",
      "accountType": "Checking",
      "amountCurrent": 1744.61,
      "accountLastFour": "XX34",
      "description": "Payroll"
    }
  ]
}
```

