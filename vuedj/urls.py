from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers
from rest_framework.authtoken import views as token_views

from app import views

router = routers.SimpleRouter()
router.register(r'todos', views.TodoViewSet)

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls',
    #                            namespace='rest_framework')),
    # {"non_field_errors":["Unable to log in with provided credentials."]}
    url(r'^api-auth/token', token_views.obtain_auth_token),
    url(r'^api/login', views.login,name='login')
]
