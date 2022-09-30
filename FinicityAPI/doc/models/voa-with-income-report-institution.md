
# VOA With Income Report Institution

## Structure

`VOAWithIncomeReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`VOAWithIncomeReportAccount[]`](../../doc/models/voa-with-income-report-account.md) | Required | An array of accounts |

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
        "category": "Paycheck"
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
    "incomeStreams": {
      "id": "dens28i3vsch-voah",
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
          "normalizedPayee": "Finicity",
          "institutionTransactionId": "100000000",
          "category": "Paycheck"
        }
      ]
    },
    "totNumberInsufficientFundsFeeDebitTxAccount": 0,
    "totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount": 0,
    "totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount": 0,
    "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 120
  }
}
```

