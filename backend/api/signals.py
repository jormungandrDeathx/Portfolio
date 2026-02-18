from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Contact
from .utils import send_email

@receiver(post_save, sender=Contact)
def handler(sender, instance, created, **kwargs):
    '''Signal to send Response mail when new record created'''
    if created:
        send_email(instance.mail, instance.name)
    
     