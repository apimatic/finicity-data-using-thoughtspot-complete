
# Cash Flow Possible Loan Deposits Account

## Structure

`CashFlowPossibleLoanDepositsAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity account ID |
| `ownerName` | `string` | Required | The name(s) of the account owner(s), retrieved from the institution. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner, retrieved from the institution. |
| `name` | `string` | Required | The account name from the institution |
| `number` | `string` | Required | The account number from the institution (obfuscated) |
| `type` | `string` | Required | CFR: `ALL` (`checking` / `savings` / `loan` / `mortgage` / `credit card` / `CD` / `MM` / `investment`…) |
| `aggregationStatusCode` | `string` | Required | The status of the most recent aggregation attempt for this account (non-zero means the account was not accessed successfully for this report, and additional fields for this account may not be reliable) |
| `currentBalance` | `number` | Required | The cleared balance of the account as-of `balanceDate` |
| `availableBalance` | `number` | Required | Available balance |
| `balanceDate` | `bigint` | Required | A timestamp showing when the `balance` was captured |
| `transactions` | [`CashFlowTransactions[]`](../../doc/models/cash-flow-transactions.md) | Required | a `transactions` record |

## Example (as JSON)

```json
{
  "id": "6681984",
  "ownerName": "PATRICK & LORRAINE PURCHASER",
  "ownerAddress": "7195 BELMONT ST. PARLIN, NJ 08859",
  "name": "Checking",
  "number": "XX1111",
  "type": "checking",
  "aggregationStatusCode": "0",
  "currentBalance": 100000.0,
  "availableBalance": 1000.0,
  "balanceDate": 1614880526,
  "transactions": [
    {
      "id": "100671406523",
      "amount": -81.7,
      "postedDate": 1614859200,
      "description": "TMOBILE*AUTO PAY",
      "normalizedPayee": "T-Mobile",
      "institutionTransactionId": "0000000000",
      "category": "Mobile Phone"
    }
  ]
}
```

