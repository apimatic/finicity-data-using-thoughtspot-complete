
# Customer Accounts

The response to calls to refresh accounts or get customer accounts is a list of account in the `accounts` array. A customer account represents a bank account such as a checking or savings that the customer has added via the Connect interface

## Structure

`CustomerAccounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`CustomerAccount[]`](../../doc/models/customer-account.md) | Required | List of customer accounts |

## Example (as JSON)

```json
{
  "accounts": {
    "id": "1014136057",
    "number": "",
    "accountNumberDisplay": "8888",
    "realAccountNumberLast4": 5678,
    "name": "Super Checking",
    "balance": 7456,
    "type": "checking",
    "aggregationStatusCode": 0,
    "status": "active",
    "customerId": "1005061234",
    "institutionId": "102224",
    "balanceDate": 1588797048,
    "aggregationSuccessDate": 1588797048,
    "aggregationAttemptDate": 1588797048,
    "createdDate": 1588305190,
    "currency": "USD",
    "lastTransactionDate": 1588710645,
    "oldestTransactionDate": 1588710645,
    "institutionLoginId": 1007302745,
    "detail": {
      "availableBalanceAmount": 1234.56
    },
    "position": [
      {
        "id": 122147546,
        "symbol": "JPM",
        "fundName": "JPMORGAN CHASE & CO",
        "transactionType": "Margin",
        "marketValue": 914.2,
        "costBasis": 925.5,
        "units": 10,
        "unitPrice": 91.42,
        "status": "A",
        "invSecurityType": "OTHERINFO"
      },
      {
        "id": 122147547,
        "symbol": "KO",
        "fundName": "COCA COLA CO",
        "transactionType": "Margin",
        "marketValue": 1002.98,
        "costBasis": 981.88,
        "units": 22,
        "unitPrice": 45.59,
        "status": "A",
        "invSecurityType": "OTHERINFO"
      }
    ],
    "displayPosition": 1
  }
}
```

