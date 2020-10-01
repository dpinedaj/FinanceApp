
from rest_framework import viewsets

from incomes.models import Incomes, IncomeTypes
from incomes.serializer import IncomesSerializer, IncomeTypesSerializer


# Create your views here.

class IncomeTypesView(viewsets.ModelViewSet):
    queryset = IncomeTypes.objects.all()
    serializer_class = IncomeTypesSerializer


class IncomesView(viewsets.ModelViewSet):
    queryset = Incomes.objects.all()
    serializer_class = IncomesSerializer
