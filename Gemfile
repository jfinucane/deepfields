source 'https://rubygems.org'

gem 'rails', '4.1.6'
gem 'sprockets'


gem 'redcarpet'
gem 'rinku', :require => 'rails_rinku'

gem 'bower-rails'
gem 'angular-rails-templates'

group :assets, :development do
  gem 'sass-rails'
  gem 'coffee-rails'
  gem 'haml-rails' 
  gem 'uglifier', '>= 1.0.3'
end

group :deployment do
  gem 'capistrano', '3.2.1'          # Required by capistrano-rails, but capistrano-rails version is not being updated when capistrano changes
  gem 'capistrano-bundler', '1.1.3'  # Required by capistrano-rails, but version changes not being kept in sync
  gem 'capistrano-rails', '1.1.2'
end

group :development, :cucumber, :test do
  gem 'cucumber-rails',  :require => false
  gem 'webrat'
  gem 'rspec'
  gem "rspec-rails"
  gem 'capybara'
  gem 'selenium-client'
  gem 'selenium-webdriver'
end
