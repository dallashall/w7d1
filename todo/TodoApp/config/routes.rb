Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
  end
end
