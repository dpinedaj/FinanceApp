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

    def to_representation(self, instance):
        def parse_date(date):
            return "{}/{}/{}".format(date.day, date.month, date.year)

        def parse_money(amount):
            return "${:,}".format(amount) if amount is not None else None

        return {"id": instance.id,
                "income_type": instance.income_type.name,
                "amount": parse_money(instance.amount),
                "description": instance.description,
                "date": parse_date(instance.date)}
