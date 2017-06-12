import json
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from elasticsearch import Elasticsearch

"""
es 客户端接口
"""
es = Elasticsearch()


# Create your views here.
def index(request):
    """
    搜索首页
    """
    template = loader.get_template('search/indexre.html')

    return HttpResponse(template.render({}, request))


def search_companys(request, keywords):
    """
    company 搜索页面
    """
    context = es.search(index='', body={"query":{"match":{"name":keywords}}})
    return HttpResponse(json.dumps(context, ensure_ascii=False), \
            content_type="application/json", charset='utf-8')


def company_detail(request, company_id):
    """
    公司详情页面
    """
    template = loader.get_template('search/company_detail.html')

    return HttpResponse(template.render({}, request))
