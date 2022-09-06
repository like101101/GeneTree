# Generated by Django 4.0.6 on 2022-09-06 02:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0007_additionalinfo_introduction'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegisterInfo',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField(null=True)),
                ('family_code', models.CharField(max_length=100, null=True)),
                ('physician_code', models.CharField(max_length=100, null=True)),
                ('ssn', models.CharField(max_length=100, null=True)),
                ('phone_number', models.CharField(max_length=100, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='AdditionalInfo',
        ),
    ]