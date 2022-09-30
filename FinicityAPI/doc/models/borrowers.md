
# Borrowers

## Structure

`Borrowers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | Customer ID from the [Add Customer API](https://api-reference.finicity.com/#/rest/api-endpoints/customer/add-customer) |
| `consumerId` | `string` | Required | Consumer ID from the [Create Consumer API](https://api-reference.finicity.com/#/rest/api-endpoints/consumer/create-consumer) |
| `type` | [`BorrowerTypeEnum`](../../doc/models/borrower-type-enum.md) | Required | (MVS) Borrower type: `primary` or `jointBorrower` |
| `optionalConsumerInfo` | [`OptionalConsumerInformation \| undefined`](../../doc/models/optional-consumer-information.md) | Optional | (MVS-Optional) Optional consumer information such as the consumer’s SSN and DOB. Use to prepopulate the consumer’s SSN (only the last 4 digits appear) and DOB on the Find employment records page at the beginning of the MVS payroll module. |

## Example (as JSON)

```json
{
  "customerId": "1005061234",
  "consumerId": "1973f901305e2ab3ba8840f411f6b057",
  "type": null
}
```

