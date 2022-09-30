
# Report Custom Fields

## Structure

`ReportCustomFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `label` | `string` | Required | The label for the custom field |
| `value` | `string` | Required | The value of the custom field |
| `shown` | `boolean` | Required | Indicates whether the field should be shown in the consumer version of the report |

## Example (as JSON)

```json
{
  "label": "loanID",
  "value": "123456",
  "shown": true
}
```

