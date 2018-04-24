Rails.application.routes.draw do
  resources :rubrics
  resources :items

  resources :posts do
    resources :items
  end

  get :add_item, controller: :items


  resources :images, only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'index#show'

  get 'index' => 'index#show'
  # get '/projects' => '/rubrics/1'

end
