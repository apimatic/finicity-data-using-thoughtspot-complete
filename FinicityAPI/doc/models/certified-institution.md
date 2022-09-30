
# Certified Institution

## Structure

`CertifiedInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Institution's name |
| `id` | `bigint` | Required | Institution's Id |
| `transAgg` | `boolean` | Required | Trans Agg Certification |
| `ach` | `boolean` | Required | ACH Certification |
| `stateAgg` | `boolean` | Required | State Agg Certification |
| `voi` | `boolean` | Required | VOI Certification |
| `voa` | `boolean` | Required | VOA Certification |
| `aha` | `boolean` | Required | AHA Certification |
| `availBalance` | `boolean` | Required | Account Balance Check (ABC) Certification |
| `accountOwner` | `boolean` | Required | Account Owner Certification |
| `childInstitutions` | [`ChildInstitution[] \| undefined`](../../doc/models/child-institution.md) | Optional | **Constraints**: *Minimum Items*: `0` |

## Example (as JSON)

```json
{
  "name": "FinBank",
  "id": 101732,
  "transAgg": true,
  "ach": true,
  "stateAgg": false,
  "voi": true,
  "voa": true,
  "aha": false,
  "availBalance": false,
  "accountOwner": true
}
```

