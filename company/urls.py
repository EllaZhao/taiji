__author__ = 'lin'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^rate_company/(.*)/rate/(.*)', views.rate_company, name='company'),
    url(r'^order_company/(.*)/user/(.*)', views.order_company, name='order'),
]