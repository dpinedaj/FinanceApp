from rest_framework import viewsets

from investments.models import Investments, InvestmentPayments, InvestmentTypes, InvestmentStatusTypes
from investments.serializer import InvestmentsSerializer, InvestmentPaymentsSerializer, InvestmentStatusTypesSerializer, \
    InvestmentTypesSerializer


# Create your views here.

class InvestmentTypesView(viewsets.ModelViewSet):
    queryset = InvestmentTypes.objects.all()
    serializer_class = InvestmentTypesSerializer


class InvestmentsView(viewsets.ModelViewSet):
    queryset = Investments.objects.all()
    serializer_class = InvestmentsSerializer


class InvestmentStatusTypesView(viewsets.ModelViewSet):
    queryset = InvestmentStatusTypes.objects.all()
    serializer_class = InvestmentStatusTypesSerializer


class InvestmentPaymentsView(viewsets.ModelViewSet):
    queryset = InvestmentPayments.objects.all()
    serializer_class = InvestmentPaymentsSerializer
