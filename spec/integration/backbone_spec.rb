require 'spec_helper'

describe "Backbone", :js do

  context "no data" do
    specify "homepage" do
      visit '/'
      page.should have_content 'no movies'
    end
  end

  context "with existing data" do
    before { @movie = Factory :movie, title: 'Pulpfiction' }
    specify "homepage with data" do
      visit '/'
      page.should have_content 'Pulpfiction'
    end
  end
end
