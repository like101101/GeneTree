# Generated by Django 4.0.6 on 2022-08-03 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_additionalinfo_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='additionalinfo',
            name='image',
            field=models.ImageField(blank=True, default=None, null=True, upload_to='static/images/'),
        ),
    ]
