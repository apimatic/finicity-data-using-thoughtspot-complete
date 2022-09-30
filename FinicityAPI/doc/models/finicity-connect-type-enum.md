
# Finicity Connect Type Enum

## Enumeration

`FinicityConnectTypeEnum`

## Fields

| Name | Description |
|  --- | --- |
| `aggregation` | Aggregation Only - Used by PFM (Personal Financial Management) partners to grant access to a customer’s transactions. |
| `ach` |  |
| `fix` | Fix - Used to resolve authentication errors |
| `lite` | Lite - Provides FI authentication and adding accounts. Allows for custom styling, control of the FI search experience, and does not end with a report generation call. |
| `voa` | Verification of Assets - Used by lenders to verify assets. The default time period of data retrieved is 6 months, so that lenders can reduce their liability. |
| `voahistory` | Verification of Assets with History - Used by the GSEs to verify assets. This differs from normal VOA in that it uses up to 2 years of data. voahistory |
| `voi` | Verification of Income - Used by lenders to verify a customer’s income using their bank transaction history. |
| `voieTxverify` |  |
| `voieStatement` |  |
| `payStatement` |  |
| `assetSummary` |  |
| `preQualVoa` |  |

