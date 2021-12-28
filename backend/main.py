from fastapi import FastAPI

app = FastAPI()


@app.get("/next-tweet")
def next_tweet():
    return {
        "id": "123124125151",
        "message": "teste",
        "keyword": "viado"
    }

@app.post("/classification")
def classification():
    return {
        "msg": "OK"
    }
