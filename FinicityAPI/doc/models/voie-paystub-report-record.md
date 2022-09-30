
# VOIE Paystub Report Record

## Structure

`VOIEPaystubReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `gseEnabled` | `boolean` | Required | Finicity Internal Use Only<br>**Default**: `true` |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `title` | `string` | Required | Title of the report |
| `reportStyle` | `string` | Required | voieWithStatement |
| `constraints` | [`VOIEWithStatementConstraints`](../../doc/models/voie-with-statement-constraints.md) | Required | - |
| `assetIds` | `string[]` | Required | The pay statements included in the report |
| `numberOfBillableAssets` | `number` | Required | Total number of billable pay statements included in the report |
| `payStatements` | [`VOIEPaystubWithStatementPayStatement[]`](../../doc/models/voie-paystub-with-statement-pay-statement.md) | Required | Extracted pay statement details, and the transaction matching summary |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "2f3z55zuwewm-voietxverify",
  "portfolioId": "9qud7dtuzbew-13-port",
  "gseEnabled": true,
  "customerType": "active",
  "customerId": 1275320,
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "7a7qyps2iy",
  "type": "voieTxVerify",
  "status": "success",
  "createdDate": 1579819592,
  "title": "Verification of Income and Employment - Paystub",
  "reportStyle": "voieWithStatement",
  "constraints": {
    "voieWithStatementData": {
      "assetIds": [
        "d50ed92f-543b-431c-8286-c8b8f6556679"
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
      }
    ]
  },
  "assetIds": [
    "6f8fb0a0-e882-4f57-b672-cf53f1397581"
  ],
  "numberOfBillableAssets": 1,
  "payStatements": {
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
}
```

