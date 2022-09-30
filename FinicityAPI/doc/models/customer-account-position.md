
# Customer Account Position

Details for investment account holdings

## Structure

`CustomerAccountPosition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | The id of the investment position |
| `description` | `string \| undefined` | Optional | The description of the holding |
| `cusipNo` | `string \| undefined` | Optional | A nine-digit numeric or nine-character alphanumeric code that identifies a North American financial security (will be changed to SecurityIdType in the next API version, v2) |
| `cusipNoType` | `string \| undefined` | Optional | Type of the security, attached Finicity's cusipNo field (will be changed to SecurityIdType in the next API version, v2) |
| `symbol` | `string \| undefined` | Optional | The investment position's market/ticker symbol |
| `units` | `number \| undefined` | Optional | The quantity of investment holdings |
| `currentPrice` | `number \| undefined` | Optional | The current price of the investment holding |
| `securityName` | `string \| undefined` | Optional | The security name for the investment holding |
| `transactionType` | `string \| undefined` | Optional | The transaction type of the holding. Cash, Margin, POSSTOCK, Etc |
| `marketValue` | `number \| undefined` | Optional | Market value of an investment position at the time of retrieval |
| `costBasis` | `number \| undefined` | Optional | The total cost of acquiring the ssecurity |
| `status` | `string \| undefined` | Optional | The status of the holding |
| `currentPriceDate` | `bigint \| undefined` | Optional | The latest date the price date was updated. In epoch time. |
| `invSecurityType` | `string \| undefined` | Optional | The investment holding security type |
| `mfType` | `string \| undefined` | Optional | Type of mutual fund (e.g., open-ended) |
| `posType` | `string \| undefined` | Optional | Fund Type assigned by the FI (long or short) |
| `totalGLDollar` | `number \| undefined` | Optional | Total Gain/Loss of the position, at the time of aggregation ($) |
| `totalGLPercent` | `number \| undefined` | Optional | Total Gain/Loss of the position, at the time of aggregation (%) |

## Example (as JSON)

```json
{
  "id": null,
  "description": null,
  "cusipNo": null,
  "cusipNoType": null,
  "symbol": null,
  "units": null,
  "currentPrice": null,
  "securityName": null,
  "transactionType": null,
  "marketValue": null,
  "costBasis": null,
  "status": null,
  "currentPriceDate": null,
  "invSecurityType": null,
  "mfType": null,
  "posType": null,
  "totalGLDollar": null,
  "totalGLPercent": null
}
```

