
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The Finicity ID of the transaction |
| `amount` | `number` | Required | The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. |
| `accountId` | `bigint` | Required | The Finicity ID of the account associated with this transaction |
| `customerId` | `bigint` | Required | The Finicity ID of the customer associated with this transaction |
| `status` | `string` | Required | One of active, pending, or shadow (see Pending Transactions and Shadow Transactions) |
| `description` | `string` | Required | The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of "No description provided by institution”. All other values are provided by the institution. |
| `memo` | `string \| undefined` | Optional | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |
| `postedDate` | `bigint \| null` | Required | A timestamp showing when the transaction was posted or cleared by the institution (see Handling Dates and Times). **Nullable & not required for student loan transaction data.** |
| `transactionDate` | `bigint \| undefined` | Optional | An optional timestamp showing when the transaction occurred, as provided by the institution (see Handling Dates and Times). |
| `effectiveDate` | `string \| undefined` | Optional | A timestamp showing when the transaction was made effective on an account by an institution. Typically aligns with billing due dates. |
| `firstEffectiveDate` | `string \| undefined` | Optional | The first timestamp recorded in effectiveDate by Finicity for a transaction. |
| `createdDate` | `bigint` | Required | A timestamp showing when the transaction was added to the Finicity system. (See Handling Dates and Times.) This value usually is not interesting outside of Finicity. |
| `type` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | - |
| `checkNum` | `number \| undefined` | Optional | The check number of the transaction, as provided by the institution |
| `escrowAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to escrow, if available |
| `feeAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to fee, if available |
| `interestAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to interest, if available |
| `principalAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to principal, if available |
| `unitQuantity` | `number \| undefined` | Optional | The number of units (e.g. individual shares) in the transaction, if available |
| `unitPrice` | `number \| undefined` | Optional | Share Price for investment unit (e.g., stocks, mutual funds) |
| `categorization` | [`Categorization \| undefined`](../../doc/models/categorization.md) | Optional | - |
| `subaccountSecurityType` | `string \| undefined` | Optional | The type of sub account from which funds came |
| `commissionAmount` | `number \| undefined` | Optional | Transaction commission |
| `ticker` | `string \| undefined` | Optional | Ticker symbol for the investment related to the transaction |
| `investmentTransactionType` | `string \| undefined` | Optional | Finicity derived field that normalizes the transaction type from the FI |
| `taxesAmount` | `number \| undefined` | Optional | Taxes applicable to the investment trade |
| `currencySymbol` | `string \| undefined` | Optional | If the foreign amount value is present then this is the currency code of that foreign amount |
| `symbol` | `string \| undefined` | Optional | - |
| `unitAction` | `string \| undefined` | Optional | - |
| `confirmationNumber` | `string \| undefined` | Optional | - |
| `payeeId` | `string \| undefined` | Optional | - |
| `extendedPayeeName` | `string \| undefined` | Optional | - |
| `originalCurrency` | `string \| undefined` | Optional | - |
| `runningBalanceAmount` | `number \| undefined` | Optional | - |
| `escrowTaxAmount` | `number \| undefined` | Optional | - |
| `escrowInsuranceAmount` | `number \| undefined` | Optional | - |
| `escrowPmiAmount` | `number \| undefined` | Optional | - |
| `escrowFeesAmount` | `number \| undefined` | Optional | - |
| `escrowOtherAmount` | `number \| undefined` | Optional | - |
| `inv401kSource` | `string \| undefined` | Optional | - |
| `relatedInstitutionTradeId` | `string \| undefined` | Optional | - |
| `penaltyAmount` | `number \| undefined` | Optional | - |
| `sharesPerContract` | `number \| undefined` | Optional | - |
| `stateWithholding` | `number \| undefined` | Optional | - |
| `securedType` | `string \| undefined` | Optional | - |
| `reveralInstitutionTransactionId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 102122887150,
  "amount": 3678.9,
  "accountId": 1014136057,
  "customerId": 1005061234,
  "status": "active",
  "description": "MAD SCIENCE RESEARCH PR PAYMENT",
  "memo": "PPD ID 098749",
  "postedDate": 1588888169,
  "transactionDate": 1588801769,
  "createdDate": 1588974631,
  "type": "deposit",
  "categorization": {
    "normalizedPayeeName": "Mad Science Research",
    "category": "Paycheck",
    "city": "Murray",
    "state": "UT",
    "postalCode": "84123",
    "country": "USA"
  }
}
```

