# Generated by Django 3.0.4 on 2020-04-12 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Notifications', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='notification_type',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]