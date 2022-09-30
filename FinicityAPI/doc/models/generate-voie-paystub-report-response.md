
# Generate VOIE Paystub Report Response

## Structure

`GenerateVOIEPaystubReportResponse`

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
| `constraints` | [`VOIEWithStatementConstraints`](../../doc/models/voie-with-statement-constraints.md) | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |

## Example (as JSON)

```json
{
  "id": "2f3z55zuwewm-voietxverify",
  "portfolioId": "9qud7dtuzbew-13-port",
  "customerType": "active",
  "customerId": 1275320,
  "requestId": "7a7qyps2iy",
  "requesterName": "Decisioning API",
  "createdDate": 1579819592,
  "title": "Verification of Income and Employment - Paystub",
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "6789",
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
        "value": "123456",
        "shown": true
      },
      {
        "label": "trackingID",
        "value": "5555",
        "shown": true
      }
    ]
  },
  "type": "voieTxVerify",
  "status": "inProgress"
}
```

