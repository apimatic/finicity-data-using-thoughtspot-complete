
# Account Owner V1

The account owner information for the customer account

## Structure

`AccountOwnerV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ownerName` | `string` | Required | The name of the account owner. In v1 this can be multiple account owners in one string. This is how the source data is returned from the institution. |
| `ownerAddress` | `string` | Required | The address of the account owner |

## Example (as JSON)

```json
{
  "ownerName": "John Smith",
  "ownerAddress": "APT C 5600 S SPRINGFIELD GARDENS CIR SPRINGFIELD, VA 22162-1058"
}
```

