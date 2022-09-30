
# Connect V2 Email Options

The parameter definitions used to configure the Connect email's sent to customers.

## Structure

`ConnectV2EmailOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `to` | `string` | Required | The email address for the customer receiving the Connect email. |
| `from` | `string \| undefined` | Optional | The name of a person or business sending the Connect email. |
| `supportPhone` | `string \| undefined` | Optional | (Optional) The support phone number listed in the email. |
| `subject` | `string \| undefined` | Optional | (Optional) The subject line of the email. The default is Verify your Financial Information. |
| `firstName` | `string \| undefined` | Optional | (Optional) The first name of the customer or both names of the customers for joint borrowers. Example: Marvin and Jenny. |
| `institutionName` | `string \| undefined` | Optional | (Optional) The name of your company. |
| `institutionAddress` | `string \| undefined` | Optional | (Optional) The institution address appears in the footer of the email. |
| `signature` | `string[] \| undefined` | Optional | (Optional) Add a signature to the email. |

## Example (as JSON)

```json
{
  "to": "fin.user@finicity.com",
  "from": "testLender@test.com",
  "supportPhone": "800-555-5555",
  "subject": "Verify your income",
  "firstName": "Bob",
  "institutionName": "Acme Lending",
  "institutionAddress": "222 Winipeg Drive SLC UT, 84109",
  "signature": [
    "Cindy Mayfield",
    "Senior Loan Officer",
    "Direct 123-456-7890"
  ]
}
```

