require 'bundler/setup'
Bundler.require

class CalculatorApp < Sinatra::Base

  set :root, File.dirname(__FILE__)
  set :public_directory, 'public'

  get '/' do
    @title = "Client Loyalty Profile Pricing Calculator"
    slim :index
  end

  get '/styles/main.css' do
    less :main
  end

end
