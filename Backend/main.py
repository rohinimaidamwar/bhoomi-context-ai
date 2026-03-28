from fastapi import FastAPI
import requests
import google.generativeai as genai
import os
import json
import re
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ---------------- CONFIG ----------------
genai.configure(api_key="KEY")
model = genai.GenerativeModel("gemini-2.5-flash")

# ---------------- MOCK MANDI DATA ----------------
MANDI_DATA = {
    "pune": {"wheat": 2400, "rice": 3200},
    "mumbai": {"wheat": 2500, "rice": 3300}
}

# ---------------- TOOLS ----------------
def get_weather(lat, lon):
    print("---|---")
    print("inside get_weather")
    print("---|---")
    try:
        url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,precipitation"
        res = requests.get(url).json()
        return res.get("current", {})
    except:
        return {}

def get_prices(city):
    print("---|---")
    print("inside get_prices")
    print(city)
    print("---|---")
    return MANDI_DATA.get(city.lower(), {})

def analyze_soil(soil):
    print("---|---")
    print("inside analyze_soil")
    print(soil)
    print("---|---")
    ph = soil.get("ph", 7)
    if ph < 6:
        return "acidic"
    elif ph > 7.5:
        return "alkaline"
    return "neutral"

# ---------------- JSON PARSER ----------------
def extract_json(text):
    try:
        return json.loads(text)
    except:
        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            try:
                return json.loads(match.group(0))
            except:
                pass
    return {"error": "Invalid JSON", "raw": text}

# ---------------- LLM AGENT ----------------
def generate_advice(query, weather, prices):
    prompt = f"""
You are an agriculture AI advisor.

User Query:
{query}

Available Data:
Weather: {weather}
Market Prices: {prices}

Instructions:
- Detect the language of the user query
- Respond in the SAME language
- Use simple farmer-friendly words
- Do NOT mix languages

Return ONLY JSON:
{{
  "answer": "",
  "crop_recommendation": "",
  "fertilizer_advice": "",
  "irrigation_advice": "",
  "market_advice": ""
}}
"""
    response = model.generate_content(prompt)
    return extract_json(response.text)
# ---------------- API ENDPOINT ----------------
@app.post("/advice")
def get_advice(data: dict):
    print("---|---")
    print("inside get_advice")
    print(data)
    print("---|---")
    query = data.get("query")
    lat = data.get("lat")
    lon = data.get("lon")
    city = data.get("city", "pune")
    soil = data.get("soil", {})

    # Step 1: Tool calls (controlled agent)
    weather = get_weather(lat, lon)
    prices = get_prices(city)
    # soil_status = analyze_soil(soil)

    # Step 2: Agent reasoning
    advice = generate_advice(query, weather, prices)

    return {
        "weather": weather,
        "prices": prices,
        "advice": advice
    }

# ---------------- HEALTH CHECK ----------------
@app.get("/")
def home():
    print("---|---")
    print("inside get_advice")
    print("---|---")
    return {"status": "Agri AI Agent running"}