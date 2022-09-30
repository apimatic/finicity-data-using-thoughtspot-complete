
# Categorization

Categorization Record

## Structure

`Categorization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `normalizedPayeeName` | `string \| undefined` | Optional | A normalized payee, derived from the transaction’s description and memo fields. |
| `category` | `string \| undefined` | Optional | One of the values from Categories (assigned based on the payee name) |
| `city` | `string \| undefined` | Optional | City of transaction (if available) |
| `state` | `string \| undefined` | Optional | State of transaction (if available) |
| `postalCode` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | Country where the transaction occurred |
| `bestRepresentation` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "normalizedPayeeName": "Mad Science Research",
  "category": "Paycheck",
  "city": "Murray",
  "state": "UT",
  "postalCode": "84123",
  "country": "USA",
  "bestRepresentation": "YOU BOUGHT DELTA AIR LINES INC DAL CASH"
}
```

