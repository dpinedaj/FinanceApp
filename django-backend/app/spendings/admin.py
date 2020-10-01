from django.contrib import admin

from spendings.models import SpendTypes, Spends

# Register your models here.
admin.site.register(SpendTypes)
admin.site.register(Spends)