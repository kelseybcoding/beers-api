class Api::V1::BeersController < ApplicationController

	def index
		@beer = Beer.all
	end
end