from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import send_mail


# Create your views here.
def index(request):
    return render(request, 'layouts/index.html')



def send_email(request):
    full_name = request.POST.get('full_name', '')
    client_email = request.POST.get('email', '')
    message = request.POST.get('message', '')
    
    if full_name and client_email and message:
        send_mail('emmanmale@gmail.com', message, client_email)
    
        return HttpResponseRedirect('/contact/thanks')

    return HttpResponseRedirect('/')