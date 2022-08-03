# Generated by Django 4.0.6 on 2022-08-03 02:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0002_delete_patientadditionalinfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='PatientAdditionalInfo',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('medical_history', models.TextField(blank=True, default=None, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
