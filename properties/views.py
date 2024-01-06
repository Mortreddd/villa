from django.shortcuts import render
from .models import Property, PropertyType
# Create your views here.



def properties(request):
    property_types = PropertyType.objects.all()
    return render(request, 'layouts/properties.html', {'property_types': property_types})


def property_details(request):
    
    
    return render(request, 'layouts/property-details.html')

