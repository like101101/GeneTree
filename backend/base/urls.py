from django.urls import path
from .views import user_views
from .views.user_views import MyTokenObtainPairView

urlpatterns = [
    path('info/', user_views.getGeneralInfo, name='GeneralInfo'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]