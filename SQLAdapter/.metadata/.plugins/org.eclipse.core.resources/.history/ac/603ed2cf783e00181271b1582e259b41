/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var procedure1Statement = "select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?";
function procedure1(param) {
	return MFP.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
function procedure2(param) {
	return MFP.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}

/************************************************************************
 * Implementation code for procedure - 'unprotected'
 *
 *
 * @return - invocationResult
 */
function unprotected(param) {
	return {result : "Hello from unprotected resource"};
}


