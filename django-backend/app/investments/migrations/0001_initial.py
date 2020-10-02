# Generated by Django 3.0.5 on 2020-10-02 12:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InvestmentStatusTypes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': '"data"."investment_status_types"',
            },
        ),
        migrations.CreateModel(
            name='InvestmentTypes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': '"data"."investment_types"',
            },
        ),
        migrations.CreateModel(
            name='Investments',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('amount', models.IntegerField()),
                ('description', models.CharField(max_length=255)),
                ('open_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('next_payment', models.DateTimeField()),
                ('close_date', models.DateTimeField(null=True)),
                ('investment_type', models.ForeignKey(db_column='investment_type', on_delete=django.db.models.deletion.DO_NOTHING, to='investments.InvestmentTypes')),
                ('status', models.ForeignKey(db_column='status', default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='investments.InvestmentStatusTypes')),
            ],
            options={
                'db_table': '"data"."investments"',
            },
        ),
        migrations.CreateModel(
            name='InvestmentPayments',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('amount', models.IntegerField()),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('investment_id', models.ForeignKey(db_column='investment_id', on_delete=django.db.models.deletion.CASCADE, to='investments.Investments')),
            ],
            options={
                'db_table': '"data"."investment_payments"',
            },
        ),
    ]
