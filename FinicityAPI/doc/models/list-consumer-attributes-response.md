
# List Consumer Attributes Response

## Structure

`ListConsumerAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `analyticIds` | `unknown[]` | Required | A list of all analytic IDs generated for a customer, The date and time (Epoch) that the data analytics report generated.and used to Get the Consumer Attributes report. |

## Example (as JSON)

```json
{
  "analytic_ids": [
    {
      "analytic_id": "ad68d233-cc56-453b-b872-e74fb86c79f8",
      "created_date": "2022-02-01T18:46:08.665772"
    },
    {
      "analytic_id": "f6cee82e-4347-42b0-be38-64b26f3d6aea",
      "created_date": "2022-02-2T12:37:12.962237"
    },
    {
      "analytic_id": "ce9693d5-a83e-4ad0-a694-6f48c4fc7877",
      "created_date": "2022-02-02T18:14:13"
    }
  ]
}
```

