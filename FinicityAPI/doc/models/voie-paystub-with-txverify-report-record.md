
# VOIE Paystub With Txverify Report Record

## Structure

`VOIEPaystubWithTxverifyReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `gseEnabled` | `boolean` | Required | Finicity Internal Use Only<br>**Default**: `true` |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `title` | `string` | Required | Title of the report |
| `constraints` | [`VOIEPaystubWithTxverifyResponseConstraints`](../../doc/models/voie-paystub-with-txverify-response-constraints.md) | Required | - |
| `customerType` | `string` | Required | Customer type |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `numberOfBillableAssets` | `number` | Required | Total number of billable pay statements included in the report |
| `reportStyle` | `string` | Required | One of the styles of VOIE: voieWithInterview, voieWithReport, voieWithStatement |
| `assetIds` | `string[]` | Required | The pay statements included in the report |
| `payStatements` | [`VOIETxverifyPayStatement[]`](../../doc/models/voie-txverify-pay-statement.md) | Required | Extracted pay statement details, and the transaction matching summary |
| `institutions` | [`VOIETxverifyReportInstitution[]`](../../doc/models/voie-txverify-report-institution.md) | Required | Details of the financial institution accounts included in the report |

## Example (as JSON)

```json
{
  "id": "2f3z55zuwewm-voietxverify",
  "customerId": 1275320,
  "gseEnabled": true,
  "consumerId": "3f7ff2cf0ffb3d0cd59875e070c9b1d4",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "7a7qyps2iy",
  "type": "voieTxVerify",
  "status": "success",
  "createdDate": 1579819592,
  "title": "Verification of Income and Employment - Paystub (with TXVerify)",
  "constraints": {
    "accountIds": [
      "1000535275"
    ],
    "voieWithInterviewData": {
      "txVerifyInterview": [
        {
          "assetId": "6f8fb0a0-e882-4f57-b672-cf53f1397581",
          "accounts": []
        }
      ],
      "extractEarnings": true,
      "extractDeductions": false,
      "extractDirectDeposit": true
    },
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
      }
    ]
  },
  "customerType": "active",
  "portfolioId": "9qud7dtuzbew-13-port",
  "numberOfBillableAssets": 1,
  "reportStyle": "voieWithInterview",
  "assetIds": [
    "6f8fb0a0-e882-4f57-b672-cf53f1397581"
  ],
  "payStatements": {
    "payPeriod": "LastPayPeriod",
    "billable": true,
    "assetId": "6f8fb0a0-e882-4f57-b672-cf53f1397581",
    "payDate": 1559241000,
    "startDate": 1557513000,
    "endDate": 1558722600,
    "netPayCurrent": 1802.22,
    "netPayYTD": 36000.0,
    "grossPayCurrent": 24200.0,
    "grossPayYTD": 72600.0,
    "matchType": "NET_PAY_MATCH",
    "employer": {
      "name": "Rocket Surgery"
    },
    "employee": {
      "name": "Patrick Purchaser"
    },
    "payStat": {
      "name": "regular 1",
      "type": "regular",
      "description": "regular income",
      "amountCurrent": 6000.0,
      "amountYTD": 18000.0
    },
    "directDeposits": [
      {
        "fiName": "America First",
        "accountType": "Checking",
        "amountCurrent": 1744.61,
        "description": "Payroll"
      }
    ],
    "monthlyIncome": {
      "estimatedMonthlyBasePay": 2000,
      "estimatedMonthlyOvertimePay": 50,
      "estimatedMonthlyBonusPay": 20,
      "estimatedMonthlyCommissionPay": 50
    },
    "institutions": {
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
        "availableBalance": 123.45,
        "aggregationStatusCode": 0,
        "balance": 123.45,
        "balanceDate": 1588350276,
        "averageMonthlyBalance": 301.45,
        "transactions": [],
        "details": {
          "interestMarginBalance": -50000,
          "availableCashBalance": 1500,
          "vestedBalance": 300000,
          "currentLoanBalance": 0,
          "availableBalanceAmount": 2000
        },
        "incomeStream": {
          "id": "dens28i3vsch-voitxverify2",
          "name": "none",
          "status": "ACTIVE",
          "confidence": 70,
          "cadence": {
            "startDate": 1577986990,
            "stopDate": 1587986990,
            "days": 180
          },
          "netAnnual": 110475.7,
          "projectedNetAnnual": 0,
          "estimatedGrossAnnual": 0,
          "projectedGrossAnnual": 151609,
          "incomeStreamMonths": 24,
          "averageMonthlyIncomeNet": 9206.31,
          "transactions": [
            {
              "id": 100000527471,
              "amount": 1802.22,
              "postedDate": 1559241000,
              "description": "FINICITY INC PAYROLL",
              "memo": "Finicity amount credit",
              "institutionTransactionId": "100000000",
              "category": "Paycheck",
              "payStatementMatchTypes": [
                "DATE",
                "NET_AMOUNT",
                "DIRECT_DEPOSIT_AMOUNT",
                "EMPLOYER_NAME",
                "INCOME_STREAM_PAYCHECK"
              ]
            }
          ]
        },
        "incomeStreams": [
          {
            "id": "dens28i3vsch-voitxverify2",
            "name": "none",
            "status": "ACTIVE",
            "confidence": 70,
            "cadence": {
              "startDate": 1577986990,
              "stopDate": 1587986990,
              "days": 180
            },
            "netAnnual": 110475.7,
            "projectedNetAnnual": 0,
            "estimatedGrossAnnual": 0,
            "projectedGrossAnnual": 151609,
            "incomeStreamMonths": 24,
            "averageMonthlyIncomeNet": 9206.31,
            "transactions": [
              {
                "id": 100000527471,
                "amount": 1802.22,
                "postedDate": 1559241000,
                "description": "FINICITY INC PAYROLL",
                "memo": "Finicity amount credit",
                "institutionTransactionId": "100000000",
                "category": "Paycheck",
                "payStatementMatchTypes": [
                  "DATE",
                  "NET_AMOUNT",
                  "DIRECT_DEPOSIT_AMOUNT",
                  "EMPLOYER_NAME",
                  "INCOME_STREAM_PAYCHECK"
                ]
              }
            ]
          }
        ]
      }
    }
  },
  "institutions": {
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
}
```

