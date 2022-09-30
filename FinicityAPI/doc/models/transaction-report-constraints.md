
# Transaction Report Constraints

## Structure

`TransactionReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIds` | `string[] \| undefined` | Optional | Specific accountIds to be included in the new report. |
| `fromDate` | `bigint \| undefined` | Optional | The fromDate parameter is an Epoch Timestamp (in seconds), such as “1494449017”.  Without this parameter, the report defaults to 6 months if available. Example: ?fromDate={fromDate} If included, the epoch timestamp should be 10 digits long and be within two years of the present day. Extending the epoch timestamp beyond 10 digits will default back to six months of data.  This query is optional |
| `toDate` | `bigint \| undefined` | Optional | The ending timestamp for the date range. The value must be greater than fromDate. See Handling Dates and Times. |
| `includePending` | `boolean \| undefined` | Optional | True: Include pending transactions in the report. False: Set by default. |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |

## Example (as JSON)

```json
{
  "accountIds": [
    "1000075473"
  ],
  "fromDate": 1578952809,
  "toDate": 1594677609,
  "includePending": true,
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

