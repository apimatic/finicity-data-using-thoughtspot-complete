
# Error Message

## Structure

`ErrorMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `number` | Required | Error code |
| `message` | `string \| undefined` | Optional | Error message |
| `assetId` | `string \| undefined` | Optional | Finicity's asset ID |
| `accountId` | `bigint \| undefined` | Optional | The generated Finicity ID of the account that had the error |

## Example (as JSON)

```json
{
  "code": 130,
  "message": "message",
  "assetId": "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
  "accountId": 5003507225
}
```

