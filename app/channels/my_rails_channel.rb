class MyRailsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "my_rails"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)

    puts "=========================="
    puts "==============#{data['data']}"

    case data['type']
    when 'add_template'
      add_template(data['data'])
    when 'delete_template'
      delete_template(data['data'])
    end

    # test_app = TestApp.new(data['totalData'])

    # if test_app.save
    #   test_app_data = TestApp.all
    #   ActionCable.server.broadcast('my_rails', { message: test_app_data })
    # end

    # ActionCable.server.broadcast('my_rails', { message: data['totalData'] })
  end
  private

  def add_template(template_data)
    template = TestApp.new(template_data)

    if template.save
      puts "Template added: #{template.inspect}"
      test_app_data = TestApp.all
      ActionCable.server.broadcast("my_rails", { message:  test_app_data})
    else
      puts "Template add error: #{template.errors.full_messages}"
      ActionCable.server.broadcast("my_rails", { errors: template.errors.full_messages })
    end
  end

  def delete_template(template_id)
    template = TestApp.find_by(id: template_id)

    if template&.destroy
      puts "Template deleted: #{template_id}"
      test_app_data = TestApp.all
      ActionCable.server.broadcast("my_rails", { message: test_app_data })
    else
      puts "Template delete error: Template not found"
      ActionCable.server.broadcast("my_rails", { errors: 'Template not found' })
    end
  end
end
