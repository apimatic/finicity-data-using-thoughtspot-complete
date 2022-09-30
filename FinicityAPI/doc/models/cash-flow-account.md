
# Cash Flow Account

## Structure

`CashFlowAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity account ID |
| `ownerName` | `string` | Required | The name(s) of the account owner(s), retrieved from the institution. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner, retrieved from the institution. |
| `name` | `string` | Required | The account name from the institution |
| `number` | `string` | Required | The account number from the institution (obfuscated) |
| `type` | `string` | Required | CFR: `ALL` (`checking` / `savings` / `loan` / `mortgage` / `credit card` / `CD` / `MM` / `investment`…) |
| `aggregationStatusCode` | `string` | Required | The status of the most recent aggregation attempt for this account (non-zero means the account was not accessed successfully for this report, and additional fields for this account may not be reliable) |
| `currentBalance` | `number` | Required | The cleared balance of the account as-of `balanceDate` |
| `availableBalance` | `number` | Required | Available balance |
| `balanceDate` | `bigint` | Required | A timestamp showing when the `balance` was captured |
| `transactions` | [`CashFlowTransactions[]`](../../doc/models/cash-flow-transactions.md) | Required | a `transactions` record |
| `cashFlowBalance` | [`CashFlowCashflowBalance`](../../doc/models/cash-flow-cashflow-balance.md) | Required | A `cashFlowBalance` record |
| `cashFlowCredit` | [`CashFlowCashFlowCredit`](../../doc/models/cash-flow-cash-flow-credit.md) | Required | A `cashFlowCredit` record |
| `cashFlowDebit` | [`CashFlowCashflowDebit`](../../doc/models/cash-flow-cashflow-debit.md) | Required | A `cashFlowDebit` record |
| `cashFlowCharacteristic` | [`CashFlowCashflowCharacteristic`](../../doc/models/cash-flow-cashflow-characteristic.md) | Required | A `cashFlowCharacteristic` record |

## Example (as JSON)

```json
{
  "id": "6681984",
  "ownerName": "PATRICK & LORRAINE PURCHASER",
  "ownerAddress": "7195 BELMONT ST. PARLIN, NJ 08859",
  "name": "Checking",
  "number": "XX1111",
  "type": "checking",
  "aggregationStatusCode": "0",
  "currentBalance": 100000.0,
  "availableBalance": 1000.0,
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
    "twelveMonthCreditTotal": 1200.0,
    "twelveMonthCreditTotalLessTransfers": 1000.0,
    "sixMonthCreditTotal": 750.0,
    "sixMonthCreditTotalLessTransfers": 500.0,
    "twoMonthCreditTotal": 150.0,
    "twoMonthCreditTotalLessTransfers": 100.0
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
    "twelveMonthDebitTotal": 1200.0,
    "twelveMonthDebitTotalLessTransfers": 1000.0,
    "sixMonthDebitTotal": 750.0,
    "sixMonthDebitTotalLessTransfers": 500.0,
    "twoMonthDebitTotal": 150.0,
    "twoMonthDebitTotalLessTransfers": 100.0
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
    "averageMonthlyNet": 2350.0,
    "averageMonthlyNetLessTransfers": 1000.0,
    "twelveMonthTotalNet": 12500.0,
    "twelveMonthTotalNetLessTransfers": 12400.0,
    "sixMonthAverageTotalCreditsLessTotalDebits": 55555.0,
    "sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0,
    "twoMonthAverageTotalCreditsLessTotalDebits": 55555.0,
    "twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers": 55555.0
  }
}
```

