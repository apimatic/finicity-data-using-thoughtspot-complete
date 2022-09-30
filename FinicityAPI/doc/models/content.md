
# Content

## Structure

`Content`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reseller` | `string \| null` | Required | - |
| `resellerProvider` | `string \| null` | Required | - |
| `platformProvider` | `string \| null` | Required | - |
| `customerId` | `number` | Required | - |
| `consumerId` | `string` | Required | - |
| `consumerSsn` | `string` | Required | - |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `lastFourReportId` | `string` | Required | - |
| `createdDate` | `number` | Required | - |
| `reportType` | `string` | Required | - |
| `reportCustomFields` | [`ReportCustomField1[]`](../../doc/models/report-custom-field-1.md) | Required | - |
| `status` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "reseller": "resellerName",
  "resellerProvider": "resellerProvider",
  "platformProvider": "platformProvider",
  "customerId": 889079,
  "consumerId": "3569a3ec3315e458e61f3c37ef9a3df4",
  "consumerSsn": "1111",
  "firstName": "BarkFirst",
  "lastName": "BarkLast",
  "lastFourReportId": "twxe",
  "createdDate": 1560244594,
  "reportType": "voieTxVerify",
  "reportCustomFields": [
    {
      "label": "Loan_ID",
      "value": "asdf123lkj124j59fkfj",
      "shown": false
    },
    {
      "label": "Branch_ID",
      "value": "asdf123lkj124j59fkfj",
      "shown": false
    },
    {
      "label": "trackingNumber",
      "value": "asdf123lkj124j59fkfj",
      "shown": false
    },
    {
      "label": "LoanType",
      "value": "asdf123lkj124j59fkfj",
      "shown": false
    }
  ]
}
```

