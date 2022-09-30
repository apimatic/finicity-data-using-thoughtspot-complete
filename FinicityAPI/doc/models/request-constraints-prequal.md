
# Request Constraints Prequal

## Structure

`RequestConstraintsPrequal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIds` | `string \| undefined` | Optional | Specific accountIds to be included in the new report. |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. |
| `showNsf` | `boolean \| undefined` | Optional | Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. <br> <br>  **Data included**: <br> <br>  * Account  <br> <br>  * Total number of NSF funds  <br> <br>  * Days since the most recent NFS funds fee |
| `fromDate` | `bigint \| undefined` | Optional | The fromDate parameter is an Epoch Timestamp (in seconds), such as '1494449017'. Without this parameter, the report defaults to 61 days if available. Example: ?fromDate={fromDate}. If included, the epoch timestamp should be 10 digits long and be within twelve months of the present day. Extending the epoch timestamp beyond 10 digits will default back to twelve months of data. This query is optional. fromDate can also be passed as a query. |

## Example (as JSON)

```json
{
  "accountIds": "1000535275",
  "incomeStreamConfidenceMinimum": 50,
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
  ],
  "showNsf": false,
  "fromDate": 1580558400
}
```

