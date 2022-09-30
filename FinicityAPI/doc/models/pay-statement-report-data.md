
# Pay Statement Report Data

## Structure

`PayStatementReportData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetIds` | `string[]` | Required | The list of pay statement asset IDs. |
| `extractEarnings` | `boolean \| undefined` | Optional | Field to indicate whether to extract the earnings on all pay statements.<br>**Default**: `true` |
| `extractDeductions` | `boolean \| undefined` | Optional | Field to indicate whether to extract the deductions on all pay statements.<br>**Default**: `false` |
| `extractDirectDeposit` | `boolean \| undefined` | Optional | Field to indicate whether to extract the direct deposits on all pay statements.<br>**Default**: `true` |

## Example (as JSON)

```json
{
  "assetIds": [
    "6f8fb0a0-e882-4f57-b672-cf53f1397581"
  ],
  "extractEarnings": true,
  "extractDeductions": false,
  "extractDirectDeposit": true
}
```

