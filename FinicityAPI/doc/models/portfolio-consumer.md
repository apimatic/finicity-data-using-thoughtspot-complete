
# Portfolio Consumer

## Structure

`PortfolioConsumer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity ID of the consumer (UUID with max length 32 characters) |
| `firstName` | `string` | Required | The consumer first name(s) / given name(s) |
| `lastName` | `string` | Required | The consumer last name(s) / surname(s) |
| `customerId` | `bigint` | Required | Finicity's ID of the customer |
| `ssn` | `string` | Required | The consumer’s 9-digit Social Security number (may include separators: nnn-nn-nnnn) |
| `birthday` | [`Birthday`](../../doc/models/birthday.md) | Required | The consumer birth date |
| `suffix` | `string \| undefined` | Optional | The consumer suffix |

## Example (as JSON)

```json
{
  "id": "1973f901305e2ab3ba8840f411f6b057",
  "firstName": "John",
  "lastName": "Smith",
  "customerId": 1000005540,
  "ssn": "XXX-XX-2333",
  "birthday": {
    "year": 1989,
    "month": 8,
    "dayOfMonth": 13
  },
  "suffix": "Mr"
}
```

