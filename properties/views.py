from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from .models import Property, PropertyType



def properties(request):
    property_types = PropertyType.objects.all()
    properties = Property.objects.select_related('property_type').all()
    
    return render(request, 'layouts/properties.html', {
        'property_types': property_types,
        'properties' : properties
        }
    )
 

def property_details(request):
    
    return render(request, 'layouts/property-details.html')


