
# Payroll Report Constraints

## Structure

`PayrollReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payrollData` | [`PayrollData`](../../doc/models/payroll-data.md) | Required | - |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |
| `payStatementsFromDate` | `bigint \| undefined` | Optional | Limits the pay statement history in the VOIE – Paryroll report by entering a pay statement history start date. <br> <br> Pay statements are included if the `payDate` of the statement is equal to or greater than the start date. |

## Example (as JSON)

```json
{
  "payrollData": {
    "ssn": "999990000",
    "dob": "315576000",
    "reportId": "abcdefghijkl-voiepayroll"
  },
  "reportCustomFields": [
    {
      "label": "loanID",
      "value": "12345",
      "shown": true
    }
  ],
  "payStatementsFromDate": 1580558400
}
```

