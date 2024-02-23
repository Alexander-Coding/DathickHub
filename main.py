# DatchickHub
# main.py

import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from datetime import datetime

app = FastAPI()

templates = Jinja2Templates(directory="src")


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request}
)

if __name__ == "__main__":
    uvicorn.run(app, port=8080)