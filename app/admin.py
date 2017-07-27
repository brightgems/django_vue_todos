from django.contrib import admin
from app.models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = (['text'])
# Register your models here.

admin.site.register(Todo,TodoAdmin)

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)