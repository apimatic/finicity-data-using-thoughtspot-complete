
# Payroll Annual Income Record

## Structure

`PayrollAnnualIncomeRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `year` | `string` | Required | The year for the amounts given in the YTD totals for an employer |
| `grossPayAmountYTD` | `number` | Required | The YTD gross pay amount for the year indicated |
| `netPayAmountYTD` | `number` | Required | The YTD net pay amount for the year indicated |
| `basePayAmountYTD` | `number` | Required | The YTD base pay amount for the year indicated |
| `overtimePayAmountYTD` | `number \| undefined` | Optional | The YTD overtime pay amount for the year indicated |
| `bonusPayAmountYTD` | `number \| undefined` | Optional | The YTD bonus pay amount for the year indicated |
| `otherPayAmountYTD` | `number \| undefined` | Optional | The YTD other pay amount for the year indicated. Other pay is pay not categorized, commission pay, car allowances, and more. |

## Example (as JSON)

```json
{
  "year": "2021",
  "grossPayAmountYTD": 73925.12,
  "netPayAmountYTD": 73925.12,
  "basePayAmountYTD": 73925.12,
  "overtimePayAmountYTD": 100.01
}
```

