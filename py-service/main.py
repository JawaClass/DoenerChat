from fastapi import FastAPI, APIRouter
from pprint import pprint
from TTS.api import TTS # type: ignore
def main():
    print("Hello from py-service!")


if __name__ == "__main__":
    main()

app = FastAPI()

router = APIRouter()

@app.get("/")
def hello_world():
    print("models:")
    pprint(TTS().list_models())
    return "hello world from py-service handling all things python :)"


