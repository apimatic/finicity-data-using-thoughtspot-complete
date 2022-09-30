
# Tp Accounts

## Structure

`TpAccounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`Account[]`](../../doc/models/account.md) | Required | - |

## Example (as JSON)

```json
{
  "accounts": [
    {
      "id": "2055",
      "number": "XXXX-XXXXXX-32765",
      "name": "Checking",
      "balance": 1266.49,
      "type": "checking",
      "aggregationStatusCode": 0,
      "status": "active",
      "customerId": "41442",
      "institutionId": "101732",
      "balanceDate": 1422421087,
      "aggregationSuccessDate": 1422399293,
      "aggregationAttemptDate": 1422395888,
      "createdDate": 1422395818,
      "currency": "USD",
      "lastTransactionDate": 1422421087,
      "institutionLoginId": 9764,
      "displayPosition": 1
    },
    {
      "id": "5027",
      "number": "XXXX-XXXXXX-36174",
      "name": "Credit Card",
      "balance": -1547.62,
      "type": "creditCard",
      "aggregationStatusCode": 0,
      "status": "active",
      "customerId": "41442",
      "institutionId": "101732",
      "balanceDate": 1422342000,
      "aggregationSuccessDate": 1422358530,
      "aggregationAttemptDate": 1422358530,
      "createdDate": 1420653087,
      "currency": "USD",
      "lastTransactionDate": 1422342000,
      "institutionLoginId": 9764,
      "displayPosition": 2
    },
    {
      "id": "1234",
      "number": "XXXX-XXXXXX-1234",
      "name": "Rewards Card",
      "balance": -3454.21,
      "type": "creditCard",
      "status": "pending",
      "customerId": "41442",
      "institutionId": "101732",
      "createdDate": 1420653087,
      "currency": "USD",
      "institutionLoginId": 9764,
      "displayPosition": 3
    }
  ]
}
```

