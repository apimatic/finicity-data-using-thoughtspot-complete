
# Payroll VOE Employment History

## Structure

`PayrollVOEEmploymentHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asOfDate` | `bigint` | Required | The last time the payroll data was updated in the payroll provider's system |
| `employerName` | `string` | Required | Name of the employer as stated by the employer in the payroll system. |
| `payrollSource` | `string` | Required | The name of the payroll source where the data was retrieved. |
| `employee` | [`PayrollEmployeeRecord`](../../doc/models/payroll-employee-record.md) | Required | - |
| `employment` | [`PayrollEmploymentRecord`](../../doc/models/payroll-employment-record.md) | Required | - |
| `income` | [`PayrollVOEIncomeRecord`](../../doc/models/payroll-voe-income-record.md) | Required | - |

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
    "payFrequency": "Weekly"
  }
}
```

