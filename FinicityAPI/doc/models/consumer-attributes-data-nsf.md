
# Consumer Attributes Data NSF

## Structure

`ConsumerAttributesDataNSF`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyNSFOccurrences` | `unknown` | Required | The number of non-sufficient funds occurrences per calendar month. |
| `monthlyLateFeeOccurrences` | `unknown` | Required | The number of late fee occurrences. |

## Example (as JSON)

```json
{
  "monthlyNSFOccurrences": {
    "monthlyNSFOccurrences": {
      "2021-04-30": 1,
      "2021-07-31": 1
    }
  },
  "monthlyLateFeeOccurrences": {}
}
```

