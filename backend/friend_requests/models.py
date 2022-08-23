from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Friend_request(models.Model):
    status = models.TextField(default='pending')
    created = models.DateTimeField(auto_now_add=True)
    requester = models.ForeignKey(to=User, related_name='requests', on_delete=models.CASCADE, null=True, blank=True)
    receiver = models.ForeignKey(to=User, related_name='received', on_delete=models.CASCADE, null=True, blank=True)