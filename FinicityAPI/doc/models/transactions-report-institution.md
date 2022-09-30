
# Transactions Report Institution

The fields used for the Transaction History Report (CRA products).

## Structure

`TransactionsReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The Finicity institution ID. |
| `name` | `string` | Required | The Finicity institution name. |
| `urlHomeApp` | `string` | Required | The URL of the financial institution. |
| `accounts` | [`TransactionsReportAccount[]`](../../doc/models/transactions-report-account.md) | Required | A list of account records. |

## Example (as JSON)

```json
{
  "id": 102105,
  "name": "FinBank Profiles - A",
  "urlHomeApp": "http://www.finbank.com",
  "accounts": [
    {
      "id": 1000075473,
      "number": "5015",
      "name": "Super Checking",
      "type": "checking",
      "availableBalance": 1000,
      "aggregationStatusCode": 0,
      "balance": 1000,
      "balanceDate": 1594676289,
      "transactions": [
        {
          "id": 100001490719,
          "amount": -224,
          "postedDate": 1594382400,
          "description": "ACH Withdrawal AMERICA FIRST CR",
          "normalizedPayee": "America First Cr",
          "institutionTransactionId": "0000000000",
          "category": "Income",
          "memo": "AMERICA FIRST CR"
        },
        {
          "id": 100001490897,
          "amount": -81.7,
          "postedDate": 1594123200,
          "description": "TMOBILE*AUTO PAY",
          "normalizedPayee": "T-Mobile",
          "institutionTransactionId": "0000000000",
          "category": "Mobile Phone",
          "memo": "TMOBILE debit"
        }
      ]
    }
  ]
}
```

