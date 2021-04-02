from rest_framework import serializers
from spendings.models import Spends, SpendTypes
from utils.parsers import parse_date, parse_money


class SpendTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendTypes
        fields = ['id', 'name']


class SpendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spends
        fields = ['id', 'spend_type', 'amount', 'description', 'date']

    def to_representation(self, instance):
        return {"id": instance.id,
                "spend_type": instance.spend_type.name,
                "amount": parse_money(instance.amount),
                "description": instance.description,
                "date": parse_date(instance.date)}
