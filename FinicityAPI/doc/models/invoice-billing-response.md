
# Invoice Billing Response

## Structure

`InvoiceBillingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | [`Content[]`](../../doc/models/content.md) | Required | - |
| `pageable` | `string` | Required | - |
| `totalPages` | `number` | Required | - |
| `totalElements` | `number` | Required | - |
| `last` | `boolean` | Required | - |
| `size` | `number` | Required | - |
| `number` | `number` | Required | - |
| `sort` | [`Sort`](../../doc/models/sort.md) | Required | - |
| `numberOfElements` | `number` | Required | - |
| `first` | `boolean` | Required | - |
| `empty` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "content": [
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
    },
    {
      "reseller": null,
      "resellerProvider": null,
      "platformProvider": null,
      "customerId": 889079,
      "consumerId": "3569a3ec3315e458e61f3c37ef9a3df4",
      "consumerSsn": "1111",
      "firstName": "BarkFirst",
      "lastName": "BarkLast",
      "lastFourReportId": "7gg5",
      "createdDate": 1560244594,
      "reportType": "history",
      "status": "failure",
      "reportCustomFields": [
        {
          "label": "Loan_ID",
          "value": "asdf123lkj124j59fkfj",
          "shown": false
        }
      ]
    }
  ],
  "pageable": "INSTANCE",
  "totalPages": 1,
  "totalElements": 2,
  "last": true,
  "size": 0,
  "number": 0,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "numberOfElements": 2,
  "first": true,
  "empty": false
}
```

