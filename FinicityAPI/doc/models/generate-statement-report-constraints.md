
# Generate Statement Report Constraints

## Structure

`GenerateStatementReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReportData` | [`StatementReportData`](../../doc/models/statement-report-data.md) | Required | - |
| `reportCustomFields` | [`ReportCustomFields[] \| undefined`](../../doc/models/report-custom-fields.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint. This is optional. |

## Example (as JSON)

```json
{
  "statementReportData": {
    "accountId": 1000076901,
    "index": 1
  },
  "reportCustomFields": [
    {
      "label": "loanID",
      "value": "123456",
      "shown": true
    }
  ]
}
```

