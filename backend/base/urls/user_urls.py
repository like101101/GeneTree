from django.urls import path
from ..views import user_views
from ..views.user_views import MyTokenObtainPairView

urlpatterns = [
    path('info/', user_views.getRegisterInfo, name='GeneralInfo'),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', user_views.register_user, name='register-user'),
    path('registerinfo/', user_views.getRegisterInfo, name='register-info'),
    path('profile/', user_views.get_profile_by_user, name='profile'),
    path('records/', user_views.get_medical_records_by_user, name='records'),
    path('records/update/', user_views.update_visibility, name='update-visibility'),
]