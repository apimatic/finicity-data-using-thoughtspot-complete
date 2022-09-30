
# Authentication Response

## Structure

`AuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Required | A Temporary Access Token Which Must Be Passed In The HTTP Header "Finicity-App-Token" On All Subsequent API Requests. |

## Example (as JSON)

```json
{
  "token": "ACCESS_TOKEN"
}
```

