from django.db.models import ProtectedError
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404

from .models import Group, User
from .serializers import GroupSerializer, UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def destroy(self, request, pk=None):
        queryset = Group.objects.all()
        group = get_object_or_404(queryset, pk=pk)
        try:
            group.delete()
            return HttpResponse(status=200, content=group)
        except ProtectedError:
            return HttpResponse(status=403,
                                reason="Forbidden. Can't delete this group because there is at least one user in it")


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
