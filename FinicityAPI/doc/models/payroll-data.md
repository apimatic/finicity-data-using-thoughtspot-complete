
# Payroll Data

## Structure

`PayrollData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ssn` | `string` | Required | The full SSN without hyphens that matches the consumer’s SSN. |
| `dob` | `string` | Required | The consumer’s date of birth is in Unix epoch time (in seconds).  The timestamp is UTC at the start of day of birth. <br>   <br> **Example**: If the DOB is 1/1/1980, then the timestamp passed is 315576000. <br>   <br> **Note**: DOB’s prior to 1970 result in a negative timestamp; this is acceptable. To avoid errors, the DOB and consumer’s DOB must match.   <br> **Note**: All other timestamps in Decisioning are in MST. |
| `reportId` | `string` | Required | The `reportId` of the original VOIE Payroll report. |

## Example (as JSON)

```json
{
  "ssn": "999990000",
  "dob": "315576000",
  "reportId": "abcdefghijkl-voiepayroll"
}
```

