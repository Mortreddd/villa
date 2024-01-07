from django.urls import path
from .views import index, send_email, thank_you

app_name='clients'
urlpatterns =[
    path('', index, name='home'),
    path('contact/', send_email, name='contact'),
    path('contact/thank-you/', thank_you, name="thanks")
]