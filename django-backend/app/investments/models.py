from django.db import models
from constants import cts


class InvestmentTypes(models.Model):
    """
    :type id: AutoField
    :param id:

    :type name: CharField
    :param name:
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."investment_types"'

    def __str__(self):
        return "{} - {}".format(self.id, self.name)


class InvestmentStatusTypes(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."investment_status_types"'

    def __str__(self):
        return "{} - {}".format(self.id, self.name)


class Investments(models.Model):
    """
    :type id: AutoField
    :param id:

    :type spend_type: CharField
    :param spend_type:

    """
    id = models.AutoField(primary_key=True)
    investment_type = models.ForeignKey("InvestmentTypes", on_delete=models.DO_NOTHING, db_column="investment_type")
    amount = models.IntegerField(null=False)
    description = models.CharField(max_length=255)
    status = models.ForeignKey("InvestmentStatusTypes", on_delete=models.DO_NOTHING, db_column="status", default=1)
    open_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    next_payment = models.DateTimeField(null=False)
    close_date = models.DateTimeField(null=True)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."investments"'

    def __str__(self):
        return "{}_{}_{}_{}_{}_{}".format(
            self.id,
            self.investment_type,
            self.amount,
            self.description,
            self.open_date,
            self.status)


class InvestmentPayments(models.Model):
    id = models.AutoField(primary_key=True)
    investment_id = models.ForeignKey("Investments", on_delete=models.CASCADE, db_column="investment_id")
    amount = models.IntegerField(null=False)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        db_table = f'"{cts.DATA_SCHEMA}"."investment_payments"'

    def __str__(self):
        return "{}_{}_{}".format(self.investment_id, self.amount, self.date)
