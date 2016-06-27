class BeersController < ApplicationController

	def index
		@beers = Beer.all
	end

	def create
		@beer = Beer.create(
			name: params[:name],
			style: params[:style],
			malts: params[:malts],
			alcohol: params[:alcohol]
			)
		render 'show.json.jbuilder'
	end

	def show
		@beer = Beer.find(params[:id])
	end

	def update
		@beer = Beer.find(params[:id])

		@beer.update(
        	name: params[:name],
       		style: params[:style],
        	malts: params[:malts],
        	alcohol: params[:alcohol]
     	 )

    render :show
    end
	

	def destroy
		@beer = Beer.find(params[:id])
		@beer.destroy

		render json: {"message" => "beer was dranked"}
	end
end
