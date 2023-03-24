
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class RegisterInfo(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    type = models.CharField(max_length=100, null=False)
    date_of_birth = models.DateField(null=True)
    family_code = models.CharField(max_length=100, null=True)
    physician_code = models.CharField(max_length=100, null=True)
    ssn = models.CharField(max_length=100, null=True)
    phone_number = models.CharField(max_length=100, null=True)
    def __str__(self):
        return self.user.username + " " + self.type

class MedicalRecord(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    disorder = models.CharField(max_length=100, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    date = models.DateField(null=False)
    symptoms = models.CharField(max_length=100, null=True)
    medications = models.CharField(max_length=100, null=True)
    show = models.BooleanField(default=False)
    def __str__(self):
        return self.user.username + " " + self.disorder

class Profile(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
    race = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=100, null=True)
    
    def __str__(self):
        return f'{self.user.username} Profile'