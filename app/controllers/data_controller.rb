class DataController < ApplicationController
  protect_from_forgery except: :create
  respond_to :json

  

  def create
    @stock_obj = Datum.new(params.require(:stockObj).permit!)
    @stock_obj.save
    head :ok 
  end

  def index
    @data = Datum.all
  end

end
