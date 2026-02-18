from django.db import models as db

class Contact(db.Model):
    '''For collecting contact details from Frontend'''
    name = db.CharField(max_length=200)
    mail = db.EmailField()
    message = db.TextField()
    
    def __str__(self):
        '''returns name from Conctact class instead of object'''
        return self.name
    