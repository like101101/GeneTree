# Generated by Django 4.0.6 on 2022-10-13 22:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0008_registerinfo_delete_additionalinfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('profile_pic', models.ImageField(blank=True, upload_to='profile_pics')),
                ('race', models.CharField(max_length=100, null=True)),
                ('sex', models.CharField(max_length=100, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='MedicalRecord',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('symptoms', models.CharField(max_length=100, null=True)),
                ('medications', models.CharField(max_length=100, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
