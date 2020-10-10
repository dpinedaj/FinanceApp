from django.db import models
from constants import cts


class SpendTypes(models.Model):
    """
    :type id: AutoField
    :param id:

    :type name: CharField
    :param name:
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."spend_types"'

    def __str__(self):
        return "{} - {}".format(self.id, self.name)


class Spends(models.Model):
    """
    :type id: AutoField
    :param id:

    :type spend_type: CharField
    :param spend_type:

    """
    id = models.AutoField(primary_key=True)
    spend_type = models.ForeignKey("SpendTypes", on_delete=models.CASCADE, db_column="spend_type")
    amount = models.IntegerField(null=False)
    description = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."spends"'
