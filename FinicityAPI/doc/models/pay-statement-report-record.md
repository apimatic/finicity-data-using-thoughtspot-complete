
# Pay Statement Report Record

## Structure

`PayStatementReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Report id |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `constraints` | [`PayStatementConstraints`](../../doc/models/pay-statement-constraints.md) | Required | - |
| `source` | `string \| undefined` | Optional | - |
| `customerType` | `string` | Required | Customer type |
| `title` | `string` | Required | Title of the report |
| `startDate` | `bigint` | Required | The postedDate of the earliest transaction analyzed for this report |
| `endDate` | `bigint` | Required | The postedDate of the latest transaction analyzed for this report |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `gseEnabled` | `boolean` | Required | - |
| `reportStyle` | `string` | Required | - |
| `numberOfBillableAssets` | `number` | Required | Total number of billable pay statements included in the report |
| `assetIds` | `string[]` | Required | - |
| `payStatementTxverifyDaoList` | [`VOIEPayStatement[]`](../../doc/models/voie-pay-statement.md) | Required | Extracted pay statement details |

## Example (as JSON)

```json
{
  "id": "y0ejausptjg1-paystatement",
  "customerId": 1003413624,
  "consumerId": "4089f408963dd6b90b28a935e9903c0e",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "8wy5htqg8u",
  "type": "paystatement",
  "status": "success",
  "createdDate": 1588350269,
  "constraints": {
    "paystatementReport": {
      "assetIds": [
        "6f8fb0a0-e882-4f57-b672-cf53f1397581"
      ],
      "extractEarnings": true,
      "extractDeductions": false,
      "extractDirectDeposit": true
    },
    "reportCustomFields": [
      {
        "label": "loanID",
        "value": "12345",
        "shown": true
      },
      {
        "label": "trackingID",
        "value": "5555",
        "shown": true
      },
      {
        "label": "loanType",
        "value": "car",
        "shown": false
      },
      {
        "label": "vendorID",
        "value": "1613aa23",
        "shown": true
      },
      {
        "label": "vendorName",
        "value": "PSC Finance",
        "shown": false
      }
    ]
  },
  "customerType": "active",
  "title": "Finicity Pay Statement Extraction Report",
  "startDate": 1572625469,
  "endDate": 1588350269,
  "portfolioId": "spd8aehuw63i-10-port",
  "gseEnabled": true,
  "reportStyle": "paystatement",
  "numberOfBillableAssets": 1,
  "assetIds": [
    "6f8fb0a0-e882-4f57-b672-cf53f1397581"
  ],
  "payStatementTxVerifyDaoList": {
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
}
```

