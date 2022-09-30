
# Generate Connect URL Request

## Structure

`GenerateConnectURLRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | The partner id you can obtain from your Finicity developer dashboard |
| `customerId` | `string` | Required | Finicity’s customer ID. Obtained from the Add Customer call. |
| `consumerId` | `string \| undefined` | Optional | Finicity’s consumer ID. Obtained from the Create Consumer call. <br> *Required for any connect type that generate a report* |
| `type` | [`FinicityConnectTypeEnum`](../../doc/models/finicity-connect-type-enum.md) | Required | The type of connect flow you want for the customer/consumer. See Finicity Connect Type For Definitions. |
| `institutionId` | `number \| undefined` | Optional | ID of the specific Institution login flow to present to the Customer/Consumer <br> *Only supported for connect type`lite`* |
| `institutionLoginId` | `string \| undefined` | Optional | The institutionLoginId for the account record. Used in type “fix” in order to pull up a fix flow for a specific set of accounts under one institutionLoginId |
| `skipReport` | `boolean \| undefined` | Optional | Boolean indicating if Connect should generate the report at the end of the flow<br>**Default**: `false` |
| `fromDate` | `string \| undefined` | Optional | The `fromDate` param is an Epoch Timestamp (in seconds), such as “1494449017”. Without this param, the report defaults to 6 months if available. If included, the epoch timestamp should be 10 digits long, and be within two years of the present day. Extending the epoch timestamp beyond 10 digits will default back to six months of data. This is an optional field for use with only “voa” Connect type. The fromDate param should not be used with the “voi” Connect type. |
| `paystubs` | `string \| undefined` | Optional | Enter the value 2 here if the consumer needs to upload the 2 most recent pay statements. Applicable only for VOIE products. |
| `redirectUri` | `string \| undefined` | Optional | The url that customers will be redirected to after completing Finicity Connect. <br> *Required unless Connect is embedded inside your application. (iframe)* |
| `webhook` | `string \| undefined` | Optional | The publicly available URL you wish to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-webhooks/) for event details. |
| `webhookContentType` | `string \| undefined` | Optional | The Content Type The Webhooks Events Will Be Sent In. Supported Types `application/json` and `application/xml`<br>**Default**: `'application/json'` |
| `webhookData` | `unknown \| undefined` | Optional | Allows additional identifiable information to be inserted into the payload of connect webhook events. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `webhookHeaders` | `unknown \| undefined` | Optional | Allows additional identifiable information to be included as headers of connect webhook event. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `institutionSettings` | `unknown \| undefined` | Optional | Advanced options for configuration of which institutions to display in. See this article for [Details](https://docs.finicity.com/connect-institution-settings/) |
| `reportCustomFields` | [`ReportCustomFields[] \| undefined`](../../doc/models/report-custom-fields.md) | Optional | Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field.  Set the shown variable to true if you want the custom field to display in the JSON, XML, and PDF reports. Set the shown variable to false if you do not wish to see this field in the report. All custom fields will display in the Reseller Billing endpoint.   This is optional. |
| `analytics` | `string \| undefined` | Optional | Google Analytics or Adobe Analytics can be used with Connect to provide an additional layer of transparency of end user engagement. This is optional. |

## Example (as JSON)

```json
{
  "partnerId": "1445585709680",
  "customerId": "1005061234",
  "type": "aggregation",
  "webhook": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  "webhookContentType": "application/json",
  "analytics": "google:UA-123456789-1"
}
```

