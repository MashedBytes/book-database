Rails.application.routes.draw do
  resources :books
  resources :book_shelves
  resources :boxes
  resources :topics
  resources :authors
end
