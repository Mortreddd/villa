from django.db import models
from tastypie.resources import ModelResource
from properties.models import Property, PropertyType
from transactions.models import Transaction


# Create your models here.
class PropertiesResource(ModelResource):
    
    class Meta:
        queryset = Property.objects.select_related('property_type').all()
        resource_name = 'properties'
        
        

class TransactionsResource(ModelResource):
    
    
    class Meta:
        queryset = Transaction.objects.all()
        resource_name = 'transactions'