
# VOIE Txverify Report Account for Institutions

## Structure

`VOIETxverifyReportAccountForInstitutions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The generated FInicity ID of the account |
| `ownerName` | `string` | Required | The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `name` | `string` | Required | The account name from the institution |
| `number` | `string` | Required | The account number from the institution (all digits except the last four are obfuscated) |
| `type` | `string` | Required | One of the values from Account Types |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) |
| `incomeStreams` | [`VOIETxverifyReportIncomeStream[]`](../../doc/models/voie-txverify-report-income-stream.md) | Required | A list of income stream records |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `averageMonthlyBalance` | `number` | Required | The average monthly balance of this account |
| `transactions` | `string[]` | Required | An array of transactions belonging to the account |
| `availableBalance` | `number` | Required | The available balance for the account |

## Example (as JSON)

```json
{
  "id": 1000023996,
  "ownerName": "JOHN DOE",
  "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
  "name": "Checking",
  "number": "1111",
  "type": "checking",
  "aggregationStatusCode": 0,
  "incomeStreams": [
    {
      "id": "dens28i3vsch-voietxverify",
      "name": "none",
      "status": "ACTIVE",
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
      "projectedNetAnnual": 0,
      "estimatedGrossAnnual": 12392.1,
      "projectedGrossAnnual": 151609,
      "averageMonthlyIncomeNet": 9206.31,
      "incomeStreamMonths": 24,
      "transactions": [
        {
          "id": 100000527471,
          "amount": 1802.22,
          "postedDate": 1559241000,
          "description": "FINICITY INC PAYROLL",
          "memo": "Finicity amount credit",
          "institutionTransactionId": "100000000",
          "category": "Paycheck"
        }
      ]
    }
  ],
  "balance": 123.45,
  "averageMonthlyBalance": 301.45,
  "transactions": [],
  "availableBalance": 123.45
}
```

