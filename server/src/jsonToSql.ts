import { GetTransactionsResponse } from 'finicity-apilib';
export const insertquery = (searchData: GetTransactionsResponse) => {
    
  let transactionData = searchData;
  let tracnsactionArray = transactionData.transactions.length;

  let found= transactionData.found;
  let displaying = transactionData.displaying;
  let moreAvailable = transactionData.moreAvailable;
  let fromDate =transactionData.fromDate;
  let toDate = transactionData.toDate;
  let sort =transactionData.sort;

  let insertQuery= `INSERT INTO transacData VALUES  `;
  for (let index = 0; index < tracnsactionArray; index++) {
      let id = transactionData.transactions[index].id;
      let amount = transactionData.transactions[index].amount;
      let accountId = transactionData.transactions[index].accountId;
      let customerId = transactionData.transactions[index].customerId;
      let status = transactionData.transactions[index].status;
      let description = transactionData.transactions[index].description;
      let feeAmount = transactionData.transactions[index].feeAmount;
      let symbol = transactionData.transactions[index].symbol;
      let unitQuantity = transactionData.transactions[index].unitQuantity;
      let unitAction = transactionData.transactions[index].unitAction;
      let postedDate = transactionData.transactions[index].postedDate;
      let transactionDate = transactionData.transactions[index].transactionDate;
      let createdDate = transactionData.transactions[index].createdDate;
      let category = transactionData.transactions[index].categorization?.category;
      let confirmationNumber = transactionData.transactions[index].confirmationNumber;
      let payeeId= transactionData.transactions[index].payeeId;
      let extendedPayeeName= transactionData.transactions[index].extendedPayeeName;
      let originalCurrency = transactionData.transactions[index].originalCurrency;
      let runningBalanceAmount = transactionData.transactions[index].runningBalanceAmount;
      let escrowTaxAmount = transactionData.transactions[index].escrowTaxAmount;
      let escrowInsuranceAmount = transactionData.transactions[index].escrowInsuranceAmount;
      let escrowPmiAmount = transactionData.transactions[index].escrowPmiAmount;
      let escrowFeesAmount = transactionData.transactions[index].escrowFeesAmount;
      let escrowOtherAmount = transactionData.transactions[index].escrowOtherAmount;
      let inv401kSource = transactionData.transactions[index].inv401kSource;
      let relatedInstitutionTradeId = transactionData.transactions[index].relatedInstitutionTradeId;
      let subaccountSecurityType = transactionData.transactions[index].subaccountSecurityType;
      let penaltyAmount = transactionData.transactions[index].penaltyAmount;
      let sharesPerContract = transactionData.transactions[index].sharesPerContract;
      let stateWithholding = transactionData.transactions[index].stateWithholding;
      let taxesAmount = transactionData.transactions[index].taxesAmount;
      let unitPrice = transactionData.transactions[index].unitPrice;
      let securedType = transactionData.transactions[index].securedType;
      let reveralInstitutionTransactionId = transactionData.transactions[index].reveralInstitutionTransactionId;
      let investmentTransactionType = transactionData.transactions[index].investmentTransactionType;
      let memo = transactionData.transactions[index].memo;
      let interestAmount = transactionData.transactions[index].interestAmount;
      let principalAmount = transactionData.transactions[index].principalAmount;
      let escrowAmount = transactionData.transactions[index].escrowAmount;
      let normalizedPayeeName = transactionData.transactions[index].categorization?.normalizedPayeeName;
      let bestRepresentation = transactionData.transactions[index].categorization?.bestRepresentation;
      let country = transactionData.transactions[index].categorization?.country;
      let cusipNo = transactionData.transactions[index]['cusipNo'];
      let tradeDate = transactionData.transactions[index]['tradeDate'];
      let ofxCheckNumber = transactionData.transactions[index]['ofxCheckNumber '];
      let securityId = transactionData.transactions[index]['securityId'];
      let securityIdType = transactionData.transactions[index]['securityIdType'];
      let optionType = transactionData.transactions[index]['optionType'];
    
      insertQuery += `( ${found}, ${displaying},'${moreAvailable}',${fromDate},${toDate},'${sort}', ${id} , ${amount} , ${accountId},${customerId},'${status}','${description}',${feeAmount},'${symbol}',${unitQuantity},'${unitAction}',${postedDate},${transactionDate},${createdDate},'${category}','${confirmationNumber}', '${payeeId}', '${extendedPayeeName}', '${originalCurrency}',${runningBalanceAmount},${escrowTaxAmount}, ${escrowInsuranceAmount}, ${escrowPmiAmount}, ${escrowFeesAmount}, ${escrowOtherAmount},'${inv401kSource}','${relatedInstitutionTradeId}','${subaccountSecurityType}',${penaltyAmount},${sharesPerContract},${stateWithholding},${taxesAmount},${unitPrice},'${securedType}',${reveralInstitutionTransactionId},'${investmentTransactionType}','${memo}',${interestAmount},${principalAmount},${escrowAmount},'${normalizedPayeeName}','${bestRepresentation}','${country}','${cusipNo}',${tradeDate},${ofxCheckNumber},${securityId},'${securityIdType}','${optionType}'),`;

  }
  // console.log(insertQuery)
  // let intoNull = null;
  let result = insertQuery.replace(/'undefined'|undefined/g, 'null' );
  let finalQuery = result.slice(0, -1) + '';
  
  return finalQuery;

}


