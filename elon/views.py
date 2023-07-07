from django.shortcuts import render
from django.http import HttpResponse
from .models import *


def index(request):
    menus = Menu.objects.all()
    features = Feature.objects.all()
    return render(request, 'elon/index.html', {'menus': menus, 'features': features})