class CreateTestApp < ActiveRecord::Migration[7.0]
  def change
    create_table :test_apps do |t|

      t.string :resource
      t.json :config

      t.timestamps
    end
  end
end
