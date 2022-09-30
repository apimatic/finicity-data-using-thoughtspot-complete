
# Payroll Employment History

## Structure

`PayrollEmploymentHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asOfDate` | `bigint` | Required | The last time the payroll data was updated in the payroll provider's system |
| `employerName` | `string` | Required | Name of the employer as stated by the employer in the payroll system. |
| `payrollSource` | `string` | Required | The name of the payroll source where the data was retrieved. |
| `employee` | [`PayrollEmployeeRecord`](../../doc/models/payroll-employee-record.md) | Required | - |
| `employment` | [`PayrollEmploymentRecord`](../../doc/models/payroll-employment-record.md) | Required | - |
| `income` | [`PayrollIncomeRecord`](../../doc/models/payroll-income-record.md) | Required | - |

## Example (as JSON)

```json
{
  "asOfDate": 1596175200,
  "employerName": "ACME INC",
  "payrollSource": "finPayroll",
  "employee": {
    "name": "John Doe Smith",
    "givenName": "John",
    "middleName": "Doe",
    "familyName": "Smith",
    "address": [
      {
        "address1": "Address 1",
        "city": "City",
        "state": "TX",
        "zip": "99999"
      }
    ]
  },
  "employment": {
    "employerName": "ACME INC",
    "legalEntityId": "752760000",
    "originalHireDate": 1527832800,
    "latestHireDate": 1527832800,
    "latestPayDate": 1596175200,
    "daysSinceLastPay": 10,
    "numberPayCadenceWithoutPay": 1,
    "employmentEndDate": 1527832800,
    "employmentDuration": "P1Y6M0D",
    "employerAddress": [
      {
        "address1": "Address 1",
        "city": "City",
        "state": "TX",
        "zip": "99999"
      }
    ],
    "employmentStatusCode": "A",
    "employmentStatusName": "Active",
    "workLevelCode": "FT",
    "workLevelName": "Full Time-Regular",
    "workLevelStatus": "Full Time",
    "positionTitle": "Shift Supervisor",
    "positionDuration": "P1Y6M0D"
  },
  "income": {
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
}
```

