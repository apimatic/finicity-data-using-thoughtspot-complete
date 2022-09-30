
# Request Constraints Generate VOA Report 2

## Structure

`RequestConstraintsGenerateVOAReport2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIds` | `string \| undefined` | Optional | Specific accountIds to be included in the new report. |
| `reportCustomFields` | [`ReportCustomFields \| undefined`](../../doc/models/report-custom-fields.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |
| `showNsf` | `boolean \| undefined` | Optional | Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. |

## Example (as JSON)

```json
{
  "accountIds": null,
  "reportCustomFields": null,
  "showNsf": null
}
```

