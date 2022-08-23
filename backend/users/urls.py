from django.urls import path
from .views import ListUserAPIView, RetrieveUserByIDAPIView, SearchUserByStringAPIView, \
    ListFollowersAPIView, RegisterUser, GetUserMeAPIView, UserValidationProfile, ToogleFollowAPIView, \
    ListFollowingAPIView

urlpatterns = [
    path('users/', ListUserAPIView.as_view()),
    path('registration/', RegisterUser.as_view()),
    path('registration/validation/', UserValidationProfile.as_view()),

    # backend/api/users/
    path('', ListUserAPIView.as_view()),
    # path('me/', RetrieveCurrentUserAPIView.as_view()),
    path('<int:pk>', RetrieveUserByIDAPIView.as_view()),
    path('me/', GetUserMeAPIView.as_view()),
    # path('?search', SearchUserByStringAPIView.as_view()),

    # backend/api/social/followers/
    path('toggle-follow/<int:pk>/', ToogleFollowAPIView.as_view()),
    path('followers/', ListFollowersAPIView.as_view()),
    path('following/', ListFollowingAPIView.as_view()),

]
