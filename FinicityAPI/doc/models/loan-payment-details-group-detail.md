
# Loan Payment Details Group Detail

## Structure

`LoanPaymentDetailsGroupDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | Finicity's ID of the Student Loan Group |
| `groupNumber` | `string` | Required | Institution's ID of the Student Loan Group |
| `groupPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `groupPaymentAddress` | `string` | Required | The payment address to which send manual payments should be sent |
| `groupFuturePayoffAmount` | `number \| undefined` | Optional | The payoff amount for the group |
| `groupFuturePayoffDate` | `string \| undefined` | Optional | The date to which the `Future Payoff Amount` applies |
| `groupLoanDetail` | [`LoanPaymentDetailsLoanDetail[]`](../../doc/models/loan-payment-details-loan-detail.md) | Required | - |

## Example (as JSON)

```json
{
  "accountId": "1234567890",
  "groupNumber": "3210-Group A",
  "groupPaymentNumber": "00001234895413-A",
  "groupPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054",
  "groupLoanDetail": {
    "accountId": "2345678901",
    "loanNumber": "3210-Group A-1",
    "loanPaymentNumber": "00001234895413-A-1",
    "loanPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054"
  }
}
```

