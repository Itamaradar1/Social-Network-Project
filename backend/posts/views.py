from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView, GenericAPIView, \
    ListAPIView
from rest_framework.response import Response

from posts.models import Post

from posts.serializers import PostSerializer, ToggleLikePostSerializer, GetAllPostsFromFollowedUsersSerializer, \
    GetLikedPostsSerializer


# get a list off all posts chronologically  / create a new post
User = get_user_model()


class GetCreatePostAPIView(ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# retrieve Update or Delete a specific post
class RetrieveUpdateDestroyPostAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []
    lookup_field = 'id'


# retrieve all posts from specific user
class GetPostsFromUser(GenericAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer
    permission_classes = []


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(user=kwargs['user_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


#  Like/unLike a specific post
class ToggleLikePost(GenericAPIView):
    serializer_class = ToggleLikePostSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        liked_posts_by_user = request.user.liked_posts.all()
        post = Post.objects.get(id=kwargs.get('pk'))
        if post in liked_posts_by_user:
            request.user.liked_posts.remove(post)
        else:
            request.user.liked_posts.add(post)
        return Response(status=status.HTTP_200_OK)


# get all posts from users followed
class GetAllPostsFromFollowedUsers(ListAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = GetAllPostsFromFollowedUsersSerializer
    permission_classes = []


    def get(self, request, *args, **kwargs):
        followed = request.user.following.all().values_list('id')
        post_of_followed = self.get_queryset().filter(created_by__in=followed)
        serializer = self.get_serializer(post_of_followed, many=True)
        return Response(serializer.data)


# Get list of posts user liked
class GetLikedPosts(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = GetLikedPostsSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        liked_posts_by_user = request.user.liked_posts.all()
        serializer = self.get_serializer(liked_posts_by_user, many=True)
        return Response(serializer.data)





