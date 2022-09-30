
# Payroll VOE Report Constraints

## Structure

`PayrollVOEReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payrollData` | [`PayrollVOEData`](../../doc/models/payroll-voe-data.md) | Required | - |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |

## Example (as JSON)

```json
{
  "payrollData": {
    "payrollDataRetrievalId": "hahvhe2k0000",
    "employerNames": [
      "ACME INC"
    ],
    "reportId": "abcdefghijkl-voiepayroll"
  }
}
```

