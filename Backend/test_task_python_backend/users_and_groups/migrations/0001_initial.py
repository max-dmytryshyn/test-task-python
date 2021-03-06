# Generated by Django 4.0.3 on 2022-03-07 18:47

from django.db import migrations, models
import django.db.models.deletion
import users_and_groups.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
                ('description', models.TextField()),
            ],
            options={
                'db_table': 'test_task_group',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30, unique=True)),
                ('creation_date', models.DateField(default=users_and_groups.models.get_current_date, editable=False)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='users_and_groups.group')),
            ],
            options={
                'db_table': 'test_task_user',
            },
        ),
    ]
