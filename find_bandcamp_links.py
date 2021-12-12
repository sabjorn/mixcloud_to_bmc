import sys
import requests
import bs4
import urllib.parse

headers = {
    'User-agent':
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582"
}
base_query = "https://www.google.com/search?q="

if __name__ == '__main__':
    trackname = str(sys.argv[1:])
    url = trackname + " bandcamp"
    html = requests.get(base_query + url, headers=headers)
    soup = bs4.BeautifulSoup(html.text, "html.parser")
    try:
        link = soup.select_one("a[href*=track]")['href']
        print(link)
    except:
        print(trackname) 
