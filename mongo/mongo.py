from pymongo import MongoClient


def mongo_client_provider():
    client = MongoClient()

    def get_client():
        return client

    print("create provider")
    return get_client


mongo_client = mongo_client_provider()
