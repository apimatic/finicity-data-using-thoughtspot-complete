
# Transactions Report Record

The fields used for the Transaction History Report (CRA products).

## Structure

`TransactionsReportRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity report ID (max 32 characters) |
| `title` | `string` | Required | Finicity Transactions Report |
| `customerType` | `string` | Required | active or testing |
| `customerId` | `bigint` | Required | Finicity customer ID |
| `consumerId` | `string` | Required | Finicity report consumer ID (max length 32 characters). |
| `consumerSsn` | `string` | Required | Last 4 digits of the report consumer’s Social Security number. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | inProgress or success or failure. |
| `createdDate` | `bigint` | Required | The date the report was generated. |
| `constraints` | [`TransactionReportConstraints`](../../doc/models/transaction-report-constraints.md) | Required | Specifies use of accountIds, reportCustomFields, includePending, fromDate, and toDate when creating the report. |
| `startDate` | `bigint` | Required | The postedDate of the earliest transaction analyzed for this report. |
| `endDate` | `bigint` | Required | The postedDate of the latest transaction analyzed for this report. |
| `days` | `bigint` | Required | Number of days covered by the report. |
| `seasoned` | `boolean` | Required | true: if the report covers more than 365 days. |
| `gseEnabled` | `boolean` | Required | Finicity internal use only. |
| `portfolioId` | `string` | Required | Finicity’s portfolio ID associated with the consumer on the report. |
| `institutions` | [`TransactionsReportInstitution[]`](../../doc/models/transactions-report-institution.md) | Required | A list of institution records, including information about the individual accounts used in this report. See the Institution Record structure. |

## Example (as JSON)

```json
{
  "id": "1000075473",
  "title": "Finicity Transactions Report",
  "customerType": "testing",
  "customerId": 1000018865,
  "consumerId": "a925b07c9e028c680ad9c1d18d2e7199",
  "consumerSsn": "6789",
  "type": "transactions",
  "status": "success",
  "createdDate": 1594678007,
  "constraints": {
    "accountIds": [
      "1000075473"
    ],
    "fromDate": 1578952809,
    "toDate": 1594677609,
    "includePending": true,
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
  "startDate": 1579348800,
  "endDate": 1594382400,
  "days": 174,
  "seasoned": false,
  "gseEnabled": true,
  "portfolioId": "wqbh0r2kbv5g-4-port",
  "institutions": [
    {
      "id": 102105,
      "name": "FinBank Profiles - A",
      "urlHomeApp": "http://www.finbank.com",
      "accounts": [
        {
          "id": 1000075473,
          "number": "5015",
          "name": "Super Checking",
          "type": "checking",
          "availableBalance": 1000,
          "aggregationStatusCode": 0,
          "balance": 1000,
          "balanceDate": 1594676289,
          "transactions": [
            {
              "id": 100001490719,
              "amount": -224,
              "postedDate": 1594382400,
              "description": "ACH Withdrawal AMERICA FIRST CR",
              "normalizedPayee": "America First Cr",
              "institutionTransactionId": "0000000000",
              "category": "Income",
              "memo": "AMERICA FIRST CR"
            },
            {
              "id": 100001490897,
              "amount": -81.7,
              "postedDate": 1594123200,
              "description": "TMOBILE*AUTO PAY",
              "normalizedPayee": "T-Mobile",
              "institutionTransactionId": "0000000000",
              "category": "Mobile Phone",
              "memo": "TMOBILE debit"
            }
          ]
        }
      ]
    }
  ]
}
```

