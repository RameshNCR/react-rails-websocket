Rails.application.routes.draw do
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/demo_route', to: "test_app#demo";

  namespace :api do
    post '/save_app', to: 'test_app#create' # /api/save_app
    post '/app_data', to: 'app_data#create'
    # put "/update_app/:data_id", to: 'app_data#update'
    get '/app_data', to: 'app_data#index'
    delete 'app_data/:id', to: 'app_data#delete'


    get '/get_test_app_data', to: 'test_app#index'
    delete '/test_app_data/:id', to: 'test_app#remove'
    # resource :TestApp, only[:create]
  end
end
