Rails.application.routes.draw do

	get '/' => 'beers#index'

namespace :api do
	namespace :v1 do
		get '/beers' => 'beers#index'
		post '/beers' => 'beers#create'
		get '/beers/:id' => 'beers#show'
	end
end

end
