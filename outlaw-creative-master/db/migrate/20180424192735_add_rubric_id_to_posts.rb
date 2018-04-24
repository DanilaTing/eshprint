class AddRubricIdToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :rubric_id, :integer
  end
end
