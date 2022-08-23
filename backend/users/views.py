from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView, CreateAPIView, UpdateAPIView, \
    get_object_or_404
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.mail import EmailMessage
from profiles.models import Profile

from .serializers import UserSerializer, UserRegistrationSerializer

User = get_user_model()


# api/users/
class ListUserAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


class RetrieveUserByIDAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


class SearchUserByStringAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(username__contains=request.kwargs.get('search_string'))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# backend/api/social/followers/
class ListFollowersAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        followers = request.user.user_profile.followers.all()
        serializer = self.get_serializer(followers, many=True)
        return Response(serializer.data)


class ListFollowingAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        followers = request.user.following.all()
        serializer = self.get_serializer(followers, many=True)
        return Response(serializer.data)


class ToogleFollowAPIView(UpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []

    def post (self, request, *args, **kwargs):
        followed_user = request.user.following.all()
        target_profile = Profile.objects.get(pk=kwargs.get('pk'))
        if target_profile in followed_user:
            request.user.following.remove(target_profile)
        else:
            request.user.following.add(target_profile)
        return Response(status=status.HTTP_202_ACCEPTED)


class RegisterUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# Get logged in user profile
class GetUserMeAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


    def get(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class UserValidationProfile(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = []
    lookup_field = "email"

    def get_object(self):
        obj = get_object_or_404(self.get_queryset().filter(email=self.request.data['email']))
        return obj

    def patch(self, request, *args, **kwargs):
        user_to_be_validated = self.get_object()
        serializer = self.get_serializer(user_to_be_validated, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(password=make_password(serializer.validated_data['password']))
        return Response(serializer.data)

