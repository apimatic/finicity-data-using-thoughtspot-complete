
# Get Certified Institutions Response

## Structure

`GetCertifiedInstitutionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | Total number of results found |
| `displaying` | `number` | Required | Displaying count |
| `moreAvailable` | `boolean` | Required | Indicates if there are more institutions to display that match the parameters |
| `createdDate` | `number` | Required | Date the request was created |
| `institutions` | [`CertifiedInstitution[]`](../../doc/models/certified-institution.md) | Required | Results<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1000` |

## Example (as JSON)

```json
{
  "found": 4041,
  "displaying": 5,
  "moreAvailable": true,
  "createdDate": 1586288664,
  "institutions": [
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
    },
    {
      "name": "FinBank M",
      "id": 170830,
      "transAgg": true,
      "ach": true,
      "stateAgg": true,
      "voi": true,
      "voa": true,
      "aha": true,
      "availBalance": false,
      "accountOwner": true
    },
    {
      "name": "FinBank P",
      "id": 170681,
      "transAgg": true,
      "ach": false,
      "stateAgg": true,
      "voi": true,
      "voa": true,
      "aha": false,
      "availBalance": false,
      "accountOwner": true
    },
    {
      "name": "FinBank Billable",
      "id": 170776,
      "transAgg": true,
      "ach": true,
      "stateAgg": true,
      "voi": true,
      "voa": true,
      "aha": true,
      "availBalance": false,
      "accountOwner": true
    },
    {
      "name": "FinBank O",
      "id": 102219,
      "transAgg": true,
      "ach": false,
      "stateAgg": false,
      "voi": false,
      "voa": false,
      "aha": false,
      "availBalance": false,
      "accountOwner": true
    }
  ]
}
```

