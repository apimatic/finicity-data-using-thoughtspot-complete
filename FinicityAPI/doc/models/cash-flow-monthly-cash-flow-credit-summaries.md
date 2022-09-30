
# Cash Flow Monthly Cash Flow Credit Summaries

## Structure

`CashFlowMonthlyCashFlowCreditSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | One instance for each complete calendar month in the report |
| `numberOfCredits` | `string` | Required | Number of credits by month across all accounts |
| `totalCreditsAmount` | `number` | Required | Total amount of credits by month across all accounts |
| `largestCredit` | `number` | Required | Largest credit by month across all accounts |
| `numberOfCreditsLessTransfers` | `string` | Required | Number of credits by month (less transfers) across all accounts |
| `totalCreditsAmountLessTransfers` | `number` | Required | Total amount of credits by month (less transfers) across all accounts |
| `averageCreditAmount` | `number` | Required | The average credit amount |
| `estimatedNumberOfLoanDeposits` | `string` | Required | The estimated number of loan deposits by month |
| `estimatedLoanDepositAmount` | `number` | Required | The estimated loan deposit amount by month |

## Example (as JSON)

```json
{
  "month": 1512111600,
  "numberOfCredits": "57",
  "totalCreditsAmount": 3479.39,
  "largestCredit": 3000.49,
  "numberOfCreditsLessTransfers": "5",
  "totalCreditsAmountLessTransfers": 25.46,
  "averageCreditAmount": 500.0,
  "estimatedNumberOfLoanDeposits": "0",
  "estimatedLoanDepositAmount": 0.0
}
```

