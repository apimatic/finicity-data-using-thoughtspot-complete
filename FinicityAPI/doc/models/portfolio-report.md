
# Portfolio Report

## Structure

`PortfolioReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Finicity report ID |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Report type |
| `status` | `string` | Required | The status of the report |
| `createdDate` | `bigint` | Required | The date the report was generated |

## Example (as JSON)

```json
{
  "id": "7p92xyuet02h",
  "portfolioId": "zb8bfcsqz4cp-2-port",
  "type": "voa",
  "status": "success",
  "createdDate": 1587578464
}
```

