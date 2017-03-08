class Api::TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = selected_todo
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = selected_todo
    if @todo
      @todo.destroy
      render json: Todo.all
    else
      render json: ["Todo not found"]
    end
  end

  def show
    @todo = selected_todo
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def selected_todo
    Todo.find_by(id: params[:id])
  end

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
