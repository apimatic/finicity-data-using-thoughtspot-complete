
# Transactions Report Transaction

The fields used in the Transactions Report Transactions record

## Structure

`TransactionsReportTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The Finicity ID of the financial transaction. |
| `amount` | `number` | Required | The total amount of the transaction. Transactions for deposits are positive values, and withdrawals and debits are negative values. |
| `postedDate` | `bigint` | Required | A timestamp showing when the transaction was posted or cleared by the institution. |
| `description` | `string` | Required | The financial institution provides the description of the transaction (often known as the payee), but if it’s left blank, then Finicity passes the value: No description provided by institution. |
| `normalizedPayee` | `string` | Required | A normalized payee, derived from the transaction's description and memo fields. |
| `institutionTransactionId` | `string` | Required | The unique identifier given by the financial institution for each transaction. |
| `category` | [`CategoriesEnum`](../../doc/models/categories-enum.md) | Required | A value from the Categories Enumerations, and assigned based on the payee name. |
| `memo` | `string` | Required | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |

## Example (as JSON)

```json
{
  "id": 100001490897,
  "amount": -81.7,
  "postedDate": 1594123200,
  "description": "TMOBILE*AUTO PAY",
  "normalizedPayee": "T-Mobile",
  "institutionTransactionId": "0000000000",
  "category": "Mobile Phone",
  "memo": "Finicity amount credit"
}
```

