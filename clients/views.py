from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.core.mail import send_mail


# Create your views here.
def index(request):
    return render(request, 'layouts/index.html')

def send_email(request):
    full_name = request.POST.get('full_name', '')
    client_email = request.POST.get('email', '')
    subject = request.POST.get('subject', '')
    message = request.POST.get('message', '')
    
    fields = [full_name, client_email, subject, message]
    if all(fields):
        send_mail(subject, message, client_email, ['emmanmale@gmail.com'], fail_silently=False)
    
        return HttpResponseRedirect(reverse('clients:thanks'))

    return HttpResponseRedirect(reverse('clients:home'))


def thank_you(request):
    return render(request, 'layouts/thanks.html')