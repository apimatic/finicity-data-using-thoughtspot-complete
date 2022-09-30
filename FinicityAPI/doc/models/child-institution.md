
# Child Institution

## Structure

`ChildInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rssd` | `number` | Required | The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits |
| `parentRSSD` | `number` | Required | The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits |
| `name` | `string` | Required | The name of the institution |
| `institutionId` | `number` | Required | Finicity’s institution ID |

## Example (as JSON)

```json
{
  "rssd": 167565,
  "parentRSSD": 451965,
  "name": "WELLS FARGO BANK, LTD.",
  "institutionId": 31
}
```

