
# Customer Account

A customer account represents a bank account such as a checking or savings that the customer has added via the Connect interface

## Structure

`CustomerAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The generated FInicity ID of the account |
| `number` | `string` | Required | Use the `accountNumberDisplay` field. Starting July 1, 2021 the `number` field will sunset with limited support until April 1, 2022, at which time it will be deprecated (no longer available). |
| `accountNumberDisplay` | `string` | Required | The account number from a financial institution in truncated format: <br> <br> <br> <br> * Last four digits - 1234 <br> * Last four digits with suffix - 1234-9 <br> * Full value for string accounts - john@gmail.com. |
| `realAccountNumberLast4` | `number \| undefined` | Optional | The last 4 digits of the ACH account number |
| `name` | `string` | Required | The account name from the institution |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `type` | [`AccountTypeEnum`](../../doc/models/account-type-enum.md) | Required | One of the values from Account Types |
| `aggregationStatusCode` | `number \| undefined` | Optional | The status of the most recent aggregation attempt. This will not be present until you have run your first aggregation for the account. |
| `status` | `string` | Required | pending during account discovery, always active following successful account activation |
| `customerId` | `string` | Required | The Finicity ID of the customer associated with this account |
| `institutionId` | `string` | Required | The Finicity ID of the institution for this account |
| `balanceDate` | `bigint` | Required | A timestamp showing when the balance was captured (see Handling Dates and Times) |
| `aggregationSuccessDate` | `bigint \| undefined` | Optional | A timestamp showing the last successful aggregation of the account (see Handling Dates and Times). This will not be present until you have run your first aggregation for the account. |
| `aggregationAttemptDate` | `bigint \| undefined` | Optional | A timestamp showing the last aggregation attempt, whether successful or not (see Handling Dates and Times). This will not be present until you have run your first aggregation for the account. |
| `createdDate` | `bigint` | Required | A timestamp showing when the account was added to the Finicity system (see Handling Dates and Times) |
| `currency` | `string` | Required | The currency of the account |
| `lastTransactionDate` | `bigint \| undefined` | Optional | The date of the latest transaction on the account (see Handling Dates and Times). This will not be present until you have run your first aggregation for the account. |
| `oldestTransactionDate` | `bigint` | Required | The date of the oldest transaction in the transactions for the account. |
| `institutionLoginId` | `bigint` | Required | The institution login ID (see Institution Logins) |
| `detail` | [`CustomerAccountDetail \| undefined`](../../doc/models/customer-account-detail.md) | Optional | Additional Account Details |
| `position` | [`CustomerAccountPosition[] \| undefined`](../../doc/models/customer-account-position.md) | Optional | Investment holdings |
| `displayPosition` | `number` | Required | Display position of the account at the financial institution 1 being the top listed account |
| `parentAccount` | `bigint \| undefined` | Optional | The Finicity assigned accountId for the account one level higher in the student loan account hierarchy |

## Example (as JSON)

```json
{
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
```

