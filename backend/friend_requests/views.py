from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListAPIView
from django.contrib.auth import get_user_model
from .models import Friend_request
from .serializers import FriendRequestSerializer
from rest_framework.response import Response

User = get_user_model()


# Create your views here.

class ListFriendRequests(ListAPIView):
    queryset = Friend_request.objects.all()
    serializer_class = FriendRequestSerializer
    permission_classes = []

class FriendRequestAPIView(GenericAPIView):
    queryset = Friend_request.objects.all()
    serializer_class = FriendRequestSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        receiver = User.objects.all().filter(pk=kwargs.get('num'))[:1].get()
        data = {
            'requester': request.user.id,
            'receiver': receiver.id,
        }
        serializer = self.get_serializer(data=request.data)
        serializer.validate_unique(data)
        serializer.is_valid(raise_exception=True)
        serializer.save(requester=request.user, receiver=receiver, status='pending')
        return Response(serializer.data, status=201)

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(pk=kwargs.get('num'))[:1].get()
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        self.get_queryset().filter(pk=kwargs.get('num'))[:1].get().delete()
        return Response(status=204)

    def patch(self, request, *args, **kwargs):
        instance = self.get_queryset().filter(id=kwargs.get('num'))[:1].get()
        serializer = self.get_serializer( instance, data=request.data, partial=True)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)
