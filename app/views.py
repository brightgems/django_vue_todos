from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import list_route,api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from .models import Todo
from .serializers import TodoSerializer
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login

def index(request):
    return render(request, 'index.html')


class LoginView(APIView):
    """
      custom login api, allow use identity of username or email
    """
    authentication_classes = ()
    permission_classes = (permissions.AllowAny,)
    @csrf_exempt
    def post(self, request, format=None):
        """
        Try to login a customer (food orderer)
        """
        data = request.data
        
        try:
            username = data['username']
            password = data['password']
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(username=username)
            if not check_password(password,user.password):
                raise ValidationError('wrong password!')
        except Exception as ex:
            return Response({'detail':str(ex)},status=status.HTTP_401_UNAUTHORIZED)


        try:
            user_token = user.auth_token.key
        except:
            user_token = Token.objects.create(user=user)
        login(request, user)
        data = {'token': user_token}
        return Response(data=data, status=status.HTTP_200_OK)

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    @list_route(methods=['delete'])
    def clear_todos(self, request):
        todos = Todo.objects.all()
        todos.delete()
        return HttpResponse(status=200)
        # It may be a good idea here to return [].  Not sure.

        