from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class AdditionalInfo(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    type = models.CharField(max_length=100, null=False)
    medical_history = models.TextField(null=True, blank=True, default=None)
    def __str__(self):
        return self.user.username + " " + self.type