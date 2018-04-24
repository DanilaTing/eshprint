class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  # GET /items
  # GET /items.json
  def index
    @items = Item.all
    @posts = Post.all
    @rubrics = Rubric.all
  end

  # GET /items/1
  # GET /items/1.json
  def show
    @rubrics = Rubric.all
    @posts = Post.all
    @rubrics = Rubric.all
  end

  # GET /items/new
  def new
    @rubrics = Rubric.all
    @item = Item.new
    @posts = Post.all
    @post = Post.find(params[:post_id])
  end

  # GET /items/1/edit
  def edit
    @rubrics = Rubric.all
    @posts = Post.all
  end

  def add_item
    @item = Item.new
    respond_to do |format|
      format.js { render :newInNew }
    end
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)
    @rubrics = Rubric.all

    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.js { render :newLink, status: :created, location: @item }
      else
        format.html { render :new }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    @rubrics = Rubric.all
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @rubrics = Rubric.all
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    def set_post
      if (params.has_key?(:post_id))
        @post = Post.find(params[:post_id])
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:caption, :order, :url, :type, :image, :post_id)
    end
end
