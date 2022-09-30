
# Pay Statement Constraints

## Structure

`PayStatementConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paystatementReport` | [`PayStatementReportData`](../../doc/models/pay-statement-report-data.md) | Required | Data to be included within the pay statement report |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |

## Example (as JSON)

```json
{
  "paystatementReport": {
    "assetIds": [
      "6f8fb0a0-e882-4f57-b672-cf53f1397581"
    ],
    "extractEarnings": true,
    "extractDeductions": false,
    "extractDirectDeposit": true
  },
  "reportCustomFields": [
    {
      "label": "loanID",
      "value": "12345",
      "shown": true
    },
    {
      "label": "trackingID",
      "value": "5555",
      "shown": true
    },
    {
      "label": "loanType",
      "value": "car",
      "shown": false
    },
    {
      "label": "vendorID",
      "value": "1613aa23",
      "shown": true
    },
    {
      "label": "vendorName",
      "value": "PSC Finance",
      "shown": false
    }
  ]
}
```

