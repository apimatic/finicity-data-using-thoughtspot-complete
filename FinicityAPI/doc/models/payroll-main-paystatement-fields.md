
# Payroll Main Paystatement Fields

## Structure

`PayrollMainPaystatementFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payDate` | `bigint` | Required | Pay date for a pay period |
| `startDate` | `bigint \| undefined` | Optional | Start date for a pay period |
| `endDate` | `bigint \| undefined` | Optional | End date for a pay period |
| `payPeriodHours` | `number \| undefined` | Optional | The sum total of the number of hours worked each week for a pay period. |
| `grossPayAmount` | `number` | Required | Gross pay amount for a pay period |
| `grossPayAmountYTD` | `number \| undefined` | Optional | YTD gross pay amount at the time of the payment |
| `netPayAmount` | `number` | Required | Net pay amount for a pay period |
| `netPayAmountYTD` | `number \| undefined` | Optional | YTD net pay amount at the time of the payment |
| `payFrequency` | `string` | Required | The pay frequency: <br> * `Daily` <br> * `Weekly` <br> * `Bi-Weekly` <br> * `Bi-Weekly Odd` (Bi-Weekly pay on odd weeks) <br> * `Bi-Weekly Even` (Bi-Weekly pay on even weeks) <br> * `Semi-Monthly` <br> * `Monthly` <br> * `Quarterly` <br>* `Semi-Annual` <br> * `Annual` <br>  * `Every 2.6 wks` <br> * `Every 4 wks` <br> * `Every 5.2 wks` |
| `payType` | `string \| undefined` | Optional | The pay type is `Salary`, `Hourly`, or `Daily`. |

## Example (as JSON)

```json
{
  "payDate": 1596175200,
  "startDate": 1595138400,
  "endDate": 1595656800,
  "payPeriodHours": 40,
  "payFrequency": "Weekly",
  "payType": "Hourly",
  "grossPayAmount": 1888.75,
  "grossPayAmountYTD": 73925,
  "netPayAmount": 1401.95,
  "netPayAmountYTD": 73925
}
```

