
# Customer

The finicity customer record

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | Finicity’s ID for the customer |
| `username` | `string` | Required | The username associated with the customer |
| `firstName` | `string` | Required | The first name associated with the customer |
| `lastName` | `string` | Required | The last name associated with the customer |
| `type` | [`CustomerTypeEnum`](../../doc/models/customer-type-enum.md) | Required | active or testing |
| `createdDate` | `string` | Required | The date the customer was created |

## Example (as JSON)

```json
{
  "id": 1005061234,
  "username": "customerusername1",
  "firstName": "John",
  "lastName": "Smith",
  "type": "active",
  "createdDate": "1588305190"
}
```

