class CreateAppdata < ActiveRecord::Migration[7.0]
  def change
    create_table :appdata do |t|

      t.string :dataname
      t.text :data, array: true, default: []

      t.timestamps
    end
  end
end
