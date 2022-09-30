
# Generate V2 Connect URL Request

## Structure

`GenerateV2ConnectURLRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | The partner id you can obtain from your Finicity developer dashboard |
| `customerId` | `string` | Required | Finicity’s customer ID. Obtained from the Add Customer call. |
| `consumerId` | `string \| undefined` | Optional | Finicity’s consumer ID. Obtained from the Create Consumer call. <br> *Required for any connect type that generate a report* |
| `redirectUri` | `string \| undefined` | Optional | The url that customers will be redirected to after completing Finicity Connect. <br> *Required unless Connect is embedded inside your application. (iframe)* |
| `webhook` | `string \| undefined` | Optional | The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-webhooks/) for event details. |
| `webhookContentType` | `string \| undefined` | Optional | The Content Type The Webhooks Events Will Be Sent In. Supported Types `application/json` and `application/xml`<br>**Default**: `'application/json'` |
| `webhookData` | `unknown \| undefined` | Optional | Allows additional identifiable information to be inserted into the payload of connect webhook events. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `webhookHeaders` | `unknown \| undefined` | Optional | Allows additional identifiable information to be included as headers of connect webhook event. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). |
| `institutionSettings` | `unknown \| undefined` | Optional | Advanced options for configuration of which institutions to display in. See [Institution Settings](https://docs.finicity.com/connect-institution-settings/) |
| `experience` | `string \| undefined` | Optional | The `experience` field allows you to customize: <br> * **Brand**: color and logo <br> * **Icon**: displayed on the Share your data page <br> * **Popular institutions**: displayed on the Bank Search page <br> * **Report**: the credit decisioning report to send when Connect completes. <br> * **MVS modules**: financial, payroll, paystub <br>      <br>**Note**: The Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they’ll give you a unique ID. See [Generate 2.0 Connect URL APIs](https://docs.finicity.com/migrate-to-connect-web-sdk-2-0/#migrate-connect-web-sdk-1) <br>       <br>**Experience values options**: <br> * **default**: your default experience <br> * **unique ID**: the code for a different experience <br> * **not defined**: If you don’t pass the experience parameter, then Connect’s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run. <br> |
| `fromDate` | `bigint \| undefined` | Optional | The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. <br> The value is in epoch time and must be 10 digits. **Example**: 1494449017. <br>  <br>If it’s greater than 10 digits, then the `fromDate` is set to the credit decisioning report’s default `fromDate`.<br>  <br>For an experience that generates multiple reports the `fromDate` gets passed to the reports that support it. <br>  <br>However, Connect doesn’t pass this parameter to the following reports: <br> * Pay Statement Extraction Report <br> * VOIE - Paystub (with TXVerify) Report <br>  * Statement Report <br> * Verification of Income Report  <br> * VOIE - Payroll Report  <br> <br>**Note**: this field isn’t used if you’re only collecting transaction data without a report. |
| `reportCustomFields` | [`ReportCustomFields[] \| undefined`](../../doc/models/report-custom-fields.md) | Optional | The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report. <br>  <br>Designate up to 5 custom fields that you’d like associated with the report when it’s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false. <br>* **True**: (default) display the custom field in the PDF report. <br>  <br>* **False**: don’t display the custom field in the PDF report. <br>  <br>For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.<br>  <br>All custom fields display in the Reseller Billing endpoint.<br> |
| `optionalConsumerInfo` | [`OptionalConsumerInformation \| undefined`](../../doc/models/optional-consumer-information.md) | Optional | (MVS-Optional) Used to pre-populate the consumer’s SSN so the customer only enters the last 4-digits on the Find employment records page at the beginning of the MVS payroll module in a Connect experience. <br> <br> If not used, the consumer’s full SSN must be entered to search for their employment records. |
| `singleUseUrl` | `boolean \| undefined` | Optional | **True**: The URL link expires after a Connect session successfully completes. <br> <br> **Note**: When the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter. |

## Example (as JSON)

```json
{
  "partnerId": "1445585709680",
  "customerId": "1005061234",
  "webhook": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  "webhookContentType": "application/json",
  "experience": "default",
  "fromDate": 1607450357,
  "reportCustomFields": [
    {
      "label": "loanID",
      "value": "12345",
      "shown": true
    },
    {
      "label": "branchID",
      "value": "55555",
      "shown": false
    }
  ],
  "singleUseUrl": true,
  "optionalConsumerInfo": {
    "ssn": "123412134"
  }
}
```

