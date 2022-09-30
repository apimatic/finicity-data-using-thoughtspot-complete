
# Cash Flow Possible Loan Deposits

## Structure

`CashFlowPossibleLoanDeposits`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity institution ID |
| `name` | `string` | Required | Finicity institution name |
| `urlHomeApp` | `string` | Required | The URL of the Financial Institution |
| `accounts` | [`CashFlowPossibleLoanDepositsAccount[]`](../../doc/models/cash-flow-possible-loan-deposits-account.md) | Required | A list of `account` records |

## Example (as JSON)

```json
{
  "id": "102105",
  "name": "FinBank Profiles",
  "urlHomeApp": "http://www.finbank.com",
  "accounts": [
    {
      "id": "6681984",
      "ownerName": "PATRICK & LORRAINE PURCHASER",
      "ownerAddress": "7195 BELMONT ST. PARLIN, NJ 08859",
      "name": "Checking",
      "number": "XX1111",
      "type": "checking",
      "aggregationStatusCode": "0",
      "currentBalance": 100000,
      "availableBalance": 1000,
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
  ]
}
```

