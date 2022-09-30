
# VOA Report Institution

## Structure

`VOAReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`VOAReportAccount[]`](../../doc/models/voa-report-account.md) | Required | An array of accounts |

## Example (as JSON)

```json
{
  "id": 101732,
  "name": "FinBank",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "accounts": {
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
}
```

