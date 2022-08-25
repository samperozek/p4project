class ApplicationController < ActionController::Base
    include ActionController::Cookies
    skip_before_action :verify_authenticity_token, :except => [:update, :create]
    protect_from_forgery :except => :create 
end
