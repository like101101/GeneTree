# Generated by Django 4.0.6 on 2022-08-03 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PatientAdditionalInfo',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('medical_history', models.TextField(null=True)),
            ],
        ),
    ]
