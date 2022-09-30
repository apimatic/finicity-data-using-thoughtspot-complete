
# VOI Report Institution Record

VOI Report Institution Record

## Structure

`VOIReportInstitutionRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`VOIReportAccountRecord[]`](../../doc/models/voi-report-account-record.md) | Required | An array of accounts |

## Example (as JSON)

```json
{
  "id": 101732,
  "name": "FinBank",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "accounts": {
    "id": 1000023996,
    "number": "1111",
    "name": "Checking",
    "type": "checking",
    "aggregationStatusCode": 0,
    "incomeStreams": {
      "id": "dens28i3vsch-voi1",
      "name": "none",
      "status": "ACTIVE",
      "estimateInclusion": "MODERATE",
      "confidence": 70,
      "cadence": {
        "startDate": 1577986990,
        "stopDate": 1587986990,
        "days": 14
      },
      "netMonthly": [
        {
          "month": 1522562400,
          "net": 2004.77
        }
      ],
      "netAnnual": 110475.7,
      "projectedNetAnnual": 0.0,
      "estimatedGrossAnnual": null,
      "projectedGrossAnnual": 151609.0,
      "averageMonthlyIncomeNet": 9206.31,
      "incomeStreamMonths": 18,
      "transactions": [
        {
          "id": 100000527471,
          "amount": 22.21,
          "postedDate": 1582286400,
          "description": "FINICITY INC PAYROLL",
          "memo": "Finicity amount credit",
          "institutionTransactionId": "100000000",
          "category": "Paycheck"
        }
      ]
    },
    "balance": 714.16,
    "averageMonthlyBalance": 720.75,
    "transactions": [],
    "availableBalance": 714.16,
    "currentBalance": 714.16,
    "beginningBalance": 714.77,
    "miscDeposits": [
      {
        "id": 100000527471,
        "amount": 22.21,
        "postedDate": 1582286400,
        "description": "FINICITY INC PAYROLL",
        "memo": "Finicity amount credit",
        "institutionTransactionId": "100000000",
        "category": "Paycheck"
      }
    ]
  }
}
```

