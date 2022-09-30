
# VOIE Txverify Report Account

## Structure

`VOIETxverifyReportAccount`

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
| `balanceDate` | `bigint` | Required | A timestamp showing when the balance was captured |
| `averageMonthlyBalance` | `number` | Required | The average monthly balance of this account |
| `transactions` | `string[]` | Required | An array of transactions belonging to the account |
| `details` | [`AccountDetail`](../../doc/models/account-detail.md) | Required | A details record for the account |
| `incomeStream` | [`VOIETxverifyReportIncomeStreamForAccountsInInstitutionsInPayStatements \| undefined`](../../doc/models/voie-txverify-report-income-stream-for-accounts-in-institutions-in-pay-statements.md) | Optional | The direct deposit income streams with a transaction matching to the pay statement. |
| `incomeStreams` | [`VOIETxverifyReportIncomeStreamForAccountsInInstitutionsInPayStatements[]`](../../doc/models/voie-txverify-report-income-stream-for-accounts-in-institutions-in-pay-statements.md) | Required | A list of all identified income stream records in the account. |

## Example (as JSON)

```json
{
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
```

