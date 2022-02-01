import os

# code adapted from https://realpython.com/beautiful-soup-web-scraper-python/#why-scrape-the-web
# https://stackoverflow.com/questions/54616638/download-all-pdf-files-from-a-website-using-python
import requests
from bs4 import BeautifulSoup
import wget

# grab html from cs278
url = "box.html"
page = open(url)
soup = BeautifulSoup(page.read())
soup.prettify()
# get links for the pdfs from the html
# use either requests or wget to download pdf
# for link in results.find_all('a'):
mydivs = soup.find_all(
    "div", {"class": "ReactVirtualized__Table__row"})

#     if(link['href'].endswith('pdf')):
#         try:
#             wget.download(url)
#         except:
#             print(" \n \n Unable to Download A File \n")

# def generate():
#     for i in range(len(names)):
#         istr = str(i + 11)
#         if i < 89:
#             istr = '0' + istr
#         print("<option value='./grammar/" + istr + ".js'>" +
#               istr + ". " + names[i] + "</option>")

# def rename():
#     i = 0
#     for file in sorted(os.listdir("./fall2021test")):
#         istr = str(i)
#         if i < 100:
#             istr = '0' + istr
#         if i < 10:
#             istr = '0' + istr
#         print(file)
#         os.rename("./fall2021test/" + file, "./fall2021test/" + istr + ".js")
#         i += 1

# rename()
# generate()
