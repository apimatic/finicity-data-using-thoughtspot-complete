
# Get Available Balance Response

## Structure

`GetAvailableBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | ID for the customer who owns the account |
| `realAccountNumberLast4` | `string` | Required | The last 4 digits of the ACH account number |
| `availableBalance` | `number` | Required | The available balance of the account |
| `availableBalanceDate` | `bigint` | Required | Epoch Unix Timestamp for when the available balance was retrieved |
| `clearedBalance` | `number` | Required | The cleared balance of the account. Also referred as posted balance, current balance, ledger balance |
| `clearedBalanceDate` | `bigint` | Required | Epoch Unix Timestamp for when the cleared balance was retrieved |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see Handling Aggregation Status Codes). This will not be present until you have run your first aggregation for the account. |
| `currency` | `string` | Required | The currency of the account |

## Example (as JSON)

```json
{
  "id": 5047759451,
  "realAccountNumberLast4": "2222",
  "availableBalance": 228.33,
  "availableBalanceDate": 1646076805,
  "clearedBalance": 228.33,
  "clearedBalanceDate": 1646076805,
  "aggregationStatusCode": 0,
  "currency": "USD"
}
```

