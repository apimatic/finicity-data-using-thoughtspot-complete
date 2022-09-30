
# Report Summaries

## Structure

`ReportSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reports` | [`ReportSummary[]`](../../doc/models/report-summary.md) | Required | Data pertaining to each report |

## Example (as JSON)

```json
{
  "reports": [
    {
      "id": "41h4nzppn37u",
      "consumerId": "b06cf32dd2222b32e31083221063f561",
      "consumerSsn": "5123",
      "requesterName": "Finicity Test API",
      "requestId": "cjqm4wtdcn",
      "constraints": {
        "accountIds": [
          "1000535275, 1000535276"
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
        ]
      },
      "type": "voa",
      "status": "success",
      "createdDate": 1588008615
    }
  ]
}
```

