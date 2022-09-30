
# ACH Details

The routing and account number information to initiate ACH transfers

## Structure

`ACHDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string` | Required | The routing number of the financial institution for this specific customers account |
| `realAccountNumber` | `string` | Required | The account number for initiating ACH transfers for this account |

## Example (as JSON)

```json
{
  "routingNumber": "123456789",
  "realAccountNumber": "002345678901"
}
```

