
# VOA Report Account

## Structure

`VOAReportAccount`

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
| `transactions` | [`VOAReportTransaction[]`](../../doc/models/voa-report-transaction.md) | Required | An array of transactions belonging to the account. |
| `asset` | [`AssetSummary`](../../doc/models/asset-summary.md) | Required | An asset record for the account |
| `details` | [`AccountDetail`](../../doc/models/account-detail.md) | Required | A details record for the account |
| `totNumberInsufficientFundsFeeDebitTxAccount` | `bigint` | Required | The count for the total number of insufficient funds transactions, based on the `fromDate` of the report. |
| `totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount` | `bigint` | Required | The count for the total number of insufficient funds transactions for the last two months, based on the `fromDate` of the report. |
| `totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount` | `bigint` | Required | The count for the total number of insufficient funds transactions for the last six months, based on the `fromDate` of the report. |
| `totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount` | `bigint` | Required | The number of days since the most recent insufficient funds transaction, based on the `fromDate` of the report. |

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
      "id": 100000527471,
      "amount": 22.21,
      "postedDate": 1582286400,
      "description": "FINICITY INC PAYROLL",
      "memo": "Finicity amount credit",
      "normalizedPayee": "Finicity",
      "institutionTransactionId": "100000000",
      "category": "Paycheck",
      "bestRepresentation": "FINICITY INC PAYROLL"
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
    "availableBalanceAmount": 1000
  },
  "totNumberInsufficientFundsFeeDebitTxAccount": 0,
  "totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount": 0,
  "totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount": 0,
  "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 120
}
```

