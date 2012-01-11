Backbone::Application.routes.draw do

  root :to => "main#index"

  resources :movies

end
