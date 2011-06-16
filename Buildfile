# ===========================================================================
# Project:   Scblogger
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# This is your Buildfile, which sets build settings for your project.
# For example, this tells SproutCore's build tools that your requires
# the SproutCore framework.
config :all, :required => [:sproutcore, :ki, "sproutcore/ace"],  :theme => "sproutcore/ace"

# In addition to this Buildfile, which gives settings for your entire project,
# each of your apps has its own Buildfile with settings specific to that app.

#proxy '/blogs', :to =>'trailers.apple.com' , :url => '/trailers/home/feeds/just_added.json'
proxy "/blogs", :to => "localhost:3000"