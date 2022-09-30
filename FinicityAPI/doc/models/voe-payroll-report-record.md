
# VOE Payroll Report Record

## Structure

`VOEPayrollReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `gseEnabled` | `boolean` | Required | Finicity internal use only<br>**Default**: `true` |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `title` | `string` | Required | Title of the report |
| `status` | `string` | Required | inProgress, success, or failure |
| `constraints` | [`PayrollVOEReportConstraints`](../../doc/models/payroll-voe-report-constraints.md) | Required | - |
| `employmentHistory` | [`PayrollVOEEmploymentHistory[]`](../../doc/models/payroll-voe-employment-history.md) | Required | An array of employment histories, one for each of the consumer's verified employers. |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "41h4nzppn47u-voepayroll",
  "portfolioId": "9qud7dtuzbew-3-port",
  "gseEnabled": true,
  "createdDate": 1579819592,
  "requesterName": "Decisioning API",
  "requestId": "7a7qyps2iy",
  "customerType": "active",
  "customerId": 1275320,
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "6789",
  "type": "voePayroll",
  "title": "Verification of Employment - Payroll",
  "status": "success",
  "constraints": {
    "payrollData": {
      "payrollDataRetrievalId": "hahvhe2k0000",
      "employerNames": [
        "ACME INC"
      ],
      "reportId": "abcdefghijkl-voiepayroll"
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
        "workLevelName": "Full Time-Regular",
        "workLevelStatus": "Full Time",
        "positionTitle": "Shift Supervisor",
        "positionDuration": "P1Y6M0D"
      },
      "income": {
        "payFrequency": "Weekly"
      }
    }
  ]
}
```

