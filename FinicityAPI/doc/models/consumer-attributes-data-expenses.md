
# Consumer Attributes Data Expenses

## Structure

`ConsumerAttributesDataExpenses`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dwellingExpenseTotal` | `string` | Required | Total dwelling expenses for the last 12 months: rent, mortgage, utilities, and insurance. |
| `dwellingExpensesByAccount` | `unknown` | Required | Total dwelling expenses by account for the last 12 months: rent, mortgage, utilities, and insurance. |
| `monthlyDwellingExpenseByCustomer` | `unknown` | Required | Monthly dwelling expenses by customer. |
| `monthlyDwellingExpenseByAccount` | `unknown` | Required | Monthly dwelling expenses by account. |
| `monthlyDebitAmountByCustomer` | `unknown` | Required | Total monthly debit amounts by customer. |
| `monthlyExpenseAmountByCustomer` | `unknown` | Required | Total monthly debit amounts, excluding transfers and credit card payments. |

## Example (as JSON)

```json
{
  "dwellingExpenseTotal": "-5856.07",
  "dwellingExpensesByAccount": {
    "5001861693": -5856.07
  },
  "monthlyDwellingExpenseByCustomer": {
    "2021-03-31": -217.37,
    "2021-04-30": -146.25,
    "2021-05-31": -205.86,
    "2021-06-30": -309.84,
    "2021-07-31": -593.07,
    "2021-08-31": -202.1,
    "2021-09-30": -243.55,
    "2021-10-31": -136.96,
    "2021-11-30": -145.37,
    "2021-12-31": -261.35,
    "2021-01-31": -172.99,
    "2021-02-28": -176.96
  },
  "monthlyDwellingExpenseByAccount": {
    "5001861693": {
      "2021-03-31": -217.37,
      "2021-04-30": -146.25,
      "2021-05-31": -205.86,
      "2021-06-30": -309.84,
      "2021-07-31": -593.07,
      "2021-08-31": -202.1,
      "2021-09-30": -243.55,
      "2021-10-31": -136.96,
      "2021-11-30": -145.37,
      "2021-12-31": -261.35,
      "2021-01-31": -172.99,
      "2021-02-28": -176.96
    }
  },
  "monthlyDebitAmountByCustomer": {
    "2021-03-31": -7259.58,
    "2021-04-30": -15368.09,
    "2021-05-31": -11937.66,
    "2021-06-30": -12704.43,
    "2021-07-31": -9089.55,
    "2021-08-31": -4099.97,
    "2021-09-30": -19627.13,
    "2021-10-31": -9927.53,
    "2021-11-30": -7694.94,
    "2021-12-31": -37310.54,
    "2021-01-31": -25129.31,
    "2021-02-28": -9548.28
  },
  "monthlyExpenseAmountByCustomer": {
    "2021-03-31": -7259.58,
    "2021-04-30": -15368.09,
    "2021-05-31": -11937.66,
    "2021-06-30": -12704.43,
    "2021-07-31": -9089.55,
    "2021-08-31": -4099.97,
    "2021-09-30": -19627.13,
    "2021-10-31": -9927.53,
    "2021-11-30": -7694.94,
    "2021-12-31": -37310.54,
    "2021-01-31": -25129.31,
    "2021-02-28": -9548.28
  }
}
```

