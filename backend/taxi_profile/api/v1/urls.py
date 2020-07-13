from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DocumentViewSet,
    UserProfileViewSet,
    DriverProfileViewSet,
    InviteCodeViewSet,
    NotificationViewSet,
)

router = DefaultRouter()
router.register("userprofile", UserProfileViewSet)
router.register("notification", NotificationViewSet)
router.register("driverprofile", DriverProfileViewSet)
router.register("invitecode", InviteCodeViewSet)
router.register("document", DocumentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
