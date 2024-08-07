"""Navigates to the preview deployment and verifies its content"""
import os
from selenium import webdriver
from selenium.webdriver.common.by import By

preview_url = os.environ['PREVIEW_URL']
access_token = os.environ['ACCESS_TOKEN']
url_with_access_token = preview_url + '?x-vercel-protection-bypass=' + access_token

driver = webdriver.Chrome()
driver.implicitly_wait(10)
driver.get(url_with_access_token)
h1 = driver.find_element(By.XPATH, '//h1[text()="Hello World"]')
assert "Hello World" in h1.textContent
