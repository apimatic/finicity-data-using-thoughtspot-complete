
# VOIE Txverify Pay Statement

## Structure

`VOIETxverifyPayStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPeriod` | `string` | Required | The pay period of the pay statement. |
| `billable` | `boolean` | Required | This will display true if the pay statement is billable. If a pay statement has been digitized previously, this will display as false as it will not be billable. |
| `assetId` | `string` | Required | The asset ID of the stored pay statement |
| `payDate` | `bigint` | Required | The listed pay date for the pay statement. |
| `startDate` | `bigint` | Required | The beginning of the pay period. |
| `endDate` | `bigint` | Required | The end of the pay period. |
| `netPayCurrent` | `number` | Required | The total pay after deductions for the employee for the current pay period. |
| `netPayYTD` | `number` | Required | The total accumulation of pay after deductions for the employee for the current pay year. |
| `grossPayCurrent` | `number` | Required | The total pay before deductions for the employee for the current pay period. |
| `grossPayYTD` | `number` | Required | The total accumulation of pay before deductions for the employee for the current pay year. |
| `payrollProvider` | `string \| undefined` | Optional | The payroll provider extracted from the pay statement. |
| `matchType` | [`PayStatementMatchTypesEnum`](../../doc/models/pay-statement-match-types-enum.md) | Required | This denotes the match type associated with the pay statement. |
| `employer` | [`Employer`](../../doc/models/employer.md) | Required | Information pertaining to the employer |
| `employee` | [`Employee`](../../doc/models/employee.md) | Required | Information pertaining to the employee |
| `payStat` | [`PayStat[]`](../../doc/models/pay-stat.md) | Required | Information pertaining to the earnings on the pay statement |
| `directDeposits` | [`DirectDeposit[]`](../../doc/models/direct-deposit.md) | Required | Information pertaining to the direct deposits on the pay statement |
| `monthlyIncome` | [`PaystubMonthlyIncomeRecord`](../../doc/models/paystub-monthly-income-record.md) | Required | The Finicity estimated monthly income based on the pay cadence and the earnings categories from the paystub, as available. |
| `institutions` | [`VOIETxverifyReportPayStatementsInstitution[]`](../../doc/models/voie-txverify-report-pay-statements-institution.md) | Required | Details of the financial institution accounts and income streams with matching transactions to the pay statement. |
| `errorCode` | `number \| undefined` | Optional | Error code for the asset |
| `errorMessage` | `string \| undefined` | Optional | Error message for the asset |

## Example (as JSON)

```json
{
  "payPeriod": "LastPayPeriod",
  "billable": true,
  "assetId": "6f8fb0a0-e882-4f57-b672-cf53f1397581",
  "payDate": 1559241000,
  "startDate": 1557513000,
  "endDate": 1558722600,
  "netPayCurrent": 1802.22,
  "netPayYTD": 36000.0,
  "grossPayCurrent": 24200.0,
  "grossPayYTD": 72600.0,
  "matchType": "NET_PAY_MATCH",
  "employer": {
    "name": "Rocket Surgery"
  },
  "employee": {
    "name": "Patrick Purchaser"
  },
  "payStat": {
    "name": "regular 1",
    "type": "regular",
    "description": "regular income",
    "amountCurrent": 6000.0,
    "amountYTD": 18000.0
  },
  "directDeposits": [
    {
      "fiName": "America First",
      "accountType": "Checking",
      "amountCurrent": 1744.61,
      "description": "Payroll"
    }
  ],
  "monthlyIncome": {
    "estimatedMonthlyBasePay": 2000,
    "estimatedMonthlyOvertimePay": 50,
    "estimatedMonthlyBonusPay": 20,
    "estimatedMonthlyCommissionPay": 50
  },
  "institutions": {
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
}
```

