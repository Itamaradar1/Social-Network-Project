from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=200)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='posts')
    likers = models.ManyToManyField(to=User, blank=True, related_name='liked_posts')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'ID {self.pk} : {self.title} Posted by : {self.user}'

