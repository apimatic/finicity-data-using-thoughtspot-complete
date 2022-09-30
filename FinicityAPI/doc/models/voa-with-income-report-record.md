
# VOA With Income Report Record

VOA with Income Report Record

## Structure

`VOAWithIncomeReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `constraints` | [`ReportConstraints \| undefined`](../../doc/models/report-constraints.md) | Optional | - |
| `source` | `string \| undefined` | Optional | - |
| `customerType` | `string` | Required | Customer type |
| `title` | `string` | Required | Title of the report |
| `startDate` | `bigint` | Required | The postedDate of the earliest transaction analyzed for this report |
| `endDate` | `bigint` | Required | The postedDate of the latest transaction analyzed for this report |
| `days` | `bigint` | Required | Number of days covered by the report |
| `seasoned` | `boolean` | Required | This will display true if the report covers more than 180 days |
| `gseEnabled` | `boolean` | Required | Finicity Internal Use Only |
| `consolidatedAvailableBalance` | `number` | Required | Sum of Available Balance for all of the accounts included in the report |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `institutions` | [`VOAWithIncomeReportInstitution[]`](../../doc/models/voa-with-income-report-institution.md) | Required | A list of institution records, including information about the individual accounts used in this report |
| `assets` | [`PrequalificationReportAssetSummary`](../../doc/models/prequalification-report-asset-summary.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "u4hstnyak45g",
  "customerId": 1000006677,
  "consumerId": "ac39e237c7619a4ecf014b8d399c0696",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "sfb7x1we9w",
  "type": "voaHistory",
  "status": "success",
  "createdDate": 1588350269,
  "customerType": "active",
  "title": "Finicity Verification of Asset and Income - Transactions",
  "startDate": 1572625469,
  "endDate": 1588350269,
  "days": 230,
  "seasoned": true,
  "gseEnabled": true,
  "consolidatedAvailableBalance": 2345.0,
  "portfolioId": "dyr6weqd2yhb-1-port",
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
      "availableBalance": 501.24,
      "aggregationStatusCode": 0,
      "balance": 501.24,
      "balanceDate": 1588350276,
      "averageMonthlyBalance": 501.02,
      "transactions": [
        {
          "id": 100000527471,
          "amount": 22.21,
          "postedDate": 1582286400,
          "description": "FINICITY INC PAYROLL",
          "memo": "Finicity amount credit",
          "normalizedPayee": "Finicity",
          "institutionTransactionId": "100000000",
          "category": "Paycheck"
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
        "availableBalanceAmount": 1000
      },
      "incomeStreams": {
        "id": "dens28i3vsch-voah",
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
            "normalizedPayee": "Finicity",
            "institutionTransactionId": "100000000",
            "category": "Paycheck"
          }
        ]
      },
      "totNumberInsufficientFundsFeeDebitTxAccount": 0,
      "totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount": 0,
      "totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount": 0,
      "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 120
    }
  },
  "assets": {
    "type": "checking",
    "availableBalance": 1000,
    "currentBalance": 1000,
    "twoMonthAverage": -1865.96,
    "sixMonthAverage": -7616.01,
    "beginningBalance": -17795.6
  }
}
```

