
# Cash Flow Cash Flow Credit

## Structure

`CashFlowCashFlowCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowCredits` | [`CashFlowMonthlyCashFlowCredits[]`](../../doc/models/cash-flow-monthly-cash-flow-credits.md) | Required | List of attributes for each month |
| `twelveMonthCreditTotal` | `number` | Required | Sum of all credit transactions for each month by account |
| `twelveMonthCreditTotalLessTransfers` | `number` | Required | Sum of all monthly credit transactions without transfers for the account |
| `sixMonthCreditTotal` | `number` | Required | Sum of six month credit transactions |
| `sixMonthCreditTotalLessTransfers` | `number` | Required | Sum of six month credit transactions without transfers |
| `twoMonthCreditTotal` | `number` | Required | Sum of two month credit transactions |
| `twoMonthCreditTotalLessTransfers` | `number` | Required | Sum of two month credit transactions without transfers |

## Example (as JSON)

```json
{
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
}
```

