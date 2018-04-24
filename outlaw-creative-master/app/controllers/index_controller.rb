class IndexController < ApplicationController
  def show
    @rubrics = Rubric.all
    @posts = Post.all
    render template: 'index/index'
  end
end
