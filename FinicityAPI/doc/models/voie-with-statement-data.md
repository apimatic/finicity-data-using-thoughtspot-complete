
# VOIE With Statement Data

## Structure

`VOIEWithStatementData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetIds` | `string[]` | Required | The list of pay statement asset IDs. |
| `extractEarnings` | `boolean \| undefined` | Optional | Field to indicate whether to extract the earnings on all pay statements. This is an optional field.<br>**Default**: `true` |
| `extractDeductions` | `boolean \| undefined` | Optional | Field to indicate whether to extract the deductions on all pay statements. This is an optional field.<br>**Default**: `false` |
| `extractDirectDeposit` | `boolean \| undefined` | Optional | Field to indicate whether to extract the direct deposits on all pay statements. This is an optional field.<br>**Default**: `true` |

## Example (as JSON)

```json
{
  "assetIds": [
    "d50ed92f-543b-431c-8286-c8b8f6556679"
  ],
  "extractEarnings": true,
  "extractDeductions": false,
  "extractDirectDeposit": true
}
```

