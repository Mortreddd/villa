from django.urls import path, include
from .models import PropertiesResource, TransactionsResource
from tastypie.api import Api    

properties_resource = PropertiesResource()
transactions_resource = TransactionsResource()

v1_api = Api(api_name='v1')
v1_api.register(PropertiesResource())
v1_api.register(TransactionsResource())

