
# Auditable Report

## Structure

`AuditableReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Report id |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string \| undefined` | Optional | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string \| undefined` | Optional | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `constraints` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Required | - |
| `source` | `string \| undefined` | Optional | - |
| `customerType` | `string` | Required | Customer type |
| `title` | `string` | Required | Title of the report |
| `startDate` | `bigint` | Required | The postedDate of the earliest transaction analyzed for this report |
| `endDate` | `bigint` | Required | The postedDate of the latest transaction analyzed for this report |
| `days` | `bigint` | Required | Number of days covered by the report |
| `seasoned` | `boolean` | Required | This will display true if the report covers more than 180 days |
| `gseEnabled` | `boolean` | Required | - |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `consolidatedAvailableBalance` | `number` | Required | - |
| `institutions` | [`ReportInstitution[]`](../../doc/models/report-institution.md) | Required | A list of institution records, including information about the individual accounts used in this report |

## Example (as JSON)

```json
{
  "id": "u4hstnnak45g",
  "customerId": 1000006677,
  "requesterName": "Decisioning API",
  "requestId": "sfb7xp439w",
  "type": "voa",
  "status": "success",
  "createdDate": 1588350269,
  "constraints": {
    "accountIds": [
      "1000535275",
      "1000535276"
    ],
    "fromDate": 1577986990,
    "reportCustomFields": [
      {
        "label": "loanID",
        "value": "12345",
        "shown": true
      },
      {
        "label": "trackingID",
        "value": "5555",
        "shown": true
      },
      {
        "label": "loanType",
        "value": "car",
        "shown": false
      },
      {
        "label": "vendorID",
        "value": "1613aa23",
        "shown": true
      },
      {
        "label": "vendorName",
        "value": "PSC Finance",
        "shown": false
      }
    ],
    "showNsf": false
  },
  "customerType": "active",
  "title": "Finicity Verification of Assets",
  "startDate": 1572625469,
  "endDate": 1588350269,
  "days": null,
  "seasoned": true,
  "gseEnabled": true,
  "portfolioId": "dyr6qvqd2yhb-1-port",
  "consolidatedAvailableBalance": 2345.0,
  "institutions": [
    {
      "id": 101732,
      "name": "FinBank",
      "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
      "accounts": [
        {
          "id": 1000023996,
          "number": "1111",
          "ownerName": "JOHN DOE",
          "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
          "name": "Checking",
          "type": "checking",
          "availableBalance": 501.24,
          "aggregationStatusCode": 0,
          "balance": 501.24,
          "balanceDate": 1588350276,
          "averageMonthlyBalance": 501.02,
          "transactions": [
            {
              "id": 100000408657,
              "accountId": 1000018102,
              "amount": 1928.1,
              "createdDate": 1587576293,
              "customerId": "1000005494",
              "description": "ACH Deposit Finicity",
              "institutionTransactionId": "0000000000",
              "postedDate": 1540641600,
              "status": "active",
              "transactionDate": 1540641600
            }
          ],
          "asset": {
            "type": "checking",
            "currentBalance": 1000,
            "twoMonthAverage": -1865.96,
            "sixMonthAverage": -7616.01,
            "beginningBalance": -17795.6
          },
          "details": {
            "interestMarginBalance": -50000,
            "availableCashBalance": 1500,
            "vestedBalance": 300000,
            "currentLoanBalance": 0,
            "availableBalanceAmount": 0
          },
          "incomeStream": {
            "id": "dens28i3vsch-voi1",
            "name": "none",
            "status": "ACTIVE",
            "estimateInclusion": "MODERATE",
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
            "estimatedGrossAnnual": 0,
            "projectedGrossAnnual": 151609,
            "averageMonthlyIncomeNet": 9206.31,
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
          "incomeStreams": [
            {
              "id": "dens28i3vsch-voi1",
              "name": "none",
              "status": "ACTIVE",
              "estimateInclusion": "MODERATE",
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
              "estimatedGrossAnnual": 0,
              "projectedGrossAnnual": 151609,
              "averageMonthlyIncomeNet": 9206.31,
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
            }
          ]
        }
      ]
    }
  ]
}
```

