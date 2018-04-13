/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

 /*
  * This file contains the TypeScript definitions of the adapter API.
  */

declare module MFP.Server {

	/**
	 * Changes the response headers when using adapters.
	 * @description The method can be used only inside adapter's procedure and is used to add a new header(s) to the response.<br />
	 * In most cases it is used to modify the cache headers (i.e. Cache-Control, Expires and Pragma HTTP headers).</br>
	 *
	 * @param input
	 *           <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 *
	 * 			  <tr>
	 * 			    <td>name</td>
	 * 			    <td>HTTP header name. A string.</td>
	 * 			  </tr>
	 *  		  <tr>
	 * 			    <td>value</td>
	 * 			    <td>HTTP header value. A string. Can't be null</td>
	 * 			  </tr>
	 *
	 * 			</table>
	 * @example
	 * MFP.Server.addResponseHeader("Expires","Sun, 5 October 2014 18:00:00 GMT");
	 * @methodOf MFP.Server#
	 */
  function addResponseHeader(name : string, value : string): void;

  	 /**
	 * This method returns a reference to the Java&trade; HttpServletRequest object that was used to invoke an adapter procedure.
	 * @description Returns a reference to the Java HttpServletRequest object that was used to invoke an adapter procedure. This method can be used in any adapter procedure.<br />
	 * 		Use this method to return headers or other information stored in an HttpServletRequest object.
	 *
	 * @retrun A reference to an HttpServletRequest object.
	 * @example
	 * var request = MFP.Server.getClientRequest();
	 * var userAgent = request.getHeader("User-Agent");
	 *
	 * @methodOf MFP.Server#
	 */
  function getClientRequest() : Object;

  	/**
	 * Returns the value for the given property name.
	 * @description Gets the property value for the given property name. This method will return
     * the value from the adapter configuration, if it was defined. Otherwise the default
     * value (defined in the adapter descriptor) will be returned.
	 * @param options
	 *            The name of the property
	 *
	 * @returns value for the given property
	 *
	 * @methodOf MFP.Server#
	 */
  function getPropertyValue(name : string): string;


/**
	 * Calls an HTTP service.
	 * @description The method can be used only inside a procedure declared within an HTTP adapter. It calls a back-end HTTP service and converts the results to JSON.
	 * @param options
	 *            The invokeHttp function accepts the following JSON block of parameters:<br />
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>method</td>
	 * 			    <td>Mandatory. Defines the HTTP method. Valid values are <code>get, post, put, </code>and <code>delete</code>.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>returnedContentType</td>
	 * 			    <td>Optional. Defines the type of the content that is returned by the called HTTP service, overriding the HTTP response’s mime type.<br>
	 * 					If this parameter is not provided, the Worklight® Server handles the response according to the mime type. <br />
	 * 					If it is provided, the Worklight Server handles the response according to the indicated value. The field can receive the following values:<br />
	 * 			    <ul>
	 * 			    <li> <code>css, csv, html, json, plain,</code> and <code>xml</code>.
	 * 			    If the invocation failed, the failure handler for the request is called.</li>
	 * 			    <li>Any mime type that includes one of these values (note that any response with mime type that contains javascript or json is considered to contain JSON objects).</li>
	 * 			    </ul>
	 * 			    </td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>returnedContentEncoding</td>
	 * 			    <td>Optional. Defines the encoding of the returned content. Default is <code>utf-8</code>.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>path</td>
	 * 			    <td>Mandatory. Defines the path of the URL defining the HTTP service.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>parameters</td>
	 * 			    <td>Optional. Defines the set of parameters that need to be passed to the HTTP service.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>headers</td>
	 * 			    <td>Optional. Defines the headers for the HTTP request.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>cookies</td>
	 * 			    <td>Optional. Defines cookies to be passed with the HTTP request.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 				<td>body</td>
	 * 			    <td>Defines the content of the request body.<br />
	 * 					<ul>
	 * 					<li>When the method is GET, this property is not allowed.</li>
	 * 					<li>When the method is POST, this property is optional.</li>
	 * 					</ul>
	 * 					<b>Note: </b> body.content must be a string. If you are explicitly creating a DOM object, such as in:
	 * 					<code>var request = <soap:Envelope … </soap:Envelope>;</code>, you must convert the object to string before you assign it to body.content, for example: <code>request.toString();</code>
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>transformation</td>
	 * 			    <td>Optional. If defined, the response of the service undergoes the defined XSL transformation.
	 * 					If the service returns HTML, the Worklight Server first converts the response to XHTML, and then runs the XSL transformation on the XHTML response.</td>
	 * 			  </tr>
	 * 		  <tr>
	 * 			  <td>connectionTimeoutInMilliseconds</td>
	 * 			    <td>Optional.
	 * 					The timeout (in milliseconds) until a connection to the back-end can be established. The default value is 30000.
	 * 					By passing a value for connectionTimeoutInMilliseconds, you can override the value defined for
	 * 					connectionTimeoutInMilliseconds in the <connectionPolicy> element of the HTTP adapter file.
	 * 				</td>
	 * 			  </tr>
	 * 		  <tr>
	 * 			  <td>socketTimeoutInMilliseconds</td>
	 * 			    <td>Optional.
	 * 					The timeout (in milliseconds) between two consecutive packets, starting from the connection packet. The default value is 30000.
	 * 					By passing a value for socketTimeoutInMilliseconds, you can override the value defined for
	 * 					socketTimeoutInMilliseconds in the <connectionPolicy> element of the HTTP adapter file.
	 * 				</td>
	 * 		  </tr>
	 *
	 * 			</table>
	 *
	 * @returns The method returns the response of the HTTP service, after the
	 *         following processing:<br>
	 *		   <ol>
	 *         <li> If the service returns HTML, the Worklight Server converts the
	 *         HTML response to XHTML. If the service returns XML, the Worklight
	 *         Server keeps it as is.</li>
	 *         <li> If an XSL transformation has been defined in transformation
	 *         property, the Worklight Server executes the transformation on the
	 *         result of Step 1. The transformation should convert its XML input
	 *         to JSON. If no transformation was defined, the Worklight Server
	 *         automatically converts the result of Step 1 to JSON.</li>
	 *         </ol>
	 * @note {Note}  Since IBM Worklight V5.0.6, the path is no longer modified when you make the actual request.
	 * 		You might therefore face an issue if you use the <b>parameters</b> property in the <code>MFP.Server.invokeHttp</code> options with a query parameter specified in the path. You might end up with two ? signs on the request.
	 * 		To avoid this, do not use query parameters in the path along with the parameters property in <code>MFP.Server.invokeHttp</code> when using the method GET.
	 * @example
	 * var response = MFP.Server.invokeHttp(invocationData);
	 * response.responseHeader; // responseHeader property contains HTTP response headers
	 * response.statusCode; // statusCode property contains HTTP response status code
	 * @methodOf MFP.Server#
	 */
  function invokeHttp(options: {method : string, path : string, returnedContentEncoding? : string, returnedContentType? : string, parameters? : Object, headers? : Object, cookies?: Object, body?: Object, connectionTimeoutInMilliseconds? : number, socketTimeoutInMilliseconds? : number}): InvocationResult;

/**
	 * Invokes a procedure exposed by a Worklight&reg; adapter.
	 *
	 * @param invocationData
	 *            The invokeProcedure function accepts the following JSON block
	 *            of parameters:<br />
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>adapter</td>
	 * 			    <td>Mandatory. A string that contains the name of the adapter as specified when the adapter was defined.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>procedure</td>
	 * 			    <td>Mandatory. A string that contains the name of the procedure as specified when the adapter was defined.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>parameters</td>
	 * 			    <td>Optional. An array of parameter values that are passed to the back-end procedure. A parameter can be a scalar or an object.</td>
	 * 			  </tr>
	 * 			</table>
	 * 			Example of a JSON block of Parameters.</br.
	 * <pre class="code">
	 * {
	 * 	adapter : "AcmeBank",
	 * 	procedure : " getTransactions",
	 * 	parameters : [accountId, fromDate, toDate],
	 * };
	 * </pre>
	 *
	 * @returns The returned object has the following structure:
	 * <pre class="code">
	 * {
	 * 	isSuccessful: Boolean,
	 * 	errorMessages: ["Error Msg1", ...],
	 * 	// Application object returned by procedure
	 * }
	 * </pre>
	 * 			The invocation results object contains the following properties:<br />
	 * 			<table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the method invocation succeeded or failed. Valid values are:
	 * 				<b>true: </b> The method invocation succeeded. This is the default value. <br />
	 * 				<b>false: </b> The method invocation failed.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>errorMessages</td>
	 * 			    <td>Optional. An array of strings that contain error messages. If no errors are provided, the returned array is empty.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Application object</td>
	 * 			    <td>Any object that is returned by the procedure.</td>
	 * 			  </tr>
	 * 			</table>
	 * @methodOf MFP.Server#
	 */
  function invokeProcedure(invocationData : {adapter : string, procedure : string, parameters? : Object[]}) : InvocationResult;


		/**
    	 * Calls a prepared SQL statement.
    	 * @description The method can be used only inside a procedure that is declared within an SQL adapter.<br />
    	 *
    	 * @param options
    	 * <pre class="code">
    	 * {
    	 * 		//Mandatory
    	 * 		preparedStatement : prepared-statement-variable,
    	 *
    	 * 		//Optional
    	 * 		parametrers: [value-1, value-2, .... ]
    	 * }
    	 * </pre>
    	 *            The invokeSQLStatement function accepts the following JSON
    	 *            block of parameters:
    	 *            <table border="1">
    	 * 			  <tr>
    	 * 			    <th><b>Property</b></th>
    	 * 			    <th><b>Description</b></th>
    	 * 			  </tr>
    	 * 			  <tr>
    	 * 			    <td>preparedStatement</td>
    	 * 			    <td>Mandatory. A string representing a the SQL statement.</td>
    	 * 			  </tr>
    	 * 			   <tr>
    	 * 			    <td>parameters</td>
    	 * 			    <td>Optional. An array of parameters to the prepared statement.</td>
    	 * 			  </tr>
    	 * 			</table>
    	 *
    	 *
    	 * @returns The method returns the result set of the prepared statement.
    	 *         This returned value is formatted as a JSON array,
    	 * 		   in which each element corresponds to a row in the result set of the prepared statement.
    	 * <pre class="code">
    	 * function procedure1(param) {
    	 * return MFP.Server.invokeSQLStatement({
    	 * 	preparedStatement : "select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?",
    	 * 	parameters : [param]
    	 * });
    	 * }
    	 * </pre>
    	 *
    	 * @methodOf MFP.Server#
    	 */
  function invokeSQLStatement(options: {preparedStatement : string, parameters? : string[]}) : InvocationResult;



	/**
	 * The method can only be used inside a procedure declared within an SQL
	 * adapter. Calls a stored procedure on a database.
	 * @description The method can be used only inside a procedure that is declared within an SQL adapter.<br />
	 * 			It calls a stored procedure on a database.
	 * @param options
	 *            The invokeSQLStoredProcedure function accepts the following
	 *            JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 	//Mandatory
	 * 	procedure : procedure-name,
	 *
	 * 	//Optional
	 *	parametrers: [value-1, value-2, ... ]
	 * }
	 * </pre>
	 *
	 * @returns The method returns the result set of the SQL stored procedure.
	 *		   This returned value is formatted as a JSON array, in which each
	 * 		   element corresponds to a row in the result set of the SQL stored procedure.
	 *
	 * @methodOf MFP.Server#
	 */
  function invokeSQLStoredProcedure(options: {procedure : string, parameters : string[]}) : InvocationResult;

/**
	 * Report user activity.
	 * @deprecated The method is deprecated in V7.0.  Use MFP.Logger instead.
	 * @description This method is used to report user activity for auditing or reporting purposes.<br />
	 * 		The IBM&reg; Worklight&reg; server maintains a separate database table to store application statistics.
	 * @param {string} activityType
	 * 		     A string that identifies the activity.
	 *
	 * @methodOf MFP.Server#
	 */
  function logActivity(activityType : string) : void;

}


declare module MFP.Logger {
    /**
	 * Writes a debug message to the server log.
	 *
	 * @param value Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf MFP.Logger#
	 */
  function debug(value : string) : void;

  /**
	 * Writes an error message to the server log.
	 *
	 * @param value Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf MFP.Logger#
	 */
  function error(value : string) : void;

  /**
	 * Writes an info message to the server log.
	 *
	 * @param value Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf MFP.Logger#
	 */
  function info(value : string) : void;

  	/**
	 * Writes a warning message to the server log.
	 *
	 * @param value Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf MFP.Logger#
	 */
  function warn(value : string) : void;
}


declare class InvocationResult {
    isSuccessful : boolean;
}
