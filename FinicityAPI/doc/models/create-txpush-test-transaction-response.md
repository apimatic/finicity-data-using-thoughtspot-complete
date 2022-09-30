
# Create Txpush Test Transaction Response

Response for TxPush test transaction

## Structure

`CreateTxpushTestTransactionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The ID of the new transaction record |
| `createdDate` | `bigint` | Required | A timestamp of when the transaction was added (see Handling Dates and Times) |

## Example (as JSON)

```json
{
  "id": 102122887150,
  "createdDate": 1588974631
}
```

