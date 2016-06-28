class Api::V1::BeersController < ApplicationController

	def index
		@beers = Beer.all
	end

	def show
		@beer = Beer.find(params[:id])
	end

	def create
		@beer = Beer.new(
			name: params["name"],
			style: params["style"],
			hop: params["hop"],
			malts: params["malts"],
			alcohol: params["alcohol"]
			)
		if @beer.save
			render :show
		else
			render json: { errors: @beer.errors.full_messages }, status: 422
		end
	end


end