from django.utils import timezone
from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=15, unique=True)
    description = models.TextField()

    class Meta:
        db_table = "test_task_group"


def get_current_date():
    return timezone.now().date()


class User(models.Model):
    username = models.CharField(max_length=15, unique=True)
    creation_date = models.DateField(default=get_current_date, editable=False)
    group = models.ForeignKey(Group, on_delete=models.PROTECT)

    class Meta:
        db_table = "test_task_user"
