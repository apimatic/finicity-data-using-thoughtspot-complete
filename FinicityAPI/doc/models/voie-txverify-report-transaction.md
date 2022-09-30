
# VOIE Txverify Report Transaction

## Structure

`VOIETxverifyReportTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The Finicity ID of the transaction |
| `amount` | `number` | Required | The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. |
| `postedDate` | `bigint` | Required | A timestamp showing when the transaction was posted or cleared by the institution (see Handling Dates and Times) |
| `description` | `string` | Required | The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of “No description provided by institution”. All other values are provided by the institution. |
| `memo` | `string` | Required | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |
| `institutionTransactionId` | `string` | Required | The unique identifier given by the FI for each transaction. |
| `category` | `string` | Required | The categorization of the transaction. |

## Example (as JSON)

```json
{
  "id": 100000527471,
  "amount": 1802.22,
  "postedDate": 1559241000,
  "description": "FINICITY INC PAYROLL",
  "memo": "Finicity amount credit",
  "institutionTransactionId": "100000000",
  "category": "Paycheck"
}
```

