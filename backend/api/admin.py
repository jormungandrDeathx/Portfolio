from django.contrib import admin
from .models import Contact

class ContactAdminView(admin.ModelAdmin):
    list_display = [field.name for field in Contact._meta.fields]
    
admin.site.register(Contact, ContactAdminView)
