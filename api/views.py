from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from .models import Property

# Create your views here.
def properties(request):
    if(request.headers.get('x-requested-with') == "XMLHttpRequest"):
        property_resources = Property.objects.all()
        return JsonResponse({"properties" : list(property_resources)}, safe=False)
    
    return HttpResponseBadRequest("Bad Request")
    