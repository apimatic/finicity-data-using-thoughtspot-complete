
# Pay Statement Match Types Enum

## Enumeration

`PayStatementMatchTypesEnum`

## Fields

| Name | Description |
|  --- | --- |
| `nETPAYMATCH` | Single transaction matching the net pay of the pay statement |
| `sPLITINTERVIEWAMOUNTSUMTONETPAYMATCH` | Multiple transactions matching up to the interview amounts if present |
| `sPLITDIRECTDEPOSITSUMTONETPAYMATCH` | Multiple transactions that sum up to the net pay and match direct deposits on the pay statement |
| `sPLITLESSTHANNETPAYSUMTONETPAYMATCH` | Multiple transactions were found that do not quite sum up to the net pay amount |
| `pARTIAL` | An inconclusive pay statement match was found |
| `tRANSACTIONDATERANGEINVALID` | No possible transactions to match to for pay date. This may be resolved by refreshing the report. |
| `nOMATCH` | None of the transactions match the pay statement |

