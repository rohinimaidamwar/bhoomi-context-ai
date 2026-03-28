import google.generativeai as genai

genai.configure(api_key="KEY")

model = genai.GenerativeModel("gemini-2.5-flash")

response = model.generate_content("Explain farming in 2 lines")

print(response.text)