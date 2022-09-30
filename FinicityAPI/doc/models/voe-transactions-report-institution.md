
# VOE Transactions Report Institution

## Structure

`VOETransactionsReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`VOETransactionsReportAccount[]`](../../doc/models/voe-transactions-report-account.md) | Required | An array of accounts |

## Example (as JSON)

```json
{
  "id": 101732,
  "name": "FinBank",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "accounts": {
    "id": 1000023996,
    "number": "1111",
    "ownerName": "JOHN DOE",
    "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
    "name": "Checking",
    "type": "checking",
    "aggregationStatusCode": 0,
    "incomeStreams": {
      "id": "dens28i3vsch-voetransactions",
      "name": "none",
      "status": "ACTIVE",
      "estimateInclusion": "MODERATE",
      "confidence": 70,
      "cadence": {
        "startDate": 1577986990,
        "stopDate": 1587986990,
        "days": 14
      },
      "daysSinceLastTransaction": 15,
      "nextExpectedTransactionDate": 1572625469,
      "incomeStreamMonths": 18,
      "transactions": {
        "id": 100000527471,
        "postedDate": 1582286400,
        "description": "FINICITY INC PAYROLL",
        "normalizedPayee": "Finicity",
        "institutionTransactionId": "100000000",
        "category": "Paycheck"
      }
    }
  }
}
```

