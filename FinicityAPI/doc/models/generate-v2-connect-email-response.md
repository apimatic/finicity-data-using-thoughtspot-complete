
# Generate V2 Connect Email Response

The response from the send email endpoint.

## Structure

`GenerateV2ConnectEmailResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | `string` | Required | The URL generated to send a Connect email |
| `emailConfig` | [`ConnectV2EmailOptions`](../../doc/models/connect-v2-email-options.md) | Required | The configuration used to generate the Connect email. |

## Example (as JSON)

```json
{
  "link": "https://connect.finicity.com?consumerId=f1ca88bea722ef1f8178f8230756bbcf&customerId=54411976&partnerId=2445582695152&signature=d34c1352c45f54cfd76454e7e8c3e85cc923b60fae5f28b26cd6c7b6f8aaa201×tamp=1584733720994&ttl=1584740920994&type=aggregation",
  "emailConfig": {
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
}
```

