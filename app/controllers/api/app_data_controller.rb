module Api
  class AppDataController < ApplicationController
    skip_before_action :verify_authenticity_token

    # def demo
    #   render json: Appdatum.where(id: params[:id]).last.as_json
    # end    

    def create
      puts "=============================================="
      puts "app_data_params===========#{app_data_params}"
      puts "=============================================="
      app_data = Appdatum.new(app_data_params)

      if app_data.save
        render json: app_data, status: :created
      else
        render json: app_data.errors, status: :unprocessable_entity
      end
    end

    # def update
    #   app_data = Appdatum.find_by_id(params['data_id'])
    #   db_app_data = app_data.data
    #   db_app_data.push(params[:data])

    #   if app_data.update(data: db_app_data)
    #     render json: app_data, status: :ok
    #   else
    #     render json: app_data.errors, status: :unprocessable_entity
    #   end
    # end

    def index
      app_data = Appdatum.all
      render json: app_data
    end

    # def delete
    #   app_data = Appdatum.find(params[:id])
    #   if app_data.destroy
    #     render json: { message: 'Data deleted successfully' }
    #   else
    #     render json: { error: 'Error deleting data' }, status: :unprocessable_entity
    #   end
    # end

    private
    def app_data_params
      params.permit(
        :dataname, 
        data: [:color, :number]
      )
    end
  end
end