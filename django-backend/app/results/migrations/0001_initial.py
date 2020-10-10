# Generated by Django 3.0.5 on 2020-10-06 03:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ResultsDate',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('year', models.IntegerField()),
                ('month', models.IntegerField()),
            ],
            options={
                'db_table': '"data"."results_date"',
            },
        ),
        migrations.CreateModel(
            name='Results',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('account_balance', models.IntegerField(null=True)),
                ('details', models.CharField(max_length=255, null=True)),
                ('date', models.ForeignKey(db_column='date', on_delete=django.db.models.deletion.CASCADE, to='results.ResultsDate')),
            ],
            options={
                'db_table': '"data"."results"',
            },
        ),
    ]
