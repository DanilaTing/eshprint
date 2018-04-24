class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :caption
      t.string :order
      t.string :url
      t.string :type

      t.timestamps
    end
  end
end
