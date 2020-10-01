from rest_framework import serializers
from spendings.models import Spends, SpendTypes


class SpendTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendTypes
        fields = ['id', 'name']


class SpendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spends
        fields = ['id', 'spend_type', 'amount', 'description', 'date']
