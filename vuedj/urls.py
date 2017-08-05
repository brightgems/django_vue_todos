from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers
from rest_framework.authtoken import views as token_views
from rest_framework_swagger.views import get_swagger_view
from rest_framework_jwt.views import obtain_jwt_token
from app import views

router = routers.SimpleRouter()
router.register(r'todos', views.TodoViewSet)

schema_view = get_swagger_view(title='API Parking')

urlpatterns = [
    url(r'^$', views.index , name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api/docs/', schema_view),
    url(r'^accounts/', include('rest_framework.urls', namespace='rest_framework')),
    # {"non_field_errors":["Unable to log in with provided credentials."]}
    url(r'^api-token-auth', token_views.obtain_auth_token),
    url(r'^api-jwt-auth', obtain_jwt_token),
    url(r'^api/login/', views.LoginView.as_view(),name='login'),
  
]
