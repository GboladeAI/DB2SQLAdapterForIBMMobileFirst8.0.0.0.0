/**
* Copyright 2016 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

//Implement an SQL statement query
//Implement an SQL statement query
var getAccountsTransactionsStatement = "SELECT transactionId, fromAccount, toAccount, transactionDate, transactionAmount, transactionType " +
	"FROM accounttransactions " +
	"WHERE accounttransactions.fromAccount = ? OR accounttransactions.toAccount = ? " +
	"ORDER BY transactionDate DESC " +
	"LIMIT 20;";

//Implement an SQL statement query
var getAccountsTransactionsStatementMINE = "SELECT * FROM GOSALES.SALES_TARGET where sales_year=? " ;

//Invoke prepared SQL query and return invocation result.
//In this case, the code specifies an SQL stored procedure name as an invocation parameter. 
//The result is retrieved as a JSON object
function getAccountTransactions1(accountId){
	return MFP.Server.invokeSQLStatement({
		preparedStatement : getAccountsTransactionsStatement,
		parameters : [accountId, accountId]
	});
}


function getSalesPerYearTransactionsDB2(accountId){
	return MFP.Server.invokeSQLStatement({
		preparedStatement : getAccountsTransactionsStatementMINE,
		parameters : [accountId]
	});
}

//Invoke stored SQL procedure and return invocation result
function getAccountTransactions2(accountId){
	return MFP.Server.invokeSQLStoredProcedure({
		procedure : "getAccountTransactions",
		parameters : [accountId]

	});
}
