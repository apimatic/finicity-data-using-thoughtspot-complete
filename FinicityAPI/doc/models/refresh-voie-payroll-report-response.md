
# Refresh VOIE Payroll Report Response

## Structure

`RefreshVOIEPayrollReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `constraints` | [`PayrollReportRefreshResponseConstraints`](../../doc/models/payroll-report-refresh-response-constraints.md) | Required | - |
| `customerType` | `string` | Required | Customer type |
| `title` | `string` | Required | Title of the report |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |

## Example (as JSON)

```json
{
  "id": "123456789012-voiepayroll",
  "customerId": 1011140000,
  "consumerId": "656cf7083c5c06e0c125a698579f0000",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "7a7qyps2iy",
  "type": "voiePayroll",
  "status": "inProgress",
  "createdDate": 1579819592,
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
  "customerType": "active",
  "title": "Finicity Verification of Income and Employment - Payroll",
  "portfolioId": "9qud7dtuzbew-2-port"
}
```

