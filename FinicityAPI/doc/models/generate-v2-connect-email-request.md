
# Generate V2 Connect Email Request

## Structure

`GenerateV2ConnectEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | Your partner id from the [Finicity Developer Portal](https://signup.finicity.com/). |
| `customerId` | `string` | Required | The customerID from the Add Customer call. |
| `consumerId` | `string` | Required | The consumerID from the Create Customer call. <br> Note: Required for any connect type that generates a report. |
| `redirectUri` | `string \| undefined` | Optional | The URL that customers are redirected after they complete the Connect application.  If this parameter isn’t specified, then a thank you screen appears and the customer ends Connect. |
| `webhook` | `string \| undefined` | Optional | The URL used to send notifications about events as the user interacts with screens throughout the Connect application. See [Connect Webhooks](https://docs.finicity.com/connect-webhooks/) |
| `webhookContentType` | `string \| undefined` | Optional | The content type that the webhook events are sent.<br>**Default**: `'application/json'` |
| `webhookData` | `unknown \| undefined` | Optional | Allows you to insert additional information into the Connect webhook events payload. See [Connect Custom Webhooks Data and Headers](https://docs.finicity.com/connect-custom-webhook-data-and-headers/) |
| `webhookHeaders` | `unknown \| undefined` | Optional | Allows you to include header information for the Connect webhook events. See [Connect Custom Webhooks Data and Headers](https://docs.finicity.com/connect-custom-webhook-data-and-headers/) |
| `institutionSettings` | `unknown \| undefined` | Optional | Advanced configuration options to display institutions. See [Institution Settings](https://docs-new.finicitydev.com/connect-institutions-options/) |
| `email` | [`ConnectV2EmailOptions`](../../doc/models/connect-v2-email-options.md) | Required | The configuration email details. |
| `experience` | `string` | Required | The `experience` field allows you to customize: <br> * **Brand**: color and logo <br> * **Icon**: displayed on the Share your data page <br> * **Popular institutions**: displayed on the Bank Search page <br> * **Report**: the credit decisioning report to send when Connect completes. <br> * **MVS modules**: financial, payroll, paystub <br>      <br>**Note**: The Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they’ll give you a unique ID. See [Generate 2.0 Connect URL APIs](https://docs.finicity.com/migrate-to-connect-web-sdk-2-0/#migrate-connect-web-sdk-1) <br>       <br>**Experience values options**: <br> * **default**: your default experience <br> * **unique ID**: the code for a different experience |
| `fromDate` | `bigint \| undefined` | Optional | The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. <br> The value is in epoch time and must be 10 digits. **Example**: 1494449017. <br>  <br>If it’s greater than 10 digits, then the `fromDate` is set to the credit decisioning report’s default `fromDate`.<br>  <br>For an experience that generates multiple reports the `fromDate` gets passed to the reports that support it. <br>  <br>However, Connect doesn’t pass this parameter to the following reports: <br> * Pay Statement Extraction Report <br> * VOIE - Paystub (with TXVerify) Report <br>  * Statement Report <br> * Verification of Income Report  <br> * VOIE - Payroll Report  <br> <br>**Note**: this field isn’t used if you’re only collecting transaction data without a report. |
| `reportCustomFields` | [`ReportCustomFields[] \| undefined`](../../doc/models/report-custom-fields.md) | Optional | The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. <br> The value is in epoch time and must be 10 digits. **Example**: 1494449017. <br>  <br>If it’s greater than 10 digits, then the `fromDate` is set to the credit decisioning report’s default `fromDate`.<br>  <br>For an experience that generates multiple reports the `fromDate` gets passed to the reports that support it. <br>  <br>However, Connect doesn’t pass this parameter to the following reports: <br> * Pay Statement Extraction Report <br> * VOIE - Paystub (with TXVerify) Report <br>  * Statement Report <br> * Verification of Income Report  <br> * VOIE - Payroll Report  <br> <br>**Note**: this field isn’t used if you’re only collecting transaction data without a report. |
| `optionalConsumerInfo` | [`OptionalConsumerInformation \| undefined`](../../doc/models/optional-consumer-information.md) | Optional | (MVS-Optional) Used to pre-populate the consumer’s SSN so the customer only enters the last 4-digits on the Find employment records page at the beginning of the MVS payroll module in a Connect experience. <br> <br> If not used, the consumer’s full SSN must be entered to search for their employment records. |
| `singleUseUrl` | `boolean \| undefined` | Optional | **True**: The URL link expires after a Connect session successfully completes. <br> <br> **Note**: When the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter. |

## Example (as JSON)

```json
{
  "partnerId": "1445585709680",
  "customerId": "1005061234",
  "consumerId": "86238nvnw7269e224a4e3de12352d87d",
  "type": "voa",
  "webhook": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  "webhookContentType": "application/json",
  "email": {
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
  },
  "experience": "default",
  "fromDate": 12345678,
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

