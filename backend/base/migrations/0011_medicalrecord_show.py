# Generated by Django 4.0.6 on 2022-10-19 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_medicalrecord_disorder'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicalrecord',
            name='show',
            field=models.BooleanField(default=False),
        ),
    ]