
# Customer With Application Data

The finicity customer record

## Structure

`CustomerWithApplicationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity’s ID for the customer |
| `username` | `string` | Required | The username associated with the customer |
| `firstName` | `string` | Required | The first name associated with the customer |
| `lastName` | `string` | Required | The last name associated with the customer |
| `type` | [`CustomerTypeEnum`](../../doc/models/customer-type-enum.md) | Required | active or testing |
| `createdDate` | `string` | Required | The date the customer was created |
| `applicationId` | `string` | Required | The application id of the application assigned to the customer |
| `applicationName` | `string` | Required | The application name of the application assigned to the customer |

## Example (as JSON)

```json
{
  "id": "1005061234",
  "username": "customerusername1",
  "firstName": "John",
  "lastName": "Smith",
  "type": "active",
  "createdDate": "1588305190",
  "applicationId": "123456789",
  "applicationName": "Awesome Budget App"
}
```

