from django.urls import path
from .views import admin_verify, admin_login, admin_dashboard

app_name='admin'

urlpatterns = [
    path('login/', admin_login, name="login"),
    path('login/verify', admin_verify, name='verify'),
    path('dashboard/', admin_dashboard, name="dashboard")
]