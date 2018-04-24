class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :client
      t.string :year
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
