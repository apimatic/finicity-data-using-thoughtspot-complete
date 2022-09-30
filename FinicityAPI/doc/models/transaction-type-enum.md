
# Transaction Type Enum

If provided by the institution, the following values may be returned in the field of a record:

## Enumeration

`TransactionTypeEnum`

## Fields

| Name | Description |
|  --- | --- |
| `atm` | ATM debit or credit (depends on signage of amount) |
| `cash` | Cash withdrawal |
| `check` | Check |
| `credit` | Generic credit |
| `debit` | Generic debit |
| `deposit` | Deposit |
| `directDebit` | Merchant initiated debit |
| `directDeposit` | Direct deposit |
| `dividend` | Dividend |
| `fee` | Institution fee |
| `interest` | Interest earned or paid (depends on signage of amount) |
| `other` | Type is not known or doesn’t match types available in this list |
| `payment` | Electronic payment |
| `pointOfSale` | Point of sale debit or credit (depends on signage of amount) |
| `repeatPayment` | Repeating payment/standing order |
| `serviceCharge` | Service charge |
| `transfer` | Transfer |

