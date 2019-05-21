Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
  # All requests forwarded to StaticController#index except
  # Ajax (req.xhr), HTML Mime type (req.format.html?) and root path
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # Forward root to StaticController#index
  root 'static#index'
end
