from django.db import models
from Humrahi.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver



# Create your models here.

class Notification(models.Model) :
    From  = models.ForeignKey(settings.AUTH_USER_MODEL,related_name='from1',on_delete= models.CASCADE)
    To = models.ForeignKey(settings.AUTH_USER_MODEL,related_name='to2',on_delete= models.CASCADE)
    timestamp = models.DateTimeField(auto_now=True)
    publish_time =models.DateTimeField(auto_now_add=True)
    notification = models.TextField(blank= True)
    notification_type = models.CharField(max_length= 10,blank =True )


    def __str__(self) :
        return '{}'.format(self.pk)




@receiver(post_save,sender=settings.AUTH_USER_MODEL) 
def create_notification(sender,instance,created,**kwargs) :
   if created :
       Notification.objects.create(From= User.objects.get(pk=1),To=instance,notification='Welcome User!THis is A Cab Sharing Site For IITG campus')

# @receiver(post_save,sender=settings.AUTH_USER_MODEL)
# def update_profile(sender,instance,created,**kwargs) :
#     try:
#        instance.profile.save()
#     except:
#         Profile.objects.create(user=instance)