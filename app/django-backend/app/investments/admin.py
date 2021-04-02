from django.contrib import admin

# Register your models here.
from investments.models import InvestmentPayments, InvestmentStatusTypes, InvestmentTypes, Investments

admin.register(InvestmentTypes)
admin.register(InvestmentStatusTypes)
admin.register(Investments)
admin.register(InvestmentPayments)
