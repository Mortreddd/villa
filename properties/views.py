from django.shortcuts import render
from .models import Property
# Create your views here.

def property_details(request):
    # property = Property.objects.get(pk=property_id) | Property.objects.order_by('price').first()
    
    
    return render(request, 'layouts/property-details.html')

