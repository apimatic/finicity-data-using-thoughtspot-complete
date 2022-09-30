
# Generate VOIE Paystub With Txverify Report Response

## Structure

`GenerateVOIEPaystubWithTxverifyReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `customerType` | `string` | Required | Customer type |
| `constraints` | [`VOIEPaystubWithTxverifyResponseConstraints`](../../doc/models/voie-paystub-with-txverify-response-constraints.md) | Required | - |
| `title` | `string` | Required | Title of the report |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |

## Example (as JSON)

```json
{
  "id": "2f3z55zuwewm-voietxverify",
  "customerId": 1275320,
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "7a7qyps2iy",
  "type": "voieTxVerify",
  "status": "inProgress",
  "createdDate": 1579819592,
  "constraints": {
    "accountIds": [
      "1000535275"
    ],
    "voieWithInterviewData": {
      "txVerifyInterview": [
        {
          "assetId": "6f8fb0a0-e882-4f57-b672-cf53f1397581",
          "accounts": []
        }
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
      }
    ]
  },
  "customerType": "active",
  "title": "Finicity Verification of Income and Employment - Paystub (with TXVerify)",
  "portfolioId": "9qud7dtuzbew-2-port"
}
```

