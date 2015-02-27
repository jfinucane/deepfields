class BiasController < ApplicationController
  layout false
	def index
  end
  def compare
    @percent = session['percent'] || 0
    @field = session['field'] || 'Not selected'
  end
end
