from django.shortcuts import render
from pymongo import MongoClient
from django.http import HttpResponse

import json

# Create your views here.
from elasticsearch import Elasticsearch
from mongo import mongo
es = Elasticsearch()


def rate_company(request, company_id, rate):
    document = mongo.mongo_client()['taiji']['compnay_meta_data']
    document.insert_one({"compnay_id": company_id, "rate": rate})
    return HttpResponse(json.dumps({"status": "200"}, ensure_ascii=False),
                        content_type="application/json", charset='utf-8')


def order_company(request, company_id, user_id):
    document = mongo.mongo_client()['taiji']['compnay_monitor']
    result = document.find_one({"company_id": company_id, "user_id": user_id})
    if result is None:
        result = {"company_id": company_id, "user_id": user_id}
    document.insert(result)
    return HttpResponse(json.dumps({"status": "200"}, ensure_ascii=False),
                        content_type="application/json", charset='utf-8')