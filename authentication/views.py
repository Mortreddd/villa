from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

# Create your views here.

def login(request):
    
    if request.method != 'POST':
        return render(request, 'layouts/auth/login.html')
    
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    
    if not username or not password:
        return HttpResponseRedirect(reverse('auth:login'))
        
    return HttpResponseRedirect(reverse('clients:home'))
        