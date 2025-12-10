import openai
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict



# turing the prompt .txt file into a string and getting rid of '\n'
prompt_file = open("Prompt.txt")
readable_text = prompt_file.read()
prompt_file.close()

text = readable_text.replace("\n", "")
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for testing (you can restrict this later)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class Message(BaseModel):
    user_message: str
    convo_history: List[Dict[str, str]]

# putting the api_key here but there is a secure way to deal with this. 
openai.api_key = ""


# Establishing a convo history so the bot remembers the coversations
# Added a pre-context so the bot has a predefined tony robbins behaviour
conversation_history = []


def chat_with_gpt(prompt):
    # Adding the user input to history
    #conversation_history.append({"role": "user", "content": prompt})
    # sending info to the api and letting it do its magic
    response = openai.chat.completions.create(
        model = "gpt-4o-mini",
        # Now this messages parameter will access the whole history not just one part of it.
        messages = conversation_history
    )


    ai_response = response.choices[0].message.content.strip()
    # Adding the ai response to history
    #conversation_history.append({"role": "assistant", "content": ai_response})
    
    return ai_response



@app.post("/")
def message(message: Message):
    user_input = message.user_message
    convo = message.convo_history

    conversation_history.clear()
    conversation_history.append({"role": "system", "content": text})

    if user_input.lower() in ["quit", 'exit', "bye"]:
        return {"Alert": "Chat is reset"}

    for item in convo:
        conversation_history.append(item)



    try:
        response = chat_with_gpt(user_input)
        return response

    except SystemError:
        print("something wrong with the api")
        raise HTTPException(status_code=400, detail="Chat API temporarily down. Please try again.")
