
from django.urls import path

from posts.views import GetCreatePostAPIView, RetrieveUpdateDestroyPostAPIView, GetPostsFromUser, ToggleLikePost, \
    GetAllPostsFromFollowedUsers, GetLikedPosts

urlpatterns = [
    # Endpoint for getting a list of all posts or creating a new post
    path('', GetCreatePostAPIView.as_view()),
    # Endpoint for Retrieving, updating and deleting a specific post by post ID
    path('<int:id>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    # Endpoint for getting all posts from specific user
    path('user/<int:user_id>/', GetPostsFromUser.as_view()),
    # Endpoint for like/unlike a specific post by post ID
    path('toggle-like/<int:pk>/', ToggleLikePost.as_view()),
    # Endpoint for getting all liked posts from logged-in user
    path('likes/', GetLikedPosts.as_view()),
    # Endpoint for getting all posts from users that logged-in user is following
    path('following/', GetAllPostsFromFollowedUsers.as_view()),
]