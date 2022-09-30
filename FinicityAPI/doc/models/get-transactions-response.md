
# Get Transactions Response

**Note**: See the main API page for important details on student loans (account type 402).

## Structure

`GetTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | Total number of records matching search criteria |
| `displaying` | `number` | Required | Number of records in this response |
| `moreAvailable` | `boolean` | Required | true if this response does not contain the last record in the result set |
| `fromDate` | `string` | Required | Value of the fromDate request parameter that generated this response |
| `toDate` | `string` | Required | Value of the toDate request parameter that generated this response |
| `sort` | `string` | Required | Value of the sort request parameter that generated this response |
| `transactions` | [`Transaction[]`](../../doc/models/transaction.md) | Required | - |

## Example (as JSON)

```json
{
  "found": 250,
  "displaying": 3,
  "moreAvailable": true,
  "fromDate": "1588365858",
  "toDate": "1588970681",
  "sort": "desc",
  "transactions": [
    {
      "id": 102122887150,
      "amount": 3678.9,
      "accountId": 1014136057,
      "customerId": 1005061234,
      "status": "active",
      "description": "MAD SCIENCE RESEARCH PR PAYMENT",
      "memo": "PPD ID 098749",
      "postedDate": 1588888169,
      "transactionDate": 1588801769,
      "createdDate": 1588974631,
      "type": "deposit",
      "categorization": {
        "normalizedPayeeName": "Mad Science Research",
        "category": "Paycheck",
        "city": "Murray",
        "state": "UT",
        "postalCode": "84123",
        "country": "USA"
      }
    },
    {
      "id": 102122887178,
      "amount": -59.56,
      "accountId": 1014136057,
      "customerId": 1005061234,
      "status": "active",
      "description": "VERIZON WIRELESS PAYMENTS",
      "memo": "VERIZON WIRELESS PAYMENTS",
      "type": "directDebit",
      "postedDate": 1450852000,
      "createdDate": 1460621294,
      "categorization": {
        "normalizedPayeeName": "Verizon Wireless",
        "category": "Mobile Phone",
        "country": "USA"
      }
    }
  ]
}
```

