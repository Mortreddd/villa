from .views import send_email, thank_you
from django.urls import path


app_name = 'emails'
urlpatterns = [
    path('', send_email, name='contact'),
    path('thank-you/', thank_you, name="thanks")
]