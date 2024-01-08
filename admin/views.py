from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect


# Create your views here.

def admin_login(request):
    if request.user.is_authenticated:

        if request.user.is_superuser:
            return HttpResponseRedirect('/admin/dashboard/')
        else :
            return HttpResponseRedirect('/')
        
    return render(request, 'admin/auth.html')

def admin_verify(request):
    if request.method != 'POST':
        return HttpResponseRedirect('/login/')
    
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    admin = authenticate(username=username, password=password)
    
    if admin is not None:
        if admin.is_superuser:
            login(request, admin)
            return HttpResponseRedirect('/admin/dashboard/')
        else:
            return HttpResponseRedirect('/')
        
    
    return HttpResponseRedirect('/login/')
    
    

def admin_dashboard(request):
    return render(request, 'admin/pages/dashboard.html')

