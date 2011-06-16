// ==========================================================================
// Project:   Scblogger.Blogfeed
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Scblogger */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
sc_require('models/blogs');
resultsQuery = SC.Query.local(Scblogger.Blogs);
Scblogger.Blogfeed = SC.DataSource.extend(
/** @scope Scblogger.Blogfeed.prototype */ {

  fetch: function(store, query) {
		console.log("fetching....");
			if (query === resultsQuery) {
			      SC.Request.getUrl('/blogs.json').header({
				        'Accept': 'application/json'
				      }).json().notify(this, 'didFetchQuery', store, query).send();

		return YES;
		}

			  return NO;
		  },


		  didFetchQuery: function(response, store, query) {
			console.log('storeKeys');
			var storeKeys = store.loadRecords(Scblogger.Blogs,Scblogger.BlogsProxy.getResponse(response.get('body')));
				
		  	if(SC.ok(response)) {

		      store.loadRecords(query.primaryKey, response.get('body'));////////we might need to change the primary key in users
		      store.dataSourceDidFetchQuery(query);
		    } else store.dataSourceDidErrorQuery(query, response);	
		  },

		 	retrieveRecord: function(store, storeKey) {
				if (SC.kindOf(store.recordTypeFor(storeKey), Scblogger.Blogs)) {

				    var url = store.idFor(storeKey);
						console.log(url);	


				    SC.Request.getUrl(url).header({
				                'Accept': 'application/json'
				            }).json()
				      .notify(this, 'didRetrieveTask', store, storeKey)
				      .send();

				    return YES;

				  } else return NO;
				},
				didRetrieveTask: function(response, store, storeKey) {
				  if (SC.ok(response)) {
				    var dataHash = response.get('body');

				     store.loadRecord(recordType, dataHash, id);

				  } else store.dataSourceDidError(storeKey, response);
				},
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('scblogger');