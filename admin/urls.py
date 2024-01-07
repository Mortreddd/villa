from django.urls import path
from .views import admin_index, admin_login, dashboard

app_name='admin'

urlpatterns = [
    path('login/', admin_login, name="login"),
    path('login/verify', admin_index, name='verify'),
    path('dashboard/', dashboard, name="dashboard")
]