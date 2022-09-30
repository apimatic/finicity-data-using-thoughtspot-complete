
# Prequalification Report Institution

## Structure

`PrequalificationReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`PrequalificationReportAccount[]`](../../doc/models/prequalification-report-account.md) | Required | An array of accounts |

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
}
```

