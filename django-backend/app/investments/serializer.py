from rest_framework import serializers
from investments.models import Investments, InvestmentTypes, InvestmentStatusTypes, InvestmentPayments


class InvestmentTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentTypes
        fields = ['id', 'name']


class InvestmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investments
        fields = ['id', 'investment_type', 'amount', 'description',
                  'status', 'open_date', 'next_payment']


class InvestmentStatusTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentStatusTypes
        fields = ['id', 'name']


class InvestmentPaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentPayments
        fields = ['id', 'investment_id', 'amount', 'date']
