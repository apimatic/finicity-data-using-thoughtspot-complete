
# Cash Flow Transactions

## Structure

`CashFlowTransactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity ID of the transaction |
| `amount` | `number` | Required | The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. |
| `postedDate` | `bigint` | Required | A timestamp showing when the transaction was posted or cleared by the institution |
| `description` | `string` | Required | The description of the transaction, as provided by the institution (often known as `payee`). In the event that this field is left blank by the institution, Finicity will pass a value of "No description provided by institution". All other values are provided by the institution. |
| `memo` | `string \| undefined` | Optional | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |
| `normalizedPayee` | `string` | Required | A normalized payee, derived from the transaction's `description` and `memo` fields. |
| `institutionTransactionId` | `string` | Required | The unique identifier given by the FI for each transaction. |
| `category` | `string` | Required | One of the values from Categories (assigned based on the payee name) |
| `type` | `string \| undefined` | Optional | One of the values from Transaction Types |

## Example (as JSON)

```json
{
  "id": "2251437251",
  "amount": 100.0,
  "postedDate": 1571313600,
  "description": "ATM CHECK DEPOSIT mm/dd",
  "normalizedPayee": "T-Mobile",
  "institutionTransactionId": "0000000000",
  "category": "Income"
}
```

