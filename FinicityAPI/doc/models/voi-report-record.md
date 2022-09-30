
# VOI Report Record

## Structure

`VOIReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Report id |
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
| `customerType` | `string` | Required | Customer type |
| `title` | `string` | Required | Title of the report |
| `startDate` | `bigint` | Required | The postedDate of the earliest transaction analyzed for this report |
| `endDate` | `bigint` | Required | The postedDate of the latest transaction analyzed for this report |
| `days` | `bigint` | Required | Number of days covered by the report |
| `seasoned` | `boolean` | Required | This will display true if the report covers more than 180 days |
| `gseEnabled` | `boolean` | Required | Finicity Internal Use Only |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `institutions` | [`VOIReportInstitutionRecord[]`](../../doc/models/voi-report-institution-record.md) | Required | A list of institution records, including information about the individual accounts used in this report<br>**Constraints**: *Minimum Items*: `1` |
| `income` | [`ReportIncomeStreamSummary[]`](../../doc/models/report-income-stream-summary.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "u4hstnnaewetr-voi",
  "customerId": 1000006677,
  "consumerId": "ac39e237c7619a4ecf014b8d399c0696",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "requestId": "sfb7xp4wer",
  "type": "voi",
  "status": "success",
  "createdDate": 1588350269,
  "customerType": "active",
  "title": "Finicity Verification of Income",
  "startDate": 1572625469,
  "endDate": 1588350269,
  "days": 200,
  "seasoned": true,
  "gseEnabled": true,
  "portfolioId": "dyr6qvqd2erw-1-port",
  "institutions": {
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
  },
  "income": [
    {
      "confidenceType": "MODERATE",
      "netMonthly": [
        {
          "month": 1522562400,
          "net": 2004.77
        }
      ],
      "incomeEstimate": {
        "netAnnual": 1000.12,
        "projectedNetAnnual": 1500.23,
        "estimatedGrossAnnual": 2000.12,
        "projectedGrossAnnual": 2500.23
      }
    }
  ]
}
```

