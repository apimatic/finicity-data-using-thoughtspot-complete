
# Get Institutions Institution Branding

## Structure

`GetInstitutionsInstitutionBranding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | The logo of the institution that’s used for white backgrounds |
| `alternateLogo` | `string \| undefined` | Optional | The alternate logo of the institution that’s used for branded or colored backgrounds. |
| `icon` | `string \| undefined` | Optional | The branding icon of the institution |
| `primaryColor` | `string \| undefined` | Optional | The branding’s primary color for the institution |
| `tile` | `string \| undefined` | Optional | The branding tile that displays on the Connect Search for a bank page. |

## Example (as JSON)

```json
{
  "logo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/logo.svg",
  "alternateLogo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/alternateLogo.svg",
  "icon": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/icon.svg",
  "primaryColor": "#1B3E4A",
  "tile": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/101732/tile.svg"
}
```

