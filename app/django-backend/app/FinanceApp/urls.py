"""FinanceApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# Django libraries
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions, routers, serializers, viewsets

# Import main settings
from FinanceApp import settings

# Import Spendings views
from spendings.views import SpendTypesView, SpendsView

# Import Incomes views
from incomes.views import IncomeTypesView, IncomesView

# Import Investments views
from investments.views import InvestmentStatusTypesView, InvestmentPaymentsView, InvestmentsView, InvestmentTypesView

# Import Results views
from results.views import ResultsDateView, ResultsView


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Spendings
spend_namespace = "spendings"
router.register(spend_namespace + 'Types', SpendTypesView)
router.register(spend_namespace, SpendsView)

# Incomes
incom_namespace = "incomes"
router.register(incom_namespace + 'Types', IncomeTypesView)
router.register(incom_namespace, IncomesView)

# Investments
invest_namespace = "investments"
router.register(invest_namespace + 'Types', InvestmentTypesView)
router.register(invest_namespace, InvestmentsView)
router.register(invest_namespace + 'StatusTypes', InvestmentStatusTypesView)
router.register(invest_namespace + 'Payments', InvestmentPaymentsView)

results_namespace = "results"
router.register(results_namespace, ResultsView)
router.register(results_namespace + "Date", ResultsDateView)

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
                  path('', include(router.urls)),
                  path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
                  path('admin/', admin.site.urls),

                  path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
                  path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
