from django.urls import path

from comments.views import GetCommentFromSpecificPostAPIView

urlpatterns = [
    # Endpoint for list off all comments or create a new comment for a specific post
    path('<int:post_id>/', GetCommentFromSpecificPostAPIView.as_view()),
]