from rest_framework import serializers
from incomes.models import Incomes, IncomeTypes


class IncomeTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeTypes
        fields = ['id', 'name']


class IncomesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incomes
        fields = ['id', 'income_type', 'amount', 'description', 'date']
