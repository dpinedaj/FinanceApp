from rest_framework import viewsets

from results.models import ResultsDate, Results
from results.serializer import ResultsDateSerializer, ResultsSerializer


# Create your views here.

class ResultsDateView(viewsets.ModelViewSet):
    queryset = ResultsDate.objects.all()
    serializer_class = ResultsDateSerializer


class ResultsView(viewsets.ModelViewSet):
    queryset = Results.objects.all()
    serializer_class = ResultsSerializer
