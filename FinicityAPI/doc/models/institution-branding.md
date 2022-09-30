
# Institution Branding

## Structure

`InstitutionBranding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string` | Required | - |
| `alternateLogo` | `string \| null` | Required | - |
| `icon` | `string` | Required | - |
| `alternateIcon` | `string` | Required | - |
| `primaryColor` | `string` | Required | - |
| `secondaryColor` | `string \| null` | Required | - |
| `gradientColorTop` | `string` | Required | - |
| `gradientColorBottom` | `string` | Required | - |
| `tile` | `string` | Required | - |
| `tileSmall` | `string \| null` | Required | - |
| `buttonTextColor` | `string` | Required | - |

## Example (as JSON)

```json
{
  "logo": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/logo.svg",
  "alternateLogo": null,
  "icon": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/icon.svg",
  "alternateIcon": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/alternateIcon.svg",
  "primaryColor": "#0167AE",
  "secondaryColor": null,
  "gradientColorTop": "#015B9B",
  "gradientColorBottom": "#0167AE",
  "tile": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/tile.svg",
  "tileSmall": "https://prod-carpintero-branding.s3.us-west-2.amazonaws.com/5/tile-small.svg",
  "buttonTextColor": "#0167AE"
}
```

