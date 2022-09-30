
# Report Income Stream Summary

ReportIncomeStreamSummary

## Structure

`ReportIncomeStreamSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `confidenceType` | [`EstimateInclusionEnum`](../../doc/models/estimate-inclusion-enum.md) | Required | - |
| `netMonthly` | [`NetMonthly[]`](../../doc/models/net-monthly.md) | Required | - |
| `incomeEstimate` | [`ReportIncomeEstimate`](../../doc/models/report-income-estimate.md) | Required | - |

## Example (as JSON)

```json
{
  "confidenceType": "MODERATE",
  "netMonthly": [
    {
      "month": 1522562400,
      "net": 2004.77
    }
  ],
  "incomeEstimate": {
    "netAnnual": 1000.12,
    "projectedNetAnnual": 1500.23,
    "estimatedGrossAnnual": 2000.12,
    "projectedGrossAnnual": 2500.23
  }
}
```

