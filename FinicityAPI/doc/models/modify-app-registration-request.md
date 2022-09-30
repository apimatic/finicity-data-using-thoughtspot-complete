
# Modify App Registration Request

Body for the request when you are submitting and app modification request

## Structure

`ModifyAppRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appDescription` | `string` | Required | A short description of the app. This will be visible to end users in the FI interface. |
| `appName` | `string` | Required | App Name. This will be visible to end users in the FI interface. |
| `appUrl` | `string` | Required | App URL. This will be visible to end users in the FI interface. |
| `ownerAddressLine1` | `string` | Required | Address Line 1 for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerAddressLine2` | `string` | Required | Address Line 2 for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerCity` | `string` | Required | City for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerCountry` | `string` | Required | Country  for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerName` | `string` | Required | Business name for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerPostalCode` | `number` | Required | Zip code for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerState` | `string` | Required | State for business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `image` | `string` | Required | App Logo. The base 64 encoded value for the logo. 1:1 .svg file less than 50 KB |

## Example (as JSON)

```json
{
  "appDescription": "The app that makes your budgeting experience even more awesome",
  "appName": "New Awesome Budget App",
  "appUrl": "https://www.finicity.com/",
  "ownerAddressLine1": "434 W Ascension Way",
  "ownerAddressLine2": "Suite #200",
  "ownerCity": "Murray",
  "ownerCountry": "USA",
  "ownerName": "Finicity",
  "ownerPostalCode": 84123,
  "ownerState": "UT",
  "image": "{bytes of new logo image}"
}
```

