from django.urls import path
from .views import FriendRequestAPIView, ListFriendRequests


urlpatterns = [

    # backend/api/social/friends/request/
    path('', ListFriendRequests.as_view()),
    path('<int:num>', FriendRequestAPIView.as_view())

]
