from django.contrib import admin

# Register your models here.
from incomes.models import IncomeTypes, Incomes

# Register your models here.
admin.site.register(IncomeTypes)
admin.site.register(Incomes)