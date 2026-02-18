from rest_framework.serializers import ModelSerializer
from .models import Contact

class ContactSerializer(ModelSerializer):
    '''Serializer class for ContactCreateAPIView'''
    class Meta:
        model = Contact
        exclude = ["id"]