Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :profiles, only: [:index, :show, :update, :create]
    get 'my_profiles', to: 'profiles#my_profiles'
  end
end
