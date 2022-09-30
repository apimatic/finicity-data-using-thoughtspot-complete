
# Modify Consumer Request

## Structure

`ModifyConsumerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The consumer first name(s) / given name(s) |
| `lastName` | `string` | Required | The consumer last name(s) / surname(s) |
| `address` | `string` | Required | The consumer’s street address |
| `city` | `string` | Required | The consumer’s city |
| `state` | `string` | Required | The consumer’s state |
| `zip` | `string` | Required | The consumer’s ZIP code |
| `phone` | `string` | Required | The consumer’s phone number |
| `ssn` | `string` | Required | The consumer’s 9-digit Social Security number (may include separators: nnn-nn-nnnn) |
| `birthday` | [`Birthday`](../../doc/models/birthday.md) | Required | The consumer birth date |
| `email` | `string` | Required | The consumer’s email address |
| `suffix` | `string \| undefined` | Optional | The consumer suffix |
| `emailAddress` | `string` | Required | The consumer’s email address |

## Example (as JSON)

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "address": "434 W Ascension Way",
  "city": "Murray",
  "state": "UT",
  "zip": "84123",
  "phone": "6786786786",
  "ssn": "111222333",
  "birthday": {
    "year": 1989,
    "month": 8,
    "dayOfMonth": 13
  },
  "email": "finicity@test.com",
  "suffix": "Mr",
  "emailAddress": "finicity@test.com"
}
```

