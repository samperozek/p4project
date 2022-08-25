class VansController < ApplicationController

    wrap_parameters false

    def index
        render json: Van.all
    end

    def create

        new_van = Van.create( van_create_params ) #don't use .create because you don't want it to persist until you know that it's valid
        
        # if new_van.save #use this instead of .valid?, pairs with .new versus .create
        #     render json: new_van
        # else
        #     render json: {errors: new_van.errors.full_messages}, status: :unprocessable_entity
        # end
    
    end

    private

    def van_create_params

        params.permit(:year, :make, :model, :price, :imageURL, :buyer_id, :owner_id)

    end
end
