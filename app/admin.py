from django.contrib import admin
from app.models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = (['text'])
# Register your models here.

admin.site.register(Todo,TodoAdmin)