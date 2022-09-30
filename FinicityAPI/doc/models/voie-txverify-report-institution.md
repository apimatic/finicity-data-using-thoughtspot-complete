
# VOIE Txverify Report Institution

## Structure

`VOIETxverifyReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The institution ID |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution’s primary home page |
| `accounts` | [`VOIETxverifyReportAccountForInstitutions[]`](../../doc/models/voie-txverify-report-account-for-institutions.md) | Required | An array of accounts |

## Example (as JSON)

```json
{
  "id": 101732,
  "name": "FinBank",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "accounts": [
    {
      "id": 1000023996,
      "ownerName": "JOHN DOE",
      "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
      "name": "Checking",
      "number": "1111",
      "type": "checking",
      "aggregationStatusCode": 0,
      "incomeStreams": [
        {
          "id": "dens28i3vsch-voietxverify",
          "name": "none",
          "status": "ACTIVE",
          "confidence": 70,
          "cadence": {
            "startDate": 1577986990,
            "stopDate": 1587986990,
            "days": 180
          },
          "netMonthly": [
            {
              "month": 1522562400,
              "net": 2004.77
            }
          ],
          "netAnnual": 110475.7,
          "projectedNetAnnual": 0,
          "estimatedGrossAnnual": 12392.1,
          "projectedGrossAnnual": 151609,
          "averageMonthlyIncomeNet": 9206.31,
          "incomeStreamMonths": 24,
          "transactions": [
            {
              "id": 100000527471,
              "amount": 1802.22,
              "postedDate": 1559241000,
              "description": "FINICITY INC PAYROLL",
              "memo": "Finicity amount credit",
              "institutionTransactionId": "100000000",
              "category": "Paycheck"
            }
          ]
        }
      ],
      "balance": 123.45,
      "averageMonthlyBalance": 301.45,
      "transactions": [],
      "availableBalance": 123.45
    }
  ]
}
```

