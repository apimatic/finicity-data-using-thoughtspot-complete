
# VOE Transactions Report Record

## Structure

`VOETransactionsReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's report ID |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `gseEnabled` | `boolean` | Required | Finicity Internal Use Only |
| `customerType` | `string` | Required | Customer type |
| `customerId` | `bigint` | Required | Finicity ID for the customer |
| `requestId` | `string` | Required | Unique requestId for this specific call request |
| `title` | `string` | Required | Title of the report |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters) |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number |
| `requesterName` | `string` | Required | Name of Finicity partner requesting the report |
| `constraints` | [`VOETransactionsRequestConstraints \| undefined`](../../doc/models/voe-transactions-request-constraints.md) | Optional | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress, success, or failure |
| `createdDate` | `bigint` | Required | The date the report was generated |
| `startDate` | `bigint` | Required | The postedDate of the earliest transaction analyzed for this report |
| `endDate` | `bigint` | Required | The postedDate of the latest transaction analyzed for this report |
| `days` | `number` | Required | Number of days covered by the report |
| `seasoned` | `boolean` | Required | This will display true if the report covers more than 180 days |
| `institutions` | [`VOETransactionsReportInstitution[]`](../../doc/models/voe-transactions-report-institution.md) | Required | A list of institution records, including information about the individual accounts used in this report |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "n1rndg1iz8yy-voetransactions",
  "portfolioId": "dyr6weqd2yhb-2-port",
  "gseEnabled": true,
  "customerType": "active",
  "customerId": 1000006677,
  "requestId": "sfb7x1we9w",
  "title": "Finicity Verification of Employment - Transactions",
  "consumerId": "ac39e237c7619a4ecf014b8d399c0696",
  "consumerSsn": "6789",
  "requesterName": "Decisioning API",
  "constraints": {
    "reportId": "j7k8qbgwsa7d-voietxverify",
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
    ],
    "incomeStreamConfidenceMinimum": 50
  },
  "type": "voeTransactions",
  "status": "success",
  "createdDate": 1588350269,
  "startDate": 1572625469,
  "endDate": 1588350269,
  "days": 120,
  "seasoned": true,
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
          "aggregationStatusCode": 0,
          "incomeStreams": [
            {
              "id": "u4hstnyak45g1",
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
              "nextExpectedTransactionDate": 1698788820,
              "incomeStreamMonths": 18,
              "transactions": [
                {
                  "id": 100000527471,
                  "postedDate": 1582286400,
                  "description": "FINICITY INC PAYROLL",
                  "normalizedPayee": "Finicity",
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

