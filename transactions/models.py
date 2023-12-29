from django.db import models

# Create your models here.
class Transaction(models.Model):
    
    client = models.ForeignKey('clients.Client', on_delete=models.CASCADE)
    property = models.ForeignKey('properties.Property', on_delete=models.CASCADE)
    sale_price = models.IntegerField()
    transaction_date = models.DateField(auto_now_add=True)
    