
# Report Account

## Structure

`ReportAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The generated FInicity ID of the account |
| `number` | `string` | Required | The account number from the institution (all digits except the last four are obfuscated) |
| `ownerName` | `string` | Required | The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `name` | `string` | Required | The account name from the institution |
| `type` | `string` | Required | One of the values from Account Types |
| `availableBalance` | `number` | Required | The available balance for the account |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `balanceDate` | `bigint` | Required | A timestamp showing when the balance was captured (see Handling Dates and Times) |
| `averageMonthlyBalance` | `number` | Required | The average monthly balance of this account |
| `transactions` | [`ReportTransaction[]`](../../doc/models/report-transaction.md) | Required | An array of transactions belonging to the account. |
| `asset` | [`AssetSummary`](../../doc/models/asset-summary.md) | Required | An asset record for the account |
| `details` | [`AccountDetail`](../../doc/models/account-detail.md) | Required | A details record for the account |
| `incomeStream` | [`ReportIncomeStream`](../../doc/models/report-income-stream.md) | Required | Best matched income stream record |
| `incomeStreams` | [`ReportIncomeStream[]`](../../doc/models/report-income-stream.md) | Required | A list of income stream records |

## Example (as JSON)

```json
{
  "id": 1000023996,
  "number": "1111",
  "ownerName": "JOHN DOE",
  "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
  "name": "Checking",
  "type": "checking",
  "availableBalance": 501.24,
  "aggregationStatusCode": 0,
  "balance": 501.24,
  "balanceDate": 1588350276,
  "averageMonthlyBalance": 501.02,
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
  ],
  "asset": {
    "type": "checking",
    "currentBalance": 1000,
    "twoMonthAverage": -1865.96,
    "sixMonthAverage": -7616.01,
    "beginningBalance": -17795.6
  },
  "details": {
    "interestMarginBalance": -50000,
    "availableCashBalance": 1500,
    "vestedBalance": 300000,
    "currentLoanBalance": 0,
    "availableBalanceAmount": 0
  },
  "incomeStream": {
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
    "projectedNetAnnual": 0,
    "estimatedGrossAnnual": 0,
    "projectedGrossAnnual": 151609,
    "averageMonthlyIncomeNet": 9206.31,
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
  "incomeStreams": [
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
      "projectedNetAnnual": 0,
      "estimatedGrossAnnual": 0,
      "projectedGrossAnnual": 151609,
      "averageMonthlyIncomeNet": 9206.31,
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
    }
  ]
}
```

