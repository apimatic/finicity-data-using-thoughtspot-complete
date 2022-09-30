
# Transactions Report Account

The fields used for the Transaction History Report (CRA products).

## Structure

`TransactionsReportAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The Finicity account ID. |
| `name` | `string` | Required | The account name from the financial institution. |
| `number` | `string` | Required | The account number from the financial institution (obfuscated). |
| `type` | [`AccountTypeEnum`](../../doc/models/account-type-enum.md) | Required | All Types: checking, savings, loan, mortgage, credit card, CD, MM, investment, and more. |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt for this account. Note: non-zero means the account was not accessed successfully for this report, and additional fields for this account may not be reliable. |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate. |
| `balanceDate` | `bigint` | Required | A timestamp showing when the balance was captured. |
| `transactions` | [`TransactionsReportTransaction[]`](../../doc/models/transactions-report-transaction.md) | Required | A list of transactions associated with the account. |

## Example (as JSON)

```json
{
  "id": 1000075473,
  "name": "Super Checking",
  "number": "5015",
  "type": "checking",
  "aggregationStatusCode": 0,
  "balance": 1000.0,
  "balanceDate": 1594676289,
  "transactions": [
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
  ]
}
```

