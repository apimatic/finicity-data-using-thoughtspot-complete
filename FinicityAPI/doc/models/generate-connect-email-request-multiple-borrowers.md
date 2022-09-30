
# Generate Connect Email Request Multiple Borrowers

## Structure

`GenerateConnectEmailRequestMultipleBorrowers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | The partner id you can obtain from your Finicity developer dashboard |
| `customers` | `unknown[]` | Required | The customers' information |
| `redirectUri` | `string \| undefined` | Optional | The url that customers will be redirected to after completing Finicity Connect. |
| `type` | `string` | Required | The report type you wish to have generated for you. Valid types include ‘voa’, ‘voi’, and ‘aggregation’ |
| `webhook` | `string \| undefined` | Optional | The publicly available url you wish to be posted to when the user starts Finicity Connect, and completes, it etc.  This is an optional field |
| `webhookContentType` | `string \| undefined` | Optional | The format of the data you wish to be posted to your server. Valid values are ‘application/json’ and ‘application/xml’ This field is optional. |
| `webhookData` | `unknown \| undefined` | Optional | Allows additional identifiable information to be inserted into webhooks (value1, value2, etc.). Alternative naming conventions may be desired in place of value1, value2 for specific values (e.g. loanNumber, currentDate, etc.) This field is optional. |
| `webhookHeaders` | `unknown \| undefined` | Optional | Headers to be included with webhook events |
| `institutionId` | `number \| undefined` | Optional | Institution id (required for type=lite) |
| `oauthOptions` | [`ConnectOauthOptions \| undefined`](../../doc/models/connect-oauth-options.md) | Optional | oauthOptions for oauthEnabled institutions |
| `reportCustomFields` | [`ReportCustomFields[] \| undefined`](../../doc/models/report-custom-fields.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field.  Set the shown variable to true if you want the custom field to display in the JSON, XML, and PDF reports. Set the shown variable to false if you do not wish to see this field in the report. All custom fields will display in the Reseller Billing endpoint.   This is optional. |
| `analytics` | `string \| undefined` | Optional | Google Analytics can be used with Connect to provide an additional layer of transparency of end user engagement. This field is optional |
| `skipReport` | `boolean \| undefined` | Optional | Boolean indicating if Connect should generate the report |
| `email` | [`ConnectEmailOptions \| undefined`](../../doc/models/connect-email-options.md) | Optional | - |

## Example (as JSON)

```json
{
  "partnerId": "{{PARTNER_ID}}",
  "customers": [
    {
      "customerId": "{{CUSTOMER_ID}}",
      "consumerId": "{{CONSUMER_ID}}",
      "firstName": "Bob"
    },
    {
      "customerId": "{{CUSTOMER_ID}}",
      "consumerId": "{{CONSUMER_ID}}",
      "firstName": "John"
    }
  ],
  "redirectUri": "https://example.com/redirectHandler",
  "type": "voa",
  "analytics": "google:XXXX-XXXXXXXXX-XX",
  "email": {
    "to": "fin.user@finicity.com"
  }
}
```

