
# VOIE Payroll Report Record

## Structure

`VOIEPayrollReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `gseEnabled` | `boolean` | Required | Finicity internal use only<br>**Default**: `true` |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `title` | `string` | Required | Title of the report |
| `constraints` | [`PayrollReportRefreshConstraints`](../../doc/models/payroll-report-refresh-constraints.md) | Required | - |
| `employmentHistory` | [`PayrollEmploymentHistory[]`](../../doc/models/payroll-employment-history.md) | Required | An array of employment histories, one for each of the consumer's verified employers. |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "41h4nzppn37u-voiepayroll",
  "portfolioId": "9qud7dtuzbew-13-port",
  "gseEnabled": true,
  "customerType": "active",
  "customerId": 1275320,
  "requestId": "7a7qyps2iy",
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "type": "voiePayroll",
  "status": "success",
  "createdDate": 1579819592,
  "title": "Verification of Income and Employment - Payroll",
  "constraints": {
    "payrollData": {
      "payrollDataRetrievalId": "hahvhe2k0000",
      "employerNames": [
        "ACME INC"
      ]
    }
  },
  "employmentHistory": [
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
        "workLevelName": "Full Time",
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
  ]
}
```

