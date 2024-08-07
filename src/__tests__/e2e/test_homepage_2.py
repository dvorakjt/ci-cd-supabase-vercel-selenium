"""Navigates to the preview deployment and verifies its content"""
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

preview_url = os.environ['PREVIEW_URL']
access_token = os.environ['ACCESS_TOKEN']
url_with_access_token = preview_url + '?x-vercel-protection-bypass=' + access_token

chrome_options = Options()
chrome_options.add_argument('--headless')

driver = webdriver.Chrome(options=chrome_options)
driver.implicitly_wait(10)
driver.get(url_with_access_token)
h1 = driver.find_element(By.XPATH, '//h1[text()="Hello World"]')
assert "World" in h1.text
