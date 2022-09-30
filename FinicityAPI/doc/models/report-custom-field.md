
# Report Custom Field

## Structure

`ReportCustomField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `label` | `string \| undefined` | Optional | The name of the custom field |
| `value` | `string \| undefined` | Optional | The value of the custom field |
| `shown` | `boolean \| undefined` | Optional | The shown variable designates whether the custom field will display on the PDF report. When shown is true, the custom field will show on the PDF. |

## Example (as JSON)

```json
{
  "label": "loanID",
  "value": "12345",
  "shown": true
}
```

