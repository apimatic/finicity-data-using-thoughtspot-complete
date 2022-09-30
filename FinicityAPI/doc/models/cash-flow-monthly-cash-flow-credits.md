
# Cash Flow Monthly Cash Flow Credits

## Structure

`CashFlowMonthlyCashFlowCredits`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | One instance for each complete calendar month in the report |
| `numberOfCredits` | `string` | Required | Number of credits by month |
| `totalCreditsAmount` | `number` | Required | Total amount of credits by month |
| `largestCredit` | `number` | Required | Largest credit by month |
| `numberOfCreditsLessTransfers` | `string` | Required | Number of credits by month (less transfers) |
| `totalCreditsAmountLessTransfers` | `number` | Required | Total amount of credits by month (less transfers) |
| `averageCreditAmount` | `number` | Required | The average credit amount |
| `estimatedNumberOfLoanDeposits` | `string` | Required | The estimated number of loan deposits |
| `estimatedLoanDepositAmount` | `number` | Required | The estimated loan deposit amount |

## Example (as JSON)

```json
{
  "month": 1512111600,
  "numberOfCredits": "3",
  "totalCreditsAmount": 5000.0,
  "largestCredit": 2000.0,
  "numberOfCreditsLessTransfers": "2",
  "totalCreditsAmountLessTransfers": 4000.0,
  "averageCreditAmount": 500.0,
  "estimatedNumberOfLoanDeposits": "0",
  "estimatedLoanDepositAmount": 0.0
}
```

