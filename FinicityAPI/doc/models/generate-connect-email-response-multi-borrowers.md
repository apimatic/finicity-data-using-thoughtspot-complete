
# Generate Connect Email Response Multi Borrowers

## Structure

`GenerateConnectEmailResponseMultiBorrowers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | `string[]` | Required | The URL generated to send a Connect email |
| `emailConfig` | `unknown` | Required | The configuration used to generate the Connect email. |

## Example (as JSON)

```json
{
  "links": [
    "https://connect.finicity.com?consumerId=e5884105b68eb5d80b3b796bf8afabbd&customerId=1003626214&partnerId=2445582695152&redirectUri=https%3A%2F%2Facme-lending.com%2FredirectHandler&signature=5999e41f84c68d3feaef71f1e317a2c819163104fcf38837779c44c913741657×tamp=1586376716389&ttl=1586635916389&type=voa",
    "https://connect.finicity.com?consumerId=e5884105b68eb5d80b3b796bf8afabbd&customerId=1003626214&partnerId=2445582695152&redirectUri=https%3A%2F%2Facme-lending.com%2FredirectHandler&signature=801bcb4dc90a48d49bf5b9d15b4509085a21692af30c693dd121fd39320cac36×tamp=1586376716491&ttl=1586635916491&type=voa"
  ],
  "emailConfig": {
    "link": "https://connect.finicity.com?consumerId=e5884105b68eb5d80b3b796bf8afabbd&customerId=1003626214&partnerId=2445582695152&redirectUri=https%3A%2F%2Fexample.com%2FredirectHandler&signature=e7fd23245583710bdee8eb5f665d45db4e6ac9f89cd71327abe6d7710a7b386c×tamp=1586376524341&ttl=1586635724341&type=voa",
    "type": "voa",
    "subject": "Verify Your Financial Information",
    "firstNames": [
      "Bob",
      "John"
    ],
    "brandLogo": "https://acmelending.net/images/acme_logo2.png",
    "brandColor": "#003f6d",
    "institutionName": "Acme Lending (Finicity Keep)",
    "institutionAddress": "222 Winipeg Drive SLC UT, 84109",
    "supportPhone": "801-987-6543",
    "from": "noreply@finicity.com",
    "to": "fin.user@finicity.com"
  }
}
```

