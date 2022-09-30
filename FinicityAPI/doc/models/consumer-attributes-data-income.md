
# Consumer Attributes Data Income

## Structure

`ConsumerAttributesDataIncome`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `netAnnualIncome` | `number` | Required | Net annual of all income by customer for the last 12 months. |
| `netAnnualIncomeByAccount` | `unknown` | Required | Net annual of income by account for the last 12 months. |
| `monthlyNetIncome` | `unknown` | Required | Net monthly income by customer for the last 12 months. |
| `monthlyNetIncomeByAccount` | `unknown` | Required | Net monthly income by account for the last 12 months. |

## Example (as JSON)

```json
{
  "netAnnualIncome": 68068.25,
  "netAnnualIncomeByAccount": {
    "5001861692": 229.28,
    "5001861693": 67838.97
  },
  "monthlyNetIncome": {
    "2021-03-31": 2925.73,
    "2021-04-30": 2562.52,
    "2021-05-31": 2562.96,
    "2021-06-30": 2620.28,
    "2021-07-31": 2770.59,
    "2021-08-31": 2736.4,
    "2021-09-30": 2629.26,
    "2021-10-31": 2836.89,
    "2021-11-30": 1450.15,
    "2021-12-31": 1560.06,
    "2022-01-31": 3897.18,
    "2022-02-28": 2824.58
  },
  "monthlyNetIncomeByAccount": {
    "5001861692": {
      "2021-06-30": 57.32,
      "2021-07-31": 57.32,
      "2021-08-31": 57.32,
      "2021-11-30": 57.32
    },
    "5001861693": {
      "2021-03-31": 2925.73,
      "2021-04-30": 2562.52,
      "2021-05-31": 2562.96,
      "2021-06-30": 2620.28,
      "2021-07-31": 2770.59,
      "2021-08-31": 2736.4,
      "2021-09-30": 2629.26,
      "2021-10-31": 2836.89,
      "2021-11-30": 1450.15,
      "2021-12-31": 1560.06,
      "2022-01-31": 3897.18,
      "2022-02-28": 2824.58
    }
  }
}
```

