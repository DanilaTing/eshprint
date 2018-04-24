class Post < ApplicationRecord
  belongs_to :rubric, :optional => true
  has_many :items, :dependent => :destroy
end
