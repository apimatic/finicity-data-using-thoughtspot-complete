
# Report Notification

## Structure

`ReportNotification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string \| undefined` | Optional | Finicity’s consumer ID. This field is optional and may not always return. |
| `consumerSsn` | `string \| undefined` | Optional | The last four of the consumer’s social security number. This field is optional and may not always return. |
| `eventName` | `string \| undefined` | Optional | The event name of the webhook. This will either be inProgress, failed, primaryFieldUpdate, or done. |
| `id` | `string \| undefined` | Optional | Finicity’s report ID |
| `status` | `string \| undefined` | Optional | inProgress, success, failure, or editing |
| `type` | `string \| undefined` | Optional | Finicity’s report type. This field is optional and may not always return. |

## Example (as JSON)

```json
{
  "consumerId": null,
  "consumerSsn": null,
  "eventName": null,
  "id": null,
  "status": null,
  "type": null
}
```

