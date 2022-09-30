
# Connect Email Options

Customizable email details

## Structure

`ConnectEmailOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `to` | `string` | Required | The email address you wish to receive the email |
| `supportPhone` | `string \| undefined` | Optional | Phone number that will be listed for support in the email. This field is optional. This is also available in the Finicity Developer Portal. |
| `subject` | `string \| undefined` | Optional | The “subject” line that will appear in user’s inboxes. Defaults to ‘Verify your Financial Information’ This field is optional. |
| `firstName` | `string \| undefined` | Optional | The first name of the customer that will appear in the email This field is optional. |
| `brandColor` | `string \| undefined` | Optional | The header color in the email. Defaults to dark blue This field is optional. This is also available in the Finicity Developer Portal. |
| `brandLogo` | `string \| undefined` | Optional | A valid url that points to the logo you want to appear in the email. For optimal display, should have dimensions no greater than 110 pixels tall and 300 pixels wide This field is optional. This is also available in the Finicity Developer Portal. |
| `institutionName` | `string \| undefined` | Optional | The name of your company that will appear in the email This field is optional. This is also available in the Finicity Developer Portal. |
| `institutionAddress` | `string \| undefined` | Optional | Address that will appear in the footer of the email This field is optional. This is also available in the Finicity Developer Portal. |
| `signature` | `string[] \| undefined` | Optional | Signature can be applied. In xml a separate line in signature is delineated by each tag. In json this is simply an array, e.g. “signature”: This field is optional. |

## Example (as JSON)

```json
{
  "to": "fin.user@finicity.com",
  "supportPhone": "800-555-5555",
  "subject": "Verify your income",
  "firstName": "Bob",
  "brandColor": "#4287f5",
  "brandLogo": "https://acme-lending.com/logo.png",
  "institutionName": "Acme Lending",
  "institutionAddress": "222 Winipeg Drive SLC UT, 84109",
  "signature": [
    "Cindy Mayfield",
    "Senior Loan Officer",
    "Direct 123-456-7890"
  ]
}
```

