from django.db import models
from constants import cts


class IncomeTypes(models.Model):
    """
    :type id: AutoField
    :param id:

    :type name: CharField
    :param name:
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)

    class Meta:
        db_table = f'"{cts.DATASCHEMA}"."income_types"'

    def __str__(self):
        return "{} - {}".format(self.id, self.name)


class Incomes(models.Model):
    """
    :type id: AutoField
    :param id:

    :type spend_type: CharField
    :param spend_type:

    """
    id = models.AutoField(primary_key=True)
    income_type = models.ForeignKey("IncomeTypes", on_delete=models.CASCADE, db_column="income_type")
    amount = models.IntegerField(null=False)
    description = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        db_table = f'"{cts.DATASCHEMA}"."incomes"'
