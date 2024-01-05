from django.urls import path
from .views import property_details


app_name = 'properties'

urlpatterns = [
    path('details/', property_details, name="property_detail"),
]