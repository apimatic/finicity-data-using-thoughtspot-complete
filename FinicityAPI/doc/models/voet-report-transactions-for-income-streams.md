
# VOET Report Transactions for Income Streams

## Structure

`VOETReportTransactionsForIncomeStreams`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The Finicity ID of the transaction |
| `postedDate` | `bigint` | Required | A timestamp showing when the transaction was posted or cleared by the institution (see Handling Dates and Times) |
| `description` | `string` | Required | The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of “No description provided by institution”. All other values are provided by the institution. |
| `normalizedPayee` | `string` | Required | A normalized payee, derived from the transaction's description and memo fields. |
| `institutionTransactionId` | `string` | Required | The unique identifier given by the FI for each transaction. |
| `category` | `string` | Required | The categorization of the transaction. |

## Example (as JSON)

```json
{
  "id": 100000527471,
  "postedDate": 1582286400,
  "description": "FINICITY INC PAYROLL",
  "normalizedPayee": "Finicity",
  "institutionTransactionId": "100000000",
  "category": "Paycheck"
}
```

