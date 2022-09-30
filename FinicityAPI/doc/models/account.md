
# Account

## Structure

`Account`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `number` | `string` | Required | - |
| `name` | `string` | Required | - |
| `balance` | `number` | Required | - |
| `type` | `string` | Required | - |
| `aggregationStatusCode` | `number \| undefined` | Optional | - |
| `status` | `string` | Required | - |
| `customerId` | `string` | Required | - |
| `institutionId` | `string` | Required | - |
| `balanceDate` | `number \| undefined` | Optional | - |
| `aggregationSuccessDate` | `number \| undefined` | Optional | - |
| `aggregationAttemptDate` | `number \| undefined` | Optional | - |
| `createdDate` | `number` | Required | - |
| `currency` | `string` | Required | - |
| `lastTransactionDate` | `number \| undefined` | Optional | - |
| `institutionLoginId` | `number` | Required | - |
| `displayPosition` | `number` | Required | - |

## Example (as JSON)

```json
{
  "id": "2055",
  "number": "XXXX-XXXXXX-32765",
  "name": "Checking",
  "balance": 1266.49,
  "type": "checking",
  "status": "active",
  "customerId": "41442",
  "institutionId": "101732",
  "createdDate": 1422395818,
  "currency": "USD",
  "institutionLoginId": 9764,
  "displayPosition": 1
}
```

