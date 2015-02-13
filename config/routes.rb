Galaxy::Application.routes.draw do
  namespace :lesson do
    get 'index'
    get 'home'
    get 'start'
    get 'outback'
    get 'stare'
    get 'travelogue'
    get 'enter'
    get 'display_pdf'
    get 'download_pdf'
    get 'classic'
  end
  namespace :partials do   
    get 'what_is_deep'
    get 'field_modals'
    get 'galaxy_types'
  end
  namespace :finder do
    get 'select'
    get 'hdf'
    get 'hdf_back'
    post 'got_counts'
    get 'got_counts_back'
    get 'irregulars'
    get 'find_out'
    get 'next'
  end
  namespace :bias do
    get 'index'
    get 'compare'
  end
  namespace :sample do
    get 'index'
    get 'go'
    get 'visualize'
    get 'size'
  end
  namespace :funnel do
    get 'magnify'
    get 'smallest'
    get 'more_closely'
    get 'best_region'
    post 'you_got_it'
    get 'you_got_it_back'
    get 'compare_astronomer'
    get 'you_versus'
  end
  namespace :symmetry do
    get 'index'
    get 'enter'
    get 'sample'
    post 'evaluate'
    get 'evaluate_back'
    get 'question'
    get 'answer'
    get 'uniform'
  end
  namespace :last do
    get 'secrets'
    get 'question'
    get 'different'
    get 'congratulations'
  end


  get '/teacher/:page' => 'teacher#show', :as => 'teacher_page'
  get '/teacher' => 'teacher#index', :as => 'teacher_root'
  get '/*path'=> redirect("/?goto=%{path}")
  root :to => 'game#index'
end
