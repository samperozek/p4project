class BuyersController < ApplicationController
    def index
        render json: Buyer.all
    end
end
