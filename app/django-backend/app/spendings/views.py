from rest_framework import viewsets

from spendings.models import Spends, SpendTypes
from spendings.serializer import SpendsSerializer, SpendTypesSerializer


# Create your views here.

class SpendTypesView(viewsets.ModelViewSet):
    queryset = SpendTypes.objects.all()
    serializer_class = SpendTypesSerializer


class SpendsView(viewsets.ModelViewSet):
    queryset = Spends.objects.all()
    serializer_class = SpendsSerializer
