
# Get Customers Response

Response For Get Customers Endpoint

## Structure

`GetCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | Total number of records matching search criteria |
| `displaying` | `number` | Required | Number of records in this response |
| `moreAvailable` | `boolean` | Required | true if this response does not contain the last record in the result set |
| `customers` | [`Customer[]`](../../doc/models/customer.md) | Required | List of customer records |

## Example (as JSON)

```json
{
  "found": 7,
  "displaying": 2,
  "moreAvailable": true,
  "customers": [
    {
      "id": 1005061234,
      "username": "customerusername1",
      "firstName": "John",
      "lastName": "Smith",
      "type": "active",
      "createdDate": "1588305190"
    },
    {
      "id": 1005061235,
      "username": "customerusername2",
      "firstName": "Sarah",
      "lastName": "Smith",
      "type": "active",
      "createdDate": "1588305190"
    }
  ]
}
```

