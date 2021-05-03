from django.db import models
from datetime import datetime, timedelta
from constants import cts
from spendings.models import Spends
from incomes.models import Incomes
from investments.models import Investments
from constants import cts

# Create your models here.
class ResultsDate(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(null=False)
    month = models.IntegerField(null=False)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."results_date"'

    def __str__(self):
        return f"{self.year}-{self.month}"


class Results(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.ForeignKey("ResultsDate", on_delete=models.CASCADE, db_column="date")
    account_balance = models.IntegerField(null=True)
    details = models.CharField(max_length=255, null=True)

    # TODO ON DEVELOP
    @property
    def investments(self):
        return sum(
            inv.amount for inv in Investments.objects
                .filter(open_date__gt=datetime(self.date.year, self.date.month, 1, tzinfo=cts.TIMEZONE))
                .filter(open_date__lt=datetime(self.date.year, self.date.month + 1, 1, tzinfo=cts.TIMEZONE))
                .all()
        )

    @property
    def incomes(self):
        return sum(
            inc.amount for inc in Incomes.objects
                .filter(date__gt=datetime(self.date.year, self.date.month, 1, tzinfo=cts.TIMEZONE))
                .filter(date__lt=datetime(self.date.year, self.date.month + 1, 1, tzinfo=cts.TIMEZONE))
                .exclude(income_type__name__in=cts.EXCLUDING_INCOMES)
                .all())

    @property
    def spendings(self):
        return sum(
            sp.amount for sp in Spends.objects
                .filter(date__gt=datetime(self.date.year, self.date.month, 1, tzinfo=cts.TIMEZONE))
                .filter(date__lt=datetime(self.date.year, self.date.month + 1, 1, tzinfo=cts.TIMEZONE))
                .exclude(spend_type__name__in=cts.EXCLUDING_SPENDS)
                .all())

    @property
    def outcomes(self):
        return sum(
            sp.amount for sp in Spends.objects
                .filter(date__gt=datetime(self.date.year, self.date.month, 1, tzinfo=cts.TIMEZONE))
                .filter(date__lt=datetime(self.date.year, self.date.month + 1, 1, tzinfo=cts.TIMEZONE))
                .all())

    @property
    def adjustment(self):
        return

    @property
    def balance(self):
        return

    @property
    def saving(self):
        return

    @property
    def total(self):
        return

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."results"'

    def __str__(self):
        return " "
