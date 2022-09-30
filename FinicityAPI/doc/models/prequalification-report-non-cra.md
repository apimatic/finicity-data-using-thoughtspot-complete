
# Prequalification Report Non CRA

The fields used for the Prequalification AssetReady Report (non-CRA products).

## Structure

`PrequalificationReportNonCRA`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
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
| `institutions` | [`PrequalificationNonCRAReportsInstitutions[]`](../../doc/models/prequalification-non-cra-reports-institutions.md) | Required | A list of institution records, including information about the individual accounts used in this report |
| `assets` | [`AssetSummaryForPrequalificationNonCRAReports`](../../doc/models/asset-summary-for-prequalification-non-cra-reports.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "rceiqx616awa-assetsummary",
  "customerId": 1000006677,
  "requesterName": "Decisioning API",
  "requestId": "sfb7xp4iui",
  "type": "assetSummary",
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
    ]
  },
  "customerType": "active",
  "title": "Finicity Asset Ready Report (non-CRA)",
  "startDate": 1572625469,
  "endDate": 1588350269,
  "days": 230,
  "seasoned": true,
  "gseEnabled": true,
  "consolidatedAvailableBalance": 1929.57,
  "portfolioId": "0whcism47ttt-5-port",
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
          "availableBalance": 0,
          "aggregationStatusCode": 0,
          "balance": 501.24,
          "balanceDate": 1588350276,
          "averageMonthlyBalance": 501.02,
          "transactions": [],
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
          "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 0,
          "totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount": 0
        }
      ]
    }
  ],
  "assets": {
    "currentBalance": 1000,
    "twoMonthAverage": -1865.96,
    "sixMonthAverage": -7616.01,
    "beginningBalance": -17795.6
  }
}
```

