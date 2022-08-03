from django.shortcuts import render
from django.http import JsonResponse
from ..models import AdditionalInfo
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from ..serializers import PatientInfoSerializer, PhysicianInfoSerializer, GeneralInfoSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.serializers import UserSerializerWithToken

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Create your views here.
def getHomePage(request):
    return JsonResponse("HomePage for APIs, welcome!", safe=False)

@api_view(['GET'])
def getGeneralInfo(request):
    infos = AdditionalInfo.objects.all()
    serializer = GeneralInfoSerializer(infos, many=True)
    return JsonResponse(serializer.data, safe=False)

