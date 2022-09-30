
# App Registration Response

## Structure

`AppRegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preAppId` | `bigint` | Required | An identifier to track the application registration request |
| `status` | `string` | Required | The status of the app registration request. When submitted starts as P for pending. |

## Example (as JSON)

```json
{
  "preAppId": 1234,
  "status": "P"
}
```

