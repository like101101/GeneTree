from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def getHomePage(request):
    return JsonResponse("HomePage for APIs, welcome!", safe=False)