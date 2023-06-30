module Api
  class TestAppController < ApplicationController
    skip_before_action :verify_authenticity_token

    def demo
      render json: TestApp.where(id: params[:id]).last.as_json
    end    

    def create
      puts "=============================================="
      puts "test_app_params===========#{test_app_params}"
      puts "=============================================="
      test_app = TestApp.new(test_app_params)

      if test_app.save
        render json: test_app, status: :created
      else
        render json: test_app.errors, status: :unprocessable_entity
      end
    end

    def index
    test_app_data = TestApp.all
    render json: test_app_data
    end

    def remove
      test_app = TestApp.find(params[:id])
      if test_app.destroy
        render json: { message: 'Data deleted successfully' }
      else
        render json: { error: 'Error deleting data' }, status: :unprocessable_entity
      end
    end

    private
    def test_app_params
      params.require(:test_app).permit(
        :resource, 
        config: {}
      )
    end
  end
end
