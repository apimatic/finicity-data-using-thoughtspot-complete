
# Subscription Record

TxPush subscription details

## Structure

`SubscriptionRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | Unique subscription identifier |
| `accountId` | `bigint` | Required | The Finicity account Id for the subscription |
| `type` | `string` | Required | Event subscription type. account or transaction |
| `callbackUrl` | `string` | Required | The url for the events |
| `signingKey` | `string` | Required | Signing key for events |

## Example (as JSON)

```json
{
  "id": 12345678,
  "accountId": 1014136057,
  "type": "account",
  "callbackUrl": "https://www.mydomain.com/txpush/listener",
  "signingKey": "zg4U0v1IvTzFEHIXzJMxPHnfUwWZAMVpXrUuNuL9IvZI0QzkDdwp39IAKuNOFxOVqCOgHLMS1Zpe4ZL40NX83aJkqI6v0Ez5B7BLBtvr7Ag11kPH3uG1taTeOV0CTyI4LOg7ohSHn0DqaRu2aBq26KI90nYe0CecTCzzhu4yMXL43JV8YfydAexNdkzfg8tY44MlhBPUh2neHW2EFTT2ja4s4Ul10JgID03un8WBSrIm2adHw3QYJB4jk4k1e"
}
```

