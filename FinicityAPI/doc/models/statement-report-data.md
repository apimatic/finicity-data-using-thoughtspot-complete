
# Statement Report Data

## Structure

`StatementReportData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `bigint` | Required | Specify the account to retrieve the statement for and display in the report. |
| `index` | `bigint \| undefined` | Optional | Index of statement to retrieve (default is 1, maximum is 6) |

## Example (as JSON)

```json
{
  "accountId": 1000076901
}
```

