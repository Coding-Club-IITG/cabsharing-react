# Generated by Django 3.0.4 on 2020-04-07 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatService', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chats',
            name='participants',
            field=models.ManyToManyField(related_name='chats', to='chatService.Contact'),
        ),
    ]