class TeacherController < ApplicationController
  layout 'teacher'

  def show
    render :template => "teacher/#{params[:page]}"
  end

  def index
  end
end
