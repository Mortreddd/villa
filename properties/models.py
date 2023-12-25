from django.db import models

class PropertyType(models.Model):
    type_name = models.CharField(max_length=50)
    
class Property(models.Model):
    address = models.CharField(max_length=100)
    price = models.IntegerField()
    square_footage = models.IntegerField()
    number_of_bedrooms = models.IntegerField()
    number_of_bathrooms = models.IntegerField()
    image = models.ImageField(upload_to='static/images/')
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    property_type = models.ForeignKey(PropertyType, on_delete=models.CASCADE)