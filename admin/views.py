from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect


# Create your views here.

def admin_login(request):
    return render(request, 'admin/auth.html')

def admin_index(request):
    logout(request)
    if request.method != 'POST':
        return HttpResponseRedirect('/login/')
    
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    admin = authenticate(username=username, password=password)
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    
    elif admin is None:
        return HttpResponseRedirect('/login/')
    
    elif not admin.is_superuser:
        return HttpResponseRedirect('/login/')
    
    login(request, admin)
    return HttpResponseRedirect('/admin/dashboard/')

def dashboard(request):
    return render(request, 'admin/pages/dashboard.html')