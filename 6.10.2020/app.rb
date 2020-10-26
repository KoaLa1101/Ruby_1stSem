require 'sinatra'
require 'pg'
require 'byebug'
require 'sinatra/reloader' if development?
require './Db.rb'


get '/' do
  conn = PG.connect(dbname: 'todo_app', host: 'localhost', user: 'postgres', password: 'Qwert123')
end


get '/todos' do
	@results = Db.all
  erb:index
end

get '/todos/new' do
	erb:new
end

get '/todos/:id' do
	@results = Db.where(params).first
	erb:show
end

get '/todos/:id/update' do
	@results = Db.where(params).first
	erb:update
end

post '/todos' do
	if params['custom_method'] == 'DELETE'
		@result = Db.where(params).first.delete

		redirect to('/todos')
	else
		@result = Db.new(params).save

		redirect to("/todos/#{@result.first['id']}")
	end
end

post 'todos/:id' do
	if params['custom_method'] == 'PUT'
		@result = Db.where(params).first.update(params)

		redirect to("/todos/#{params['id']}")
	end
end
