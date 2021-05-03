class Api::TodosController < ApplicationController 

    def index 
        @todos = Todo.all
        render json: @todos
    end 


    def create 
        @todo = Todo.new(todo_params)
        debugger
        if @todo.save
            render json: @todo
        else 
            debugger
            render json: @todo.errors.full_messages, status: 422
        end 
    end 

    def show
         render json: Todo.find(params[:id])
    end

    def update 
        @todo = Todo.find(params[:id])

        if @todo.update
            render json: @todo
        else 
            render json: @todo.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @todo = Todo.find(params[:id])

        if @todo.destroy
            render json: index 
        else 
             render json: @todo.errors.full_messages, status: 422
        end 





    end 

    private

    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end

end 