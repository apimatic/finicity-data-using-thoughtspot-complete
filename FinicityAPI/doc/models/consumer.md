
# Consumer

## Structure

`Consumer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity ID of the consumer (UUID with max length 32 characters) |
| `firstName` | `string` | Required | The consumer first name(s) / given name(s) |
| `lastName` | `string` | Required | The consumer last name(s) / surname(s) |
| `customerId` | `bigint` | Required | Finicity's ID of the customer |
| `address` | `string` | Required | The consumer’s street address |
| `city` | `string` | Required | The consumer’s city |
| `state` | `string` | Required | The consumer’s state |
| `zip` | `string` | Required | The consumer’s ZIP code |
| `phone` | `string` | Required | The consumer’s phone number |
| `ssn` | `string` | Required | The last 4 digits of the consumer’s Social Security number |
| `birthday` | [`Birthday`](../../doc/models/birthday.md) | Required | The consumer birth date |
| `email` | `string` | Required | The consumer’s email address |
| `createdDate` | `bigint` | Required | Consumer created date |
| `suffix` | `string \| undefined` | Optional | The consumer suffix |

## Example (as JSON)

```json
{
  "id": "1973f901305e2ab3ba8840f411f6b057",
  "firstName": "John",
  "lastName": "Smith",
  "customerId": 1000005540,
  "address": "434 W Ascension Way",
  "city": "Murray",
  "state": "UT",
  "zip": "84123",
  "phone": "6786786786",
  "ssn": "2333",
  "birthday": {
    "year": 1989,
    "month": 8,
    "dayOfMonth": 13
  },
  "email": "finicity@test.com",
  "createdDate": 1588284854,
  "suffix": "Mr"
}
```

