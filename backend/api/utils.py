import requests
from decouple import config
from django.template.loader import render_to_string

def send_email(to_email, response_name):
    BREVO_URL = "https://api.brevo.com/v3/smtp/email"
    
    html = render_to_string("Response_Mail.html",{
        "response_name":response_name,
        "email":config("GMAIL_ADDRESS")
    })
    url = "https://api.brevo.com/v3/smtp/email"
    
    headers = {
        "api-key":config("BREVO_API_KEY"),
        "Content-Type":"application/json",
    }
    
    payload = {
        "sender":{
            "name":"Gokul",
            "email":config("BREVO_SENDER")
        },
        "to":[{"email":to_email}],
        "subject":"Thanks for contacting me",
        "htmlContent":html
    }
    
    try:
        res = requests.post(BREVO_URL, headers=headers, json=payload)
        
        if res.status_code >= 400:
            print("Failed to send response", res.status_code, res.text)
            
    except Exception as e:
        print("Failed to send mail",e)