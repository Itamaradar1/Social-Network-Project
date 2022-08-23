
from django.contrib.auth import get_user_model
from django.db import models


from posts.models import Post

User = get_user_model()


class Comment(models.Model):
    content = models.CharField(max_length=100)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name='comments')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'ID {self.pk} : on post : {self.post.pk} : from: {self.user}'