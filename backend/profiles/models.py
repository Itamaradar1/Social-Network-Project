from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(to=User, related_name='user_profile', on_delete=models.CASCADE, null=True, blank=True, unique=True)
    followers = models.ManyToManyField(to=User, related_name='following', blank=True)
