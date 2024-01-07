from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect


# Create your views here.

def admin_login(request):
    return render(request, 'admin/auth.html')

def admin_index(request):
    
    if request.method != 'POST':
        return HttpResponseRedirect('/login/')
    
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    admin = User.objects.filter(username=username, is_superuser=True).first()
    if admin is None:
        return HttpResponseRedirect('/login/')
    
    admin = authenticate(username=username, password=password)
    login(request, admin)
    return render(request, 'admin/pages/index.html')