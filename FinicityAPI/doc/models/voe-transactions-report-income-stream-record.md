
# VOE Transactions Report Income Stream Record

## Structure

`VOETransactionsReportIncomeStreamRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity’s income stream ID |
| `name` | `string` | Required | A human-readable name based on the normalizedPayee name of the transactions for this income stream |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | active or inactive |
| `estimateInclusion` | [`EstimateInclusionEnum`](../../doc/models/estimate-inclusion-enum.md) | Required | - |
| `confidence` | `number` | Required | Level of confidence that the deposit stream represents income (example: 85%) |
| `cadence` | [`CadenceDetails`](../../doc/models/cadence-details.md) | Required | - |
| `daysSinceLastTransaction` | `number` | Required | The number of days since the last credit transaction for the particular income stream |
| `nextExpectedTransactionDate` | `bigint` | Required | The next expected credit transaction date for the particular income stream, based on the cadence |
| `incomeStreamMonths` | `number` | Required | The number of months the income transactions are observed |
| `transactions` | [`VOETReportTransactionsForIncomeStreams[]`](../../doc/models/voet-report-transactions-for-income-streams.md) | Required | A list of transaction records |

## Example (as JSON)

```json
{
  "id": "dens28i3vsch-voetransactions",
  "name": "none",
  "status": "ACTIVE",
  "estimateInclusion": "MODERATE",
  "confidence": 70,
  "cadence": {
    "startDate": 1577986990,
    "stopDate": 1587986990,
    "days": 14
  },
  "daysSinceLastTransaction": 15,
  "nextExpectedTransactionDate": 1572625469,
  "incomeStreamMonths": 18,
  "transactions": {
    "id": 100000527471,
    "postedDate": 1582286400,
    "description": "FINICITY INC PAYROLL",
    "normalizedPayee": "Finicity",
    "institutionTransactionId": "100000000",
    "category": "Paycheck"
  }
}
```

