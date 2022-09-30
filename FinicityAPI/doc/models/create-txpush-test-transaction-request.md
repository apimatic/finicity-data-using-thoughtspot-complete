
# Create Txpush Test Transaction Request

Create a text transaction for TxPush testing

## Structure

`CreateTxpushTestTransactionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | The amount of the transaction |
| `description` | `string` | Required | The description of the transaction |
| `status` | `string \| undefined` | Optional | active or pending (optional)<br>**Default**: `'active'` |
| `postedDate` | `bigint` | Required | An optional timestamp for the transaction’s posted date value for this transaction (see Handling Dates and Times). Timestamp must be no more than 6 months from the current date. |
| `transactionDate` | `bigint` | Required | An optional timestamp for the transaction’s posted date value for this transaction (see Handling Dates and Times) |

## Example (as JSON)

```json
{
  "amount": -4.25,
  "description": "a testing transaction description",
  "status": "pending",
  "postedDate": 1588888169,
  "transactionDate": 1588801769
}
```

