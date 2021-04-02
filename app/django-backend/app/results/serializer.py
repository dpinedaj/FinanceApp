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
        def parse_date(date):
            return datetime.strftime(datetime(date.year, date.month, 1), "%B-%Y")

        def parse_money(amount):
            return "${:,}".format(amount) if amount is not None and amount != 0 else None

        return {"date": parse_date(instance.date),
                "account_balance": parse_money(instance.account_balance),
                "investments": parse_money(instance.investments),
                "incomes": parse_money(instance.incomes),
                "spendings": parse_money(instance.spendings),
                "outcomes": parse_money(instance.outcomes)}
