
# Txpush Subscription Request

## Structure

`TxpushSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `callbackUrl` | `string` | Required | The TxPUSH Listener URL to receive TxPUSH notifications (must use https protocol for any real-world account) |

## Example (as JSON)

```json
{
  "callbackUrl": "https://www.mydomain.com/txpush/listener"
}
```

