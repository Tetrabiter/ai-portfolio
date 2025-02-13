from fastapi import FastAPI
from pydantic import BaseModel
import ollama

app = FastAPI()

# Определяем модель запроса
class ChatRequest(BaseModel):
    prompt: str

@app.post("/chat")
async def chat(request: ChatRequest):
    response = ollama.chat(model="mistral", messages=[{"role": "user", "content": request.prompt}])
    return {"response": response["message"]["content"]}
