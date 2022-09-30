
# Consumer Attributes Data Liabilities

## Structure

`ConsumerAttributesDataLiabilities`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyLoanDeposits` | `unknown` | Required | Monthly loan deposits amount by account. |
| `monthlyLoanWitdrawls` | `unknown` | Required | Monthly loan withdrawal amount by account. |
| `monthlyNumberOfLoanDeposits` | `unknown` | Required | Monthly count of the number of loan deposits by account. |
| `monthlyNumberOfLoanWithdrawls` | `unknown` | Required | Monthly amount of the number of loan deposits by account. |

## Example (as JSON)

```json
{
  "monthlyLoanDeposits": {
    "3-2021": 2799.08,
    "4-2021": 2947.63,
    "5-2021": 2863.37
  },
  "monthlyLoanWitdrawls": {
    "3-2021": -150.17,
    "4-2021": -95.03,
    "5-2021": -341.26
  },
  "monthlyNumberOfLoanDeposits": {
    "3-2021": 1,
    "4-2021": 1,
    "5-2021": 1
  },
  "monthlyNumberOfLoanWithdrawls": {
    "3-2021": 1,
    "4-2021": 1,
    "5-2021": 1
  }
}
```

