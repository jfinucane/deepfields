class BiasController < ApplicationController
  before_filter :check_for_field
	def index
  end
  def compare
    @percent = session['percent'] || 0
    @field = session['field'] || 'Not selected'
  end
end
