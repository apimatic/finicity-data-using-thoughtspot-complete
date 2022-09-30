
# VOI Report Account Record

VOI Report Account Record

## Structure

`VOIReportAccountRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The generated FInicity ID of the account |
| `number` | `string` | Required | The account number from the institution (all digits except the last four are obfuscated) |
| `ownerName` | `string \| undefined` | Optional | The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `ownerAddress` | `string \| undefined` | Optional | The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `name` | `string` | Required | The account name from the institution |
| `type` | `string` | Required | One of the values from Account Types |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) |
| `incomeStreams` | [`ReportIncomeStreamRecord[]`](../../doc/models/report-income-stream-record.md) | Required | A list of income stream records |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `averageMonthlyBalance` | `number` | Required | The average monthly balance of this account |
| `transactions` | `number[]` | Required | An array of transactions belonging to the account. |
| `availableBalance` | `number` | Required | The available balance for the account |
| `currentBalance` | `number` | Required | Current balance of the account |
| `beginningBalance` | `number` | Required | Beginning balance of account per the time period in the report |
| `miscDeposits` | [`VOIReportTransactionRecord[]`](../../doc/models/voi-report-transaction-record.md) | Required | A list of miscellaneous deposits<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "id": 1000023996,
  "number": "1111",
  "name": "Checking",
  "type": "checking",
  "aggregationStatusCode": 0,
  "incomeStreams": {
    "id": "dens28i3vsch-voi1",
    "name": "none",
    "status": "ACTIVE",
    "estimateInclusion": "MODERATE",
    "confidence": 70,
    "cadence": {
      "startDate": 1577986990,
      "stopDate": 1587986990,
      "days": 14
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
    "incomeStreamMonths": 18,
    "transactions": [
      {
        "id": 100000527471,
        "amount": 22.21,
        "postedDate": 1582286400,
        "description": "FINICITY INC PAYROLL",
        "memo": "Finicity amount credit",
        "institutionTransactionId": "100000000",
        "category": "Paycheck"
      }
    ]
  },
  "balance": 714.16,
  "averageMonthlyBalance": 720.75,
  "transactions": [],
  "availableBalance": 714.16,
  "currentBalance": 714.16,
  "beginningBalance": 714.77,
  "miscDeposits": [
    {
      "id": 100000527471,
      "amount": 22.21,
      "postedDate": 1582286400,
      "description": "FINICITY INC PAYROLL",
      "memo": "Finicity amount credit",
      "institutionTransactionId": "100000000",
      "category": "Paycheck"
    }
  ]
}
```

