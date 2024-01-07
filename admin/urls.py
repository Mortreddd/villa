from django.urls import path
from .views import admin_index, admin_login

app_name='admin'

urlpatterns = [
    path('login/', admin_login, name="login"),
    path('dashboard/', admin_index, name='index'),
]