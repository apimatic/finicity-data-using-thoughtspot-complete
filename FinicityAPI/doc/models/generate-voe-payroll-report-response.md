
# Generate VOE Payroll Report Response

## Structure

`GenerateVOEPayrollReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `title` | `string` | Required | Title of the report |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `constraints` | [`PayrollReportRefreshResponseConstraints`](../../doc/models/payroll-report-refresh-response-constraints.md) | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "41h4nzppn47u-voepayroll",
  "portfolioId": "9qud7dtuzbew-3-port",
  "customerType": "active",
  "customerId": 1011140000,
  "requestId": "7a7qyps2iy",
  "requesterName": "Decisioning API",
  "createdDate": 1579819592,
  "title": "Finicity Verification of Employment - Payroll",
  "consumerId": "656cf7083c5c06e0c125a698579f0000",
  "consumerSsn": "6789",
  "constraints": {
    "payrollData": {
      "payrollDataRetrievalId": "hahvhe2k0000",
      "employerNames": [
        "ACME INC"
      ],
      "reportId": "abcdefghijkl-voiepayroll"
    },
    "reportCustomFields": [
      {
        "label": "loanID",
        "value": "12345",
        "shown": true
      }
    ]
  },
  "type": "voePayroll",
  "status": "inProgress"
}
```

