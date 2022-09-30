
# Report Institution

## Structure

`ReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`ReportAccount[]`](../../doc/models/report-account.md) | Required | An array of accounts |

## Example (as JSON)

```json
{
  "id": 101732,
  "name": "FinBank",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "accounts": [
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
  ]
}
```

