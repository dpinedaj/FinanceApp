from django.db import models
from constants import cts
from spendings.models import Spends


# Create your models here.
class ResultsDate(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField(null=False)
    month = models.IntegerField(null=False)

    class Meta:
        db_table = f'"{cts.DATASCHEMA}"."results_date"'


class Results(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.ForeignKey("ResultsDate", on_delete=models.CASCADE, db_column="date")

    @property
    def spendings(self):
        return sum(sp.amount for sp in Spends.objects.all())
