
# Payroll Employment Record

## Structure

`PayrollEmploymentRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employerName` | `string` | Required | Name of the employer as stated by the employer in the payroll system. |
| `legalEntityId` | `string \| undefined` | Optional | Employer identification number (EIN) |
| `originalHireDate` | `bigint \| undefined` | Optional | The original hired date of an employee at the company. |
| `latestHireDate` | `bigint \| undefined` | Optional | If an employee leaves the company and returns later, then the employer states the latest hire date at the company. |
| `latestPayDate` | `bigint` | Required | The most recent pay date from an employer. |
| `daysSinceLastPay` | `number` | Required | The number of days since an employee was last paid. |
| `numberPayCadenceWithoutPay` | `number` | Required | The number of pay cadences an employee has not been paid; determined by the pay frequency. |
| `employmentEndDate` | `bigint \| undefined` | Optional | The date an employee ended their employment at the company. |
| `employmentDuration` | `string \| undefined` | Optional | The length of time an employee has been employed with that employer in ISO 8601 format (eg P1Y6M0D) |
| `employerAddress` | [`PayrollEmployerAddress[] \| undefined`](../../doc/models/payroll-employer-address.md) | Optional | Array of addresses |
| `employmentStatusCode` | `string` | Required | Status codes: `A` - Active, `NLE` - No Longer Employed, `L` - Leave |
| `employmentStatusName` | `string` | Required | Status name: `Active`, `No Longer Employed`, or `Leave` |
| `workLevelCode` | `string \| undefined` | Optional | The abbreviate code for the employment level names (workLevelName) that we receive from the employer. |
| `workLevelName` | `string \| undefined` | Optional | The employment level name is whatever we receive from the employer, such as full time, part time, temp, contractor, and more. |
| `workLevelStatus` | `string` | Required | The categorized work level status. Enumerations are: <br> * `Temporary` <br> * `Seasonal` <br> * `Retired` <br> * `Student` <br> * `Full Time` <br> * `Part Time` <br> * `Unspecified` <br> This is a new field, currently enabled only for testing reports. It will be added for all reports in August 2021. |
| `positionTitle` | `string \| undefined` | Optional | Employee job title |
| `positionDuration` | `string \| undefined` | Optional | The length of time an employee has been employed at their current or latest position for this employment in ISO 8601 format (eg P1Y6M0D) |

## Example (as JSON)

```json
{
  "employerName": "ACME INC",
  "legalEntityId": "752760000",
  "originalHireDate": 1527832800,
  "latestHireDate": 1527832800,
  "latestPayDate": 1596175200,
  "daysSinceLastPay": 10,
  "numberPayCadenceWithoutPay": 1,
  "employmentEndDate": 1527832800,
  "employmentDuration": "P1Y6M0D",
  "employerAddress": [
    {
      "address1": "Address 1",
      "city": "City",
      "state": "TX",
      "zip": "99999"
    }
  ],
  "employmentStatusCode": "A",
  "employmentStatusName": "Active",
  "workLevelCode": "FT",
  "workLevelName": "Full Time-Regular",
  "workLevelStatus": "Full Time",
  "positionTitle": "Shift Supervisor",
  "positionDuration": "P1Y6M0D"
}
```

