
from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.response import Response

from comments.models import Comment
from comments.serializers import CommentSerializer


# get a list off all comments or create a new comment for a specific post
from posts.models import Post


class GetCommentFromSpecificPostAPIView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(post=kwargs['post_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=201)


    def post(self, request, *args, **kwargs):
        post = Post.objects.filter(id=kwargs['post_id'])[:1].get()
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(post=post, user=request.user)
        return Response(serializer.data, status=201)


