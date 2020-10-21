from rest_framework import serializers
from incomes.models import Incomes, IncomeTypes
from utils.parsers import parse_money, parse_date


class IncomeTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeTypes
        fields = ['id', 'name']


class IncomesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incomes
        fields = ['id', 'income_type', 'amount', 'description', 'date']

    def to_representation(self, instance):
        return {"id": instance.id,
                "income_type": instance.income_type.name,
                "amount": parse_money(instance.amount),
                "description": instance.description,
                "date": parse_date(instance.date)}
