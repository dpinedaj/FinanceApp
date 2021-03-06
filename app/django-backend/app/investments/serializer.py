from rest_framework import serializers
from django.db import transaction
from investments.models import Investments, InvestmentTypes, InvestmentStatusTypes, InvestmentPayments
from utils.parsers import parse_date, parse_money
from datetime import datetime
from constants import cts


class InvestmentTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentTypes
        fields = ['id', 'name']


class InvestmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investments
        fields = ['investment_type', 'amount', 'description',
                  'status', 'open_date', 'next_payment', 'close_date']

    def to_representation(self, instance):
        # TODO ON DEVELOP
        return {"id": instance.id,
                "investment_type": instance.investment_type.name,
                "amount": parse_money(instance.amount),
                "description": instance.description,
                "status": instance.status.name,
                "open_date": parse_date(instance.open_date),
                "next_payment": parse_date(instance.next_payment),
                "close_date": parse_date(instance.close_date)}

    @transaction.atomic
    def create(self, validated_data):
        # TODO TESTING
        return Investments.objects.create(**validated_data)


class InvestmentStatusTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentStatusTypes
        fields = ['id', 'name']


class InvestmentPaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentPayments
        fields = ['id', 'investment_id', 'amount', 'date']
