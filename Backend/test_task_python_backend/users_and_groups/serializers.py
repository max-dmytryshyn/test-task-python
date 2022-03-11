from rest_framework import serializers
from .models import Group, User


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    group_name = serializers.CharField(source="group.name", read_only=True)
    group = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all(), write_only=True)

    class Meta:
        model = User
        fields = "__all__"


