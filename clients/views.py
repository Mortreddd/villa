from django.shortcuts import render
from django.urls import reverse
from properties.models import Property


# Create your views here.
def index(request):
    
    
    # * Query the 6 properties and avoid the N+1 problem
    # * The N+1 problem is when you make N queries to the database to get the data you need
    
    return render(request, 'layouts/index.html',{
        'properties' : Property.objects.select_related('property_type').all().order_by('created_at')[:6]
    }) 






