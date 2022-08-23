from rest_framework import serializers

from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class ToggleLikePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class GetAllPostsFromFollowedUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class GetLikedPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'