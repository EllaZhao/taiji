from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from elasticsearch import Elasticsearch

es = Elasticsearch()

# Create your views here.
def index(request):
    template = loader.get_template('search/indexre.html')

    return HttpResponse(template.render({}, request))


def search_companys(request, keywords):
    template = loader.get_template('search/indexre.html')
    context = es.search(index='', body={"query": {"match_all": {}}})
    return HttpResponse(template.render(context, request))

def company_detail(request, company_id):
    template = loader.get_template('search/company_detail.html')

    return HttpResponse(template.render({}, request))
