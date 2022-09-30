
# Cash Flow Institution

## Structure

`CashFlowInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity institution ID |
| `name` | `string` | Required | Finicity institution name |
| `urlHomeApp` | `string` | Required | The URL of the Financial Institution |
| `accounts` | [`CashFlowAccount[]`](../../doc/models/cash-flow-account.md) | Required | A list of `account` records |

## Example (as JSON)

```json
{
  "id": "102105",
  "name": "FinBank Profiles",
  "urlHomeApp": "http://www.finbank.com",
  "accounts": [
    {
      "id": "6681984",
      "ownerName": "PATRICK & LORRAINE PURCHASER",
      "ownerAddress": "7195 BELMONT ST. PARLIN, NJ 08859",
      "name": "Checking",
      "number": "XX1111",
      "type": "checking",
      "aggregationStatusCode": "0",
      "currentBalance": 100000,
      "availableBalance": 1000,
      "balanceDate": 1614880526,
      "transactions": [
        {
          "id": "100671406523",
          "amount": -81.7,
          "postedDate": 1614859200,
          "description": "TMOBILE*AUTO PAY",
          "normalizedPayee": "T-Mobile",
          "institutionTransactionId": "0000000000",
          "category": "Mobile Phone"
        }
      ],
      "cashFlowBalance": {
        "monthlyCashFlowBalances": [
          {
            "month": 1551423600,
            "minDailyBalance": -65894.54,
            "maxDailyBalance": -62196.98,
            "averageDailyBalance": -64594.87,
            "standardDeviationOfDailyBalance": "1099",
            "numberOfDaysNegativeBalance": "28",
            "numberOfDaysPositiveBalance": "0"
          }
        ],
        "minDailyBalance": 3479.39,
        "maxDailyBalance": 3479.39,
        "twelveMonthAverageDailyBalance": 3479.39,
        "sixMonthAverageDailyBalance": 3479.39,
        "twoMonthAverageDailyBalance": 3479.39,
        "twelveMonthStandardDeviationOfDailyBalance": "20",
        "sixMonthStandardDeviationOfDailyBalance": "20",
        "twoMonthStandardDeviationOfDailyBalance": "20",
        "numberDaysNegativeBalance": "6",
        "numberOfDaysPositiveBalance": "0"
      },
      "cashFlowCredit": {
        "monthlyCashFlowCredits": [
          {
            "month": 1551423600,
            "numberOfCredits": "3",
            "totalCreditsAmount": 5000.29,
            "largestCredit": 2182.34,
            "numberOfCreditsLessTransfers": "3",
            "totalCreditsAmountLessTransfers": 5000.29,
            "averageCreditAmount": 1666.76,
            "estimatedNumberOfLoanDeposits": "0",
            "estimatedLoanDepositAmount": 0
          }
        ],
        "twelveMonthCreditTotal": 1200,
        "twelveMonthCreditTotalLessTransfers": 1000,
        "sixMonthCreditTotal": 750,
        "sixMonthCreditTotalLessTransfers": 500,
        "twoMonthCreditTotal": 150,
        "twoMonthCreditTotalLessTransfers": 100
      },
      "cashFlowDebit": {
        "monthlyCashFlowDebits": [
          {
            "month": 1551423600,
            "numberOfDebits": "12",
            "totalDebitsAmount": -2063.43,
            "largestDebit": -953.73,
            "numberOfDebitsLessTransfers": "12",
            "totalDebitsAmountLessTransfers": -2063.43,
            "averageDebitAmount": -171.95
          }
        ],
        "twelveMonthDebitTotal": 1200,
        "twelveMonthDebitTotalLessTransfers": 1000,
        "sixMonthDebitTotal": 750,
        "sixMonthDebitTotalLessTransfers": 500,
        "twoMonthDebitTotal": 150,
        "twoMonthDebitTotalLessTransfers": 100
      },
      "cashFlowCharacteristic": {
        "monthlyCashFlowCharacteristics": [
          {
            "month": 1551423600,
            "totalCreditsLessTotalDebits": 2936.86,
            "totalCreditsLessTotalDebitsLessTransfers": 2936.86,
            "averageTransactionAmount": 195.79
          }
        ],
        "averageMonthlyNet": 2350,
        "averageMonthlyNetLessTransfers": 1000,
        "twelveMonthTotalNet": 12500,
        "twelveMonthTotalNetLessTransfers": 12400,
        "sixMonthAverageTotalCreditsLessTotalDebits": 55555,
        "sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555,
        "twoMonthAverageTotalCreditsLessTotalDebits": 55555,
        "twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555
      }
    }
  ]
}
```

