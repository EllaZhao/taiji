__author__ = 'lin'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^company/(.*)', views.company_detail, name='company'),
    url(r'^(.*)', views.search_companys, name='search'),
]