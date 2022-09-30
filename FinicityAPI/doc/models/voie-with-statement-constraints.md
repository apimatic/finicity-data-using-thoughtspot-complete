
# VOIE With Statement Constraints

The request details from the report generation that were used to generate the report

## Structure

`VOIEWithStatementConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `voieWithStatementData` | [`VOIEWithStatementData`](../../doc/models/voie-with-statement-data.md) | Required | The asset Ids (generated using the Store Customer Pay Statment API) for the paystubs included in the report, and other report optional report constraints. |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |

## Example (as JSON)

```json
{
  "voieWithStatementData": {
    "assetIds": [
      "d50ed92f-543b-431c-8286-c8b8f6556679"
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
    }
  ]
}
```

