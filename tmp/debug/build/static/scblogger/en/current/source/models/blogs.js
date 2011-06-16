// ==========================================================================
// Project:   Scblogger.Blogs
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Scblogger */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Scblogger.Blogs = SC.Record.extend({

		title: SC.Record.attr(String, { defaultValue: 'title' }),
		userID: SC.Record.attr(String, { defaultValue: 'user_id' }),
		created: SC.Record.attr(String, { defaultValue: 'created_at' }),
		updated: SC.Record.attr(String, { defaultValue: 'updated_at' })
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('scblogger');