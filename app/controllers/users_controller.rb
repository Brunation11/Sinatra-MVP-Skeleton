get '/users/new' do
  erb :'users/new'
end

post '/users' do
  user = User.new(params)
  if user.save
    session[:user_id] = user.id
    redirect '/'
  else
    erb :'users/new', locals: { errors: user.errors.full_messages }
  end
end