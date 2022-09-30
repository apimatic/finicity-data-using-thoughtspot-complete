
# Prequalification Report Response

The fields used for the Prequalification AssetReady Report (CRA products).

## Structure

`PrequalificationReportResponse`

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
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `institutions` | [`PrequalificationReportInstitution[]`](../../doc/models/prequalification-report-institution.md) | Required | A list of institution records, including information about the individual accounts used in this report |
| `assets` | [`AssetSummaryForPrequalificationReports`](../../doc/models/asset-summary-for-prequalification-reports.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "88w4fbssrbja-prequalvoa",
  "customerId": 1000006677,
  "requesterName": "Decisioning API",
  "requestId": "sfb7xacr9w",
  "type": "preQualVoa",
  "status": "success",
  "createdDate": 1588350269,
  "customerType": "active",
  "title": "Finicity Asset Ready Report (CRA)",
  "startDate": 1572625469,
  "endDate": 1588350269,
  "days": 230,
  "seasoned": true,
  "gseEnabled": true,
  "consolidatedAvailableBalance": 1929.57,
  "portfolioId": "0whcism47a34-5-port",
  "consumerId": "ac39e237c7619a4ecf014b8d399c0696",
  "consumerSsn": "6789",
  "institutions": {
    "id": 101732,
    "name": "FinBank",
    "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
    "accounts": {
      "id": 1000023996,
      "number": "1111",
      "ownerName": "JOHN DOE",
      "ownerAddress": "123 GAINSVILLE STREET BUFORD, GA 84937",
      "name": "Checking",
      "type": "checking",
      "aggregationStatusCode": 0,
      "balance": 501.24,
      "balanceDate": 1588350276,
      "averageMonthlyBalance": 501.02,
      "transactions": [],
      "asset": {
        "type": "checking",
        "availableBalance": 1000,
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
  },
  "assets": {
    "currentBalance": 1446.7,
    "availableBalance": 1446.7,
    "twoMonthAverage": 1451.84,
    "sixMonthAverage": 1453.48,
    "beginningBalance": 1455.02
  }
}
```

