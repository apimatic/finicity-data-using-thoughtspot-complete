
# Cash Flow Cash Flow Credit Summary

## Structure

`CashFlowCashFlowCreditSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyCashFlowCreditSummaries` | [`CashFlowMonthlyCashFlowCreditSummaries[]`](../../doc/models/cash-flow-monthly-cash-flow-credit-summaries.md) | Required | List of attributes for each month |
| `twelveMonthCreditTotal` | `number` | Required | Sum of all credit transactions for each month for all accounts |
| `twelveMonthCreditTotalLessTransfers` | `number` | Required | Sum of all monthly credit transactions without transfers for all accounts |
| `sixMonthCreditTotal` | `number` | Required | Six month sum of all credit transactions |
| `sixMonthCreditTotalLessTransfers` | `number` | Required | Six month sum of all monthly credit transactions without transfers for all accounts |
| `twoMonthCreditTotal` | `number` | Required | Two month sum of all credit transactions |
| `twoMonthCreditTotalLessTransfers` | `number` | Required | Two month sum of all monthly credit transactions without transfers for all accounts |

## Example (as JSON)

```json
{
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
}
```

