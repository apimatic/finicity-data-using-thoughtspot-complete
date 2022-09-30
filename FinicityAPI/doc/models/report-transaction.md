
# Report Transaction

## Structure

`ReportTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | The Finicity ID of the transaction |
| `amount` | `number \| undefined` | Optional | The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. |
| `postedDate` | `bigint \| undefined` | Optional | A timestamp showing when the transaction was posted or cleared by the institution (see Handling Dates and Times) |
| `description` | `string \| undefined` | Optional | The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of “No description provided by institution”. All other values are provided by the institution. |
| `memo` | `string \| undefined` | Optional | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |
| `normalizedPayee` | `string \| undefined` | Optional | A normalized payee, derived from the transaction's description and memo fields. |
| `institutionTransactionId` | `string \| undefined` | Optional | The unique identifier given by the FI for each transaction. |
| `category` | `string \| undefined` | Optional | The categorization of the transaction. |
| `type` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | One of the values from Transaction Types (optional) |
| `payStatementMatchTypes` | [`ReportTransactionPayStatementMatchTypesEnum[] \| undefined`](../../doc/models/report-transaction-pay-statement-match-types-enum.md) | Optional | Field to indicate how transaction is matched with pay statement |
| `bestRepresentation` | `string \| undefined` | Optional | Combines the description and memo data together, removes any duplicated information from description to memo, and removes any numbers or special characters |
| `securityType` | `string \| undefined` | Optional | The type of investment security (VOA only) |
| `symbol` | `string \| undefined` | Optional | Investment symbol (VOA only) |
| `commission` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 100000408657,
  "accountId": 1000018102,
  "amount": 1928.1,
  "createdDate": 1587576293,
  "customerId": "1000005494",
  "description": "ACH Deposit Finicity",
  "institutionTransactionId": "0000000000",
  "postedDate": 1540641600,
  "status": "active",
  "transactionDate": 1540641600
}
```

