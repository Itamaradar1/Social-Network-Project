from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Friend_request
from django.db.models import Q

User = get_user_model()

class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend_request
        fields = '__all__'

    def validate_unique(self, data):

        query = (Q(receiver_id=data['receiver']) & Q(requester_id=data['requester']))
        query.add(Q(receiver_id=data['requester']) & Q(requester_id=data['receiver']), Q.OR)

        already_existing = Friend_request.objects.filter(query)
        if already_existing:
            raise serializers.ValidationError("It already exists you cunt.")
        return