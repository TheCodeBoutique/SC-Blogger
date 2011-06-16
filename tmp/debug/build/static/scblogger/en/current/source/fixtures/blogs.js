// ==========================================================================
// Project:   Scblogger.Blogs Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Scblogger */

sc_require('models/blogs');

Scblogger.Blogs.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: 1,
    title: "Sproutcore tutorials",
    userID: "kcarriedo" 
},
  
   { guid: 2,
	    title: "Sproutcore 2.0",
	    userID: "chad" 
	},
  
  	 { guid: 3,
		    title: "Sproutcore meetup",
		    userID: "core" 
		},

];
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('scblogger');