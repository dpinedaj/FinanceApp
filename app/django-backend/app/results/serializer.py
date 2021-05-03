from rest_framework import serializers
from results.models import ResultsDate, Results
from datetime import datetime
from utils.parsers import parse_money, parse_date


class ResultsDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResultsDate
        fields = ['id', 'year', 'month']


class ResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Results
        fields = ['id', 'date', 'spendings']

    def to_representation(self, instance):
        return {"date": parse_date(instance.date),
                "account_balance": parse_money(instance.account_balance),
                "investments": parse_money(instance.investments),
                "incomes": parse_money(instance.incomes),
                "spendings": parse_money(instance.spendings),
                "outcomes": parse_money(instance.outcomes)}
