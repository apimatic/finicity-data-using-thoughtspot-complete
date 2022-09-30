
# Prequalification Report Account

## Structure

`PrequalificationReportAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The generated FInicity ID of the account |
| `number` | `string` | Required | The account number from the institution (all digits except the last four are obfuscated) |
| `ownerName` | `string` | Required | The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `name` | `string` | Required | The account name from the institution |
| `type` | `string` | Required | One of the values from Account Types |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `balanceDate` | `bigint` | Required | A timestamp showing when the balance was captured (see Handling Dates and Times) |
| `averageMonthlyBalance` | `number` | Required | The average monthly balance of this account |
| `transactions` | `number[]` | Required | A list of transaction records |
| `asset` | [`PrequalificationReportAssetSummary`](../../doc/models/prequalification-report-asset-summary.md) | Required | An asset record for the account |
| `details` | [`AccountDetail`](../../doc/models/account-detail.md) | Required | A details record for the account |
| `totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount` | `number` | Required | The total number of days since the most recent insufficient funds fee for the account |
| `totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount` | `number` | Required | The total number of  insufficient funds fees for the account over six months |

## Example (as JSON)

```json
{
  "id": 1000023996,
  "number": "1111",
  "ownerName": "JOHN DOE",
  "ownerAddress": "123 GAINSVILLE STREET BUFORD, GA 84937",
  "name": "Checking",
  "type": "checking",
  "aggregationStatusCode": 0,
  "balance": 501.24,
  "balanceDate": 1588350276,
  "averageMonthlyBalance": 501.02,
  "transactions": [],
  "asset": {
    "type": "checking",
    "availableBalance": 1000,
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
  "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 0,
  "totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount": 0
}
```

