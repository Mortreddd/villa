from django.urls import path
from .views import property_details, properties


app_name = 'properties'

urlpatterns = [
    path('', properties, name="index"),
    path('details/', property_details, name="details"),
]                   