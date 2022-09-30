
# App FI Status

The registration status fields for each specific OAuth financial institution

## Structure

`AppFIStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The finicity financial institution id |
| `abbrvName` | `string \| undefined` | Optional | The applications abbreviated name |
| `logoUrl` | `string \| undefined` | Optional | Logo URL for stored logo file |
| `decryptionKeyActivated` | `boolean` | Required | Status of decryption keys for financial institution app registration |
| `createdDate` | `bigint` | Required | Creation date of app's financial institution registration |
| `lastModifiedDate` | `bigint` | Required | Last modified date of the app's financial institution registration |
| `status` | `boolean` | Required | App registered for specific FI what status is true. False indicates registration is still pending. |

## Example (as JSON)

```json
{
  "id": 102224,
  "decryptionKeyActivated": false,
  "createdDate": 1595526299,
  "lastModifiedDate": 1595526299,
  "status": false
}
```

