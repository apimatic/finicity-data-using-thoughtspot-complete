
# Payroll VOE Income Record

## Structure

`PayrollVOEIncomeRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payFrequency` | `string` | Required | The current pay frequency: <br> * `Daily` <br> * `Weekly` <br> * `Bi-Weekly` <br> * `Bi-Weekly Odd` (Bi-Weekly pay on odd weeks) <br> * `Bi-Weekly Even` (Bi-Weekly pay on even weeks) <br> * `Semi-Monthly` <br> * `Monthly` <br> * `Quarterly` <br>* `Semi-Annual` <br> * `Annual` <br>  * `Every 2.6 wks` <br> * `Every 4 wks` <br> * `Every 5.2 wks` |

## Example (as JSON)

```json
{
  "payFrequency": "Weekly"
}
```

