class MoviesController < ApplicationController
  respond_to :json

  def index
    respond_with(@movies = Movie.order("created_at DESC").all)
  end

  def show
    respond_with(@movie = Movie.find(params[:id]))
  end

  def create
    @movie = Movie.new params[:movie]
    if @movie.save
      respond_with @movie
    else
      respond_with @movie, :status => :unprocessable_entity
    end
  end
end
