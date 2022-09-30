
# Store Pay Statement Request

## Structure

`StorePayStatementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `label` | `string` | Required | The label to be associated with the pay statement: <br> * `lastPayPeriod` This label will allow the paystub to go through data extraction. This is the default label that should be used for our VOIE - Paystub products. <br> * `lastPayPeriodMinusOne` The second most recent pay statement. <br> * `lastPayPeriodMinusTwo` The third most recent pay statement. <br> * `previousYearLastPayPeriod`  Last pay statement of the previous calendar year. <br> * `previousYear2LastPayPeriod`  Last pay statement of the calendar year 2 years prior. <br> * `earliestPayPeriod`  The earliest pay statement. |
| `statement` | `string` | Required | The base 64 encoded value for the pay statement. Finicity supported file types are .pdf, .jpg, or .png. |

## Example (as JSON)

```json
{
  "label": "lastPayPeriod",
  "statement": "base64"
}
```

