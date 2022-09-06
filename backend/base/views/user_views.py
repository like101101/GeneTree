from django.http import JsonResponse
from ..models import RegisterInfo
from rest_framework.decorators import api_view, permission_classes
from ..serializers import RegisterInfoSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.serializers import UserSerializerWithToken
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAdminUser



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
def getRegisterInfo(request):
    infos = RegisterInfo.objects.all()
    serializer = RegisterInfoSerializer(infos, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password'])
        )
        data = data['registerInfo']
        registerInfo = RegisterInfo.objects.create(
            user = user,
            type = data['type'],
            date_of_birth = data['birthday'],
            family_code = data['familyCode'],
            physician_code = data['physicianCode'],
            ssn = data['ssn'],
            phone_number = data['phone']
        )
        user_serializer = UserSerializerWithToken(user, many=False)
        registerInfo_serializer = RegisterInfoSerializer(registerInfo, many=False)
        return Response( { 'user': user_serializer.data, 'register': registerInfo_serializer.data })
    except Exception as e:
        message = {'detail': 'Woops, something went wrong!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
