require 'database_cleaner'

RSpec.configure do |config|
  config.before(:each) do |example_group|
    DatabaseCleaner.strategy = if (Capybara.current_driver != :rack_test) || example.metadata[:sphinx]
                                 :truncation
                               else 
                                 :transaction
                               end
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end
end
