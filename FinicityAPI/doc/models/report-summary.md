
# Report Summary

## Structure

`ReportSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity report ID |
| `consumerId` | `string` | Required | Finicity ID for the consumer |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer's Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | The unique requestId for this specific call request |
| `constraints` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `createdDate` | `bigint` | Required | The date the report was generated |

## Example (as JSON)

```json
{
  "id": "41h4nzppn37u",
  "consumerId": "b06cf32dd2222b32e31083221063f561",
  "consumerSsn": "5123",
  "requesterName": "Finicity Test API",
  "requestId": "cjqm4wtdcn",
  "constraints": {
    "accountIds": [
      "1000535275",
      "1000535276"
    ],
    "fromDate": 1577986990,
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
    ],
    "showNsf": false
  },
  "type": "voa",
  "status": "success",
  "createdDate": 1588008615
}
```

