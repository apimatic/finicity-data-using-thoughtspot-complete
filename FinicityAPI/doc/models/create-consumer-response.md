
# Create Consumer Response

## Structure

`CreateConsumerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Finicity ID of the consumer (UUID with max length 32 characters) |
| `createdDate` | `bigint \| undefined` | Optional | Consumer created date |
| `customerId` | `bigint \| undefined` | Optional | Finicity?s ID of the customer |

## Example (as JSON)

```json
{
  "id": "1973f901305e2ab3ba8840f411f6b057",
  "createdDate": 1587586444,
  "customerId": 1000005540
}
```

