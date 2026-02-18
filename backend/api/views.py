from rest_framework.generics import CreateAPIView
from rest_framework.throttling import AnonRateThrottle
from .models import Contact
from .serializers import ContactSerializer

class ContactView(CreateAPIView):
    '''APIView for /contact path'''
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    throttle_classes = [AnonRateThrottle]