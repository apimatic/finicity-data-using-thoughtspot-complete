
# Payroll Employee Record

## Structure

`PayrollEmployeeRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Full name of the employee: first, middle (if stated), and last name. |
| `givenName` | `string` | Required | First name of employee |
| `middleName` | `string \| undefined` | Optional | Middle name of employee, if stated |
| `familyName` | `string` | Required | Last name of employee |
| `address` | [`PayrollEmployeeAddress[] \| undefined`](../../doc/models/payroll-employee-address.md) | Optional | Array of addresses |

## Example (as JSON)

```json
{
  "name": "John Doe Smith",
  "givenName": "John",
  "middleName": "Doe",
  "familyName": "Smith",
  "address": [
    {
      "address1": "Address 1",
      "city": "City",
      "state": "TX",
      "zip": "99999"
    }
  ]
}
```

