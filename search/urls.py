__author__ = 'lin'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^company/page/(.*)', views.company_detail, name='company'),
    url(r'^query/(.*)', views.search_companys, name='search'),
    url(r'^company/info/(.*)', views.get_company_detail, name='companyInfo'),
]