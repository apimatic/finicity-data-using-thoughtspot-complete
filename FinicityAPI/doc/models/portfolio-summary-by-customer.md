
# Portfolio Summary by Customer

## Structure

`PortfolioSummaryByCustomer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer. |
| `reports` | [`PortfolioReport[]`](../../doc/models/portfolio-report.md) | Required | A list of reports in the portfolio |

## Example (as JSON)

```json
{
  "portfolioId": "zb8bfcsqz4cp-5-port",
  "reports": [
    {
      "id": "8zb2xzh1574m-voi",
      "portfolioId": "zb8bfcsqz4cp-4-port",
      "type": "voi",
      "status": "success",
      "createdDate": 1585931618
    },
    {
      "id": "4hm0f34z6tmd-assetsummary",
      "portfolioId": "zb8bfcsqz4cp-3-port",
      "type": "assetSummary",
      "status": "success",
      "createdDate": 1585931701
    },
    {
      "id": "zjiwyv7sixb0",
      "portfolioId": "zb8bfcsqz4cp-2-port",
      "type": "voaHistory",
      "status": "success",
      "createdDate": 1585931593
    },
    {
      "id": "750muekbmipj-prequalvoa",
      "portfolioId": "zb8bfcsqz4cp-1-port",
      "type": "preQualVoa",
      "status": "success",
      "createdDate": 1585931727
    }
  ]
}
```

