
# Generate Connect URL Request Fix

## Structure

`GenerateConnectURLRequestFix`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | The partner id you can obtain from your Finicity developer dashboard |
| `customerId` | `string` | Required | Finicity’s customer ID. Obtained from the Add Customer call. |
| `type` | [`FinicityConnectTypeEnum`](../../doc/models/finicity-connect-type-enum.md) | Required | The type of connect flow you want for the customer/consumer. See Finicity Connect Type For Definitions. |
| `institutionLoginId` | `string \| undefined` | Optional | The institutionLoginId for the account record. Used in type “fix” in order to pull up a fix flow for a specific set of accounts under one institutionLoginId. If none is given then the fix flow will give an account management dashboard and attempt to have the customer fix all accounts in turn. |
| `redirectUri` | `string \| undefined` | Optional | The url that customers will be redirected to after completing Finicity Connect. <br> *Required unless Connect is embedded inside your application. (iframe)* |
| `webhook` | `string \| undefined` | Optional | The publicly available URL you wish to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-webhooks/) for event details. |
| `webhookContentType` | `string \| undefined` | Optional | The Content Type The Webhooks Events Will Be Sent In. Supported Types `application/json` and `application/xml`<br>**Default**: `'application/json'` |
| `webhookData` | `unknown \| undefined` | Optional | Allows additional identifiable information to be inserted into the payload of connect webhook events. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `webhookHeaders` | `unknown \| undefined` | Optional | Allows additional identifiable information to be included as headers of connect webhook event. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `institutionSettings` | `unknown \| undefined` | Optional | Advanced options for configuration of which institutions to display in. See this article for [Details](https://docs.finicity.com/connect-institution-settings/) |
| `analytics` | `string \| undefined` | Optional | Google Analytics or Adobe Analytics can be used with Connect to provide an additional layer of transparency of end user engagement. This is optional. |

## Example (as JSON)

```json
{
  "partnerId": "1445585709680",
  "customerId": "1005061234",
  "type": "fix",
  "institutionLoginId": "1007302745",
  "webhook": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  "webhookContentType": "application/json",
  "analytics": "google:UA-123456789-1"
}
```

