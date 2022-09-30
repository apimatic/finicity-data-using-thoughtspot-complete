
# Branding

All assets are SVGs so can be slightly resized without any issues.

## Structure

`Branding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string` | Required | File path of the institution's logo.  For white backgrounds designed at 375 x 72, has built in spacing around it to normalize brand sizing. |
| `alternateLogo` | `string` | Required | File path of the instiitution's alternate logo.  For colored backgrounds designed at 375 x 72 has built in spacing around it to normalize brand sizing |
| `icon` | `string` | Required | File path of the Institution's icon.  For search results designed at 40 x 40 |
| `primaryColor` | `string` | Required | Hex code for the Institution's primary color. |
| `tile` | `string` | Required | File path of institution name logo.  For popular banks designed at 160 x 72 |

## Example (as JSON)

```json
{
  "logo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/logo.svg",
  "alternateLogo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/alternateLogo.svg",
  "icon": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/icon.svg",
  "primaryColor": "#0167AE",
  "tile": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/tile.svg"
}
```

