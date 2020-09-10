Rails.application.routes.draw do
  root to: 'page#home'
  resources :page, only: :index do
    collection do
      get 'home'
      get 'basic'
    end
  end
  resources :books, only: :index
end
