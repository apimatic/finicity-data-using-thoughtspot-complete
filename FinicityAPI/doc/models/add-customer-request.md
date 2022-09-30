
# Add Customer Request

Request Structure For The Add Customer Endpoint and Add Testing Customer Endpoint

## Structure

`AddCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | The customer’s username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ – + the use of email in this field is discouraged it is recommended to use a unique non-email identifier Use of special characters may result in an error (e.g. í, ü, etc.) |
| `firstName` | `string \| undefined` | Optional | The customer’s first name(s) / given name(s) (optional) |
| `lastName` | `string \| undefined` | Optional | The customer’s last name(s) / surname(s) (optional) |
| `applicationId` | `string \| undefined` | Optional | The application Id for the app the partner would like to assign the customer to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app this can be omitted. This value comes from the "applicationId" from the Get App Registration Status endpoint |

## Example (as JSON)

```json
{
  "username": "customerusername1"
}
```

