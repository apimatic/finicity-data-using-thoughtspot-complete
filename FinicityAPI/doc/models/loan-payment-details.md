
# Loan Payment Details

The loan payment details for the customer account

## Structure

`LoanPaymentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loanNumber` | `string` | Required | The number of the specific loan under the account. |
| `loanPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `loanPaymentAddress` | `string` | Required | The payment address to send manual payments to |
| `accountDetail` | [`LoanPaymentDetailsAccountDetail \| undefined`](../../doc/models/loan-payment-details-account-detail.md) | Optional | - |

## Example (as JSON)

```json
{
  "loanNumber": "123456789",
  "loanPaymentNumber": "5231123456789",
  "loanPaymentAddress": "Heartland ECSI       PO Box 718       Wexford PA 15090"
}
```

