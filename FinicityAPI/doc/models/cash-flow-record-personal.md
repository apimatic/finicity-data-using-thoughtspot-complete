
# Cash Flow Record Personal

## Structure

`CashFlowRecordPersonal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity report ID (max length 32 characters)<br>**Constraints**: *Maximum Length*: `32` |
| `gseEnabled` | `boolean` | Required | GSE enabled |
| `portfolioId` | `string` | Required | The Finicity portfolio ID |
| `customerType` | `string` | Required | `active` or `testing` |
| `customerId` | `string` | Required | Finicity customer ID |
| `requestId` | `string` | Required | Finicity's request Id |
| `title` | `string` | Required | “Finicity Cash Flow Report  - Personal” |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters)<br>**Constraints**: *Maximum Length*: `32` |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of requester |
| `type` | `string` | Required | `cfrp` or `cfrb` |
| `status` | `string` | Required | `inProgress` or `success` or `failure` |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `startDate` | `bigint` | Required | The `postedDate` of the earliest transaction analyzed for this report |
| `endDate` | `bigint` | Required | The `postedDate` of the latest transaction analyzed for this report |
| `days` | `string` | Required | Number of days covered by the report |
| `seasoned` | `boolean` | Required | `true` if the report covers more than 365 days. |
| `institutions` | [`CashFlowInstitution[]`](../../doc/models/cash-flow-institution.md) | Required | A list of `institution` records, including information about the individual accounts used in this report. |
| `cashFlowBalanceSummary` | [`CashFlowCashflowBalanceSummary`](../../doc/models/cash-flow-cashflow-balance-summary.md) | Required | A `cashFlowBalanceSummary` record |
| `cashFlowCreditSummary` | [`CashFlowCashFlowCreditSummary`](../../doc/models/cash-flow-cash-flow-credit-summary.md) | Required | A `cashFlowCreditSummary` record |
| `cashFlowDebitSummary` | [`CashFlowCashflowDebitSummary`](../../doc/models/cash-flow-cashflow-debit-summary.md) | Required | A `cashFlowDebitSummary` record |
| `cashFlowCharacteristicsSummary` | [`CashFlowCashFlowCharacteristicsSummary`](../../doc/models/cash-flow-cash-flow-characteristics-summary.md) | Required | A `cashFlowCharacteristicsSummary` record |
| `possibleLoanDeposits` | [`CashFlowPossibleLoanDeposits[]`](../../doc/models/cash-flow-possible-loan-deposits.md) | Required | A `possibleLoanDeposits` record |

## Example (as JSON)

```json
{
  "id": "sd1j45yn37wr-cfrp",
  "gseEnabled": true,
  "portfolioId": "igi5kj6hh58y-1-port",
  "customerType": "testing",
  "customerId": "5555",
  "requestId": "xtw6tjemt6",
  "title": "Finicity Cash Flow Report - Personal",
  "consumerId": "555595ec74c8ec57adf44dadddb6a35",
  "consumerSsn": "1111",
  "requesterName": "Decisioning API Tests",
  "type": "cfrp",
  "status": "success",
  "createdDate": 1575666823,
  "startDate": 1512594823,
  "endDate": 1575666823,
  "days": "730",
  "seasoned": true,
  "institutions": [
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
  ],
  "cashFlowBalanceSummary": {
    "monthlyCashFlowBalanceSummaries": [
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
    "numberOfDaysNegativeBalance": "6",
    "numberOfDaysPositiveBalance": "11"
  },
  "cashFlowCreditSummary": {
    "monthlyCashFlowCreditSummaries": [
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
    "twelveMonthCreditTotal": 1200.0,
    "twelveMonthCreditTotalLessTransfers": 1000.0,
    "sixMonthCreditTotal": 750.0,
    "sixMonthCreditTotalLessTransfers": 500.0,
    "twoMonthCreditTotal": 150.0,
    "twoMonthCreditTotalLessTransfers": 100.0
  },
  "cashFlowDebitSummary": {
    "monthlyCashFlowDebitSummaries": [
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
    "twelveMonthDebitTotal": -1200.0,
    "twelveMonthDebitTotalLessTransfers": -1000.0,
    "sixMonthDebitTotal": -750.0,
    "sixMonthDebitTotalLessTransfers": -500.0,
    "twoMonthDebitTotal": -150.0,
    "twoMonthDebitTotalLessTransfers": -100.0
  },
  "cashFlowCharacteristicsSummary": {
    "monthlyCashFlowCharacteristicSummaries": [
      {
        "month": 1551423600,
        "totalCreditsLessTotalDebits": 2936.86,
        "totalCreditsLessTotalDebitsLessTransfers": 2936.86,
        "averageTransactionAmount": 195.79
      }
    ],
    "averageMonthlyNet": 1250.0,
    "averageMonthlyNetLessTransfers": 1000.0,
    "twelveMonthTotalNet": 12500.0,
    "twelveMonthTotalNetLessTransfers": 12400.0,
    "sixMonthAverageTotalCreditsLessTotalDebits": 55555.0,
    "sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0,
    "twoMonthAverageTotalCreditsLessTotalDebits": 55555.0,
    "twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0
  },
  "possibleLoanDeposits": [
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
          ]
        }
      ]
    }
  ]
}
```

