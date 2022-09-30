
# Report Income Stream

## Structure

`ReportIncomeStream`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity’s income stream ID |
| `name` | `string` | Required | A human-readable name based on the normalizedPayee name of the transactions for this income stream |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | active or inactive |
| `estimateInclusion` | [`EstimateInclusionEnum`](../../doc/models/estimate-inclusion-enum.md) | Required | - |
| `confidence` | `number` | Required | Level of confidence that the deposit stream represents income (example: 85%) |
| `cadence` | [`CadenceDetails`](../../doc/models/cadence-details.md) | Required | - |
| `netMonthly` | [`NetMonthly[]`](../../doc/models/net-monthly.md) | Required | A list of net monthly records. One instance for each complete calendar month in the report<br>**Constraints**: *Unique Items Required* |
| `netAnnual` | `number` | Required | Sum of all values in netMonthlyIncome over the previous 12 months |
| `projectedNetAnnual` | `number` | Required | Projected net income over the next 12 months, across all income streams, based on netAnnualIncome |
| `estimatedGrossAnnual` | `number` | Required | Before-tax gross annual income (estimated from netAnnual) across all income stream in the past 12 months |
| `projectedGrossAnnual` | `number` | Required | Projected gross income over the next 12 months, across all active income streams, based on projectedNetAnnual |
| `averageMonthlyIncomeNet` | `number` | Required | Monthly average amount over the previous 24 months |
| `transactions` | [`ReportTransaction[]`](../../doc/models/report-transaction.md) | Required | A list of transaction records |

## Example (as JSON)

```json
{
  "id": "dens28i3vsch-voi1",
  "name": "none",
  "status": "ACTIVE",
  "estimateInclusion": "MODERATE",
  "confidence": 70,
  "cadence": {
    "startDate": 1577986990,
    "stopDate": 1587986990,
    "days": 180
  },
  "netMonthly": [
    {
      "month": 1522562400,
      "net": 2004.77
    }
  ],
  "netAnnual": 110475.7,
  "projectedNetAnnual": 0.0,
  "estimatedGrossAnnual": null,
  "projectedGrossAnnual": 151609.0,
  "averageMonthlyIncomeNet": 9206.31,
  "transactions": [
    {
      "id": 100000408657,
      "accountId": 1000018102,
      "amount": 1928.1,
      "createdDate": 1587576293,
      "customerId": "1000005494",
      "description": "ACH Deposit Finicity",
      "institutionTransactionId": "0000000000",
      "postedDate": 1540641600,
      "status": "active",
      "transactionDate": 1540641600
    }
  ]
}
```

