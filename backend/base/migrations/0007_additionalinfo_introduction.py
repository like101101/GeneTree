# Generated by Django 4.0.6 on 2022-08-03 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_additionalinfo_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='additionalinfo',
            name='introduction',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]
