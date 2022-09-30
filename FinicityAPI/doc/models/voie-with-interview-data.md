
# VOIE With Interview Data

## Structure

`VOIEWithInterviewData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txverifyInterview` | [`TxverifyInterview[]`](../../doc/models/txverify-interview.md) | Required | An array of txVerifyInterview objects. |
| `extractEarnings` | `boolean \| undefined` | Optional | Field to indicate whether to extract the earnings on all pay statements. This is an optional field.<br>**Default**: `true` |
| `extractDeductions` | `boolean \| undefined` | Optional | Field to indicate whether to extract the deductions on all pay statements. This is an optional field.<br>**Default**: `false` |
| `extractDirectDeposit` | `boolean \| undefined` | Optional | Field to indicate whether to extract the direct deposits on all pay statements. This is an optional field.<br>**Default**: `true` |

## Example (as JSON)

```json
{
  "txVerifyInterview": [
    {
      "assetId": "6f8fb0a0-e882-4f57-b672-cf53f1397581"
    }
  ],
  "extractEarnings": true,
  "extractDeductions": false,
  "extractDirectDeposit": true
}
```

