class OwnersController < ApplicationController
    def index
        render json: Owner.all
    end

    def show
        owner = Owner.find(params[:id])
        render json: owner, status :ok
    end

    def create
        owner = Owner.create(user_params)
        if owner.valid?
            session[:owner_id] = owner.id #Remembers who our user is
            render json: owner, status: :ok
        else
            render json: {errors: owner.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
