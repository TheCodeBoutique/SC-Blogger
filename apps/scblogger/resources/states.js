SC.mixin(Scblogger, {
  
  statechart: Ki.Statechart.create({

    rootState: Ki.State.design({

      initialSubstate: 'loading',

      loading: Ki.State.design({

        enterState: function() {
  				console.log('states are running...');
					Scblogger.getPath('mainPage.mainPane').append() ;
					this.loadData();

        },
				loadData:function()
				{
					console.log('loading data...');
					var blogs = Scblogger.store.find(Scblogger.Blogs);
					Scblogger.blogsController.set('content', blogs);
				}
			}), // end of the foo
			

			
	Exit: Ki.State.design({

    enterState: function() {
				console.log('Exiting state...');

    }
	}), 	
    })
  
  })

});