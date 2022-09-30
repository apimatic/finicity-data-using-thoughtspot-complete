
# Generate Connect URL Request Lite V2

## Structure

`GenerateConnectURLRequestLiteV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | The partner id you can obtain from your Finicity developer dashboard |
| `customerId` | `string` | Required | Finicity’s customer ID. Obtained from the Add Customer call. |
| `institutionId` | `number` | Required | ID of the specific Institution login flow to present to the Customer/Consumer <br> *Only supported for connect type`lite`* |
| `redirectUri` | `string \| undefined` | Optional | The url that customers will be redirected to after completing Finicity Connect. <br> *Required unless Connect is embedded inside your application. (iframe)* |
| `webhook` | `string \| undefined` | Optional | The publicly available URL you wish to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-webhooks/) for event details. |
| `webhookContentType` | `string \| undefined` | Optional | The Content Type The Webhooks Events Will Be Sent In. Supported Types `application/json` and `application/xml`<br>**Default**: `'application/json'` |
| `webhookData` | `unknown \| undefined` | Optional | Allows additional identifiable information to be inserted into the payload of connect webhook events. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `webhookHeaders` | `unknown \| undefined` | Optional | Allows additional identifiable information to be included as headers of connect webhook event. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `experience` | `string \| undefined` | Optional | The `experience` field allows you to customize: <br> * **Brand**: color and logo <br> * **Icon**: displayed on the Share your data page <br>      <br>**Note**: The Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2. For each additional experience you create thereafter, they’ll give you a unique ID. See [Generate 2.0 Connect URL APIs](https://docs.finicity.com/migrate-to-connect-web-sdk-2-0/#migrate-connect-web-sdk-1) <br>  <br>**Experience values options**: <br> * **default**: your default experience <br> * **unique ID**: the code for a different experience <br> * **not defined**: If you don’t pass the experience parameter, then Connect’s out of the box default experience (add accounts but no branding) is used. <br> |
| `singleUseUrl` | `boolean \| undefined` | Optional | **True**: The URL link expires after a Connect session successfully completes. <br> <br> **Note**: When the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter. |

## Example (as JSON)

```json
{
  "partnerId": "1445585709680",
  "customerId": "1005061234",
  "institutionId": 101723,
  "webhook": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  "webhookContentType": "application/json",
  "experience": "default",
  "singleUseUrl": true
}
```

