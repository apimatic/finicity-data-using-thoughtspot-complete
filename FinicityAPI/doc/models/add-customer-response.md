
# Add Customer Response

The Response Structure For The Add Customer Endpoint and Add Testing Customer Endpoint

## Structure

`AddCustomerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The ID Of The New Customer Record |
| `username` | `string` | Required | The Username Value Of The New Customer Record |
| `createdDate` | `string` | Required | A Timestamp Of When The Customer Was Added (see Handling Dates And Times) |

## Example (as JSON)

```json
{
  "id": 1005061234,
  "username": "customerusername1",
  "createdDate": "1588305190"
}
```

