
# VOIE Txverify Report Pay Statements Institution

## Structure

`VOIETxverifyReportPayStatementsInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`VOIETxverifyReportAccount[]`](../../doc/models/voie-txverify-report-account.md) | Required | An array of accounts |

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
    "availableBalance": 123.45,
    "aggregationStatusCode": 0,
    "balance": 123.45,
    "balanceDate": 1588350276,
    "averageMonthlyBalance": 301.45,
    "transactions": [],
    "details": {
      "interestMarginBalance": -50000,
      "availableCashBalance": 1500,
      "vestedBalance": 300000,
      "currentLoanBalance": 0,
      "availableBalanceAmount": 2000
    },
    "incomeStream": {
      "id": "dens28i3vsch-voitxverify2",
      "name": "none",
      "status": "ACTIVE",
      "confidence": 70,
      "cadence": {
        "startDate": 1577986990,
        "stopDate": 1587986990,
        "days": 180
      },
      "netAnnual": 110475.7,
      "projectedNetAnnual": 0,
      "estimatedGrossAnnual": 0,
      "projectedGrossAnnual": 151609,
      "incomeStreamMonths": 24,
      "averageMonthlyIncomeNet": 9206.31,
      "transactions": [
        {
          "id": 100000527471,
          "amount": 1802.22,
          "postedDate": 1559241000,
          "description": "FINICITY INC PAYROLL",
          "memo": "Finicity amount credit",
          "institutionTransactionId": "100000000",
          "category": "Paycheck",
          "payStatementMatchTypes": [
            "DATE",
            "NET_AMOUNT",
            "DIRECT_DEPOSIT_AMOUNT",
            "EMPLOYER_NAME",
            "INCOME_STREAM_PAYCHECK"
          ]
        }
      ]
    },
    "incomeStreams": [
      {
        "id": "dens28i3vsch-voitxverify2",
        "name": "none",
        "status": "ACTIVE",
        "confidence": 70,
        "cadence": {
          "startDate": 1577986990,
          "stopDate": 1587986990,
          "days": 180
        },
        "netAnnual": 110475.7,
        "projectedNetAnnual": 0,
        "estimatedGrossAnnual": 0,
        "projectedGrossAnnual": 151609,
        "incomeStreamMonths": 24,
        "averageMonthlyIncomeNet": 9206.31,
        "transactions": [
          {
            "id": 100000527471,
            "amount": 1802.22,
            "postedDate": 1559241000,
            "description": "FINICITY INC PAYROLL",
            "memo": "Finicity amount credit",
            "institutionTransactionId": "100000000",
            "category": "Paycheck",
            "payStatementMatchTypes": [
              "DATE",
              "NET_AMOUNT",
              "DIRECT_DEPOSIT_AMOUNT",
              "EMPLOYER_NAME",
              "INCOME_STREAM_PAYCHECK"
            ]
          }
        ]
      }
    ]
  }
}
```

