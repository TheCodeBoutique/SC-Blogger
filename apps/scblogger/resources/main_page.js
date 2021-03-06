// ==========================================================================
// Project:   Scblogger - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Scblogger */

// This page describes the main user interface for your application.  
Scblogger.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
	    childViews: 'middleView topView bottomView'.w(),

	    topView: SC.ToolbarView.design({
	      layout: { top: 0, left: 0, right: 0, height: 36 },
	      childViews: 'labelView addButton'.w(),
	      anchorLocation: SC.ANCHOR_TOP,

	      labelView: SC.LabelView.design({
	        layout: { centerY: 0, height: 24, left: 8, width: 200 },
	        controlSize: SC.LARGE_CONTROL_SIZE,
	        fontWeight: SC.BOLD_WEIGHT,
	        value:   'Blogger'
	      }),

	      addButton: SC.ButtonView.design({
	        layout: { centerY: 0, height: 24, right: 12, width: 100 },
	        title:  "Blog"
	      })
	    }),

	    middleView: SC.ScrollView.design({
	      hasHorizontalScroller: NO,
	      layout: { top: 36, bottom: 32, left: 0, right: 0 },
	      backgroundColor: 'white',

	      contentView:SC.ListView.design({
									layout:{width:300, left:0},
								  contentValueKey: "title",
									contentBinding: "Scblogger.blogsController.arrangedObjects",
									selectionBinding: "Scblogger.blogsController.selection",
								  rowHeight: 40,
									rowSpacing: 2,
								  })
	    }),

	    bottomView: SC.ToolbarView.design({
	      layout: { bottom: 0, left: 0, right: 0, height: 32 },
	      childViews: 'summaryView'.w(),
	      anchorLocation: SC.ANCHOR_BOTTOM,

	      summaryView: SC.LabelView.design({
	        layout: { centerY: 0, height: 18, left: 20, right: 20 },
	        textAlign: SC.ALIGN_CENTER,

	        value: "Item Count"
	      })
	    })
	  })

});
