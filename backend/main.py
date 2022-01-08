from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from db import DB
import traceback

app = FastAPI()
db = DB()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def format_response(tweet):
    return {
        "id": str(tweet['tweet_id']),
        "message": str(tweet['text']),
        "keyword": str(tweet['keyword'])
    }

@app.get("/get-tweet")
def get_tweet():
    tweet = db.get_tweet()
    return format_response(tweet)

@app.post("/classification")
async def classification(request: Request):
    try:
        body = await request.json()
        tweet_id = body['tweet_id']
        classification = body['classification']
        if classification == "r":
            db.save_classification(tweet_id, racism=1)
        elif classification == "h":
            db.save_classification(tweet_id, homophobia=1)
        elif classification == "o":
            db.save_classification(tweet_id, only_offensive=1)
        elif classification == "n":
            db.save_classification(tweet_id, not_offensive=1)
        elif classification == "":
            db.save_classification(tweet_id)
        else:
            raise HTTPException(status_code=400, detail="Error on classification")
        return {
            "msg": "OK"
        }
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        raise HTTPException(status_code=400, detail=str(e))
