
# Loan Payment Details Account Detail

## Structure

`LoanPaymentDetailsAccountDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | Finicity's ID of the Student Loan Account |
| `accountNumber` | `string` | Required | Institution's ID of the Student Loan Account |
| `accountPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `accountPaymentAddress` | `string` | Required | The payment address to which send manual payments should be sent |
| `accountFuturePayoffAmount` | `number \| undefined` | Optional | The payoff amount for the account |
| `accountFuturePayoffDate` | `string \| undefined` | Optional | The date to which the `Future Payoff Amount` applies |
| `groupDetail` | [`LoanPaymentDetailsGroupDetail[] \| undefined`](../../doc/models/loan-payment-details-group-detail.md) | Optional | - |
| `loanDetail` | [`LoanPaymentDetailsLoanDetail[] \| undefined`](../../doc/models/loan-payment-details-loan-detail.md) | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "0123456789",
  "accountNumber": "9876543210",
  "accountPaymentNumber": "00001234895413",
  "accountPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054"
}
```

