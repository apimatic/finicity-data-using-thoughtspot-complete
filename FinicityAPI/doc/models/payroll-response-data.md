
# Payroll Response Data

## Structure

`PayrollResponseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payrollDataRetrievalId` | `string` | Required | An id to identify the data retrieved from the payroll providers for the report. |
| `employerNames` | `string[]` | Required | An array of employer names that the consumer submitted after completing the Connect application. |

## Example (as JSON)

```json
{
  "payrollDataRetrievalId": "hahvhe2k0000",
  "employerNames": [
    "ACME INC"
  ]
}
```

