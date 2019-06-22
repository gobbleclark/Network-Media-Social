class Api::ProfilesController < ApplicationController
  include Devise::Controllers::Helpers
  def index
    render json: User.random_profile(current_user.liked_profiles)
  end

  def create
    
    profile = current_user.build_profile(profile_params) #this is how to do a has_one relationship
    if profile.save
      render json: profile
    else 
      render json: console.log(err)
    end
  end

  def edit
  end

  def update
    current_user.liked_profiles << params[:id].to_i
    current_user.save
  end

  def my_profiles
    render json: User.liked(current_user.liked_profiles)
  end

  private 
  def profile_params
    params.require(:profile).permit(:name, :user_name, :company, :position, :skills)
  end
end

