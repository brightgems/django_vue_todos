from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Todo(models.Model):

    text = models.CharField(max_length=200)

    def __str__(self):
        return "Todo: " + self.text


class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile', unique=True)

    nickname = models.CharField('nickname', max_length=150)
                                   