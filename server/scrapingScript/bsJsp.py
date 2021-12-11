import requests
import time
from bs4 import BeautifulSoup
baseURL = 'https://forums.d2jsp.org/'

# inverted, want to start from the end to avoid any overlap as new posts are made
URLs = ["https://forums.d2jsp.org/forum.php?f=268&c=2&o=75",
        "https://forums.d2jsp.org/forum.php?f=268&c=2&o=50",
        "https://forums.d2jsp.org/forum.php?f=268&c=2&o=25",
        "https://forums.d2jsp.org/forum.php?f=268&c=2"]
# URLs = ["https://forums.d2jsp.org/forum.php?f=268&c=2"]
data = []
pauseTimer = 1
commentLineLimit = 10


def removeApostrophe(inputString):
    return inputString.replace("'", "").replace('"', "")


for url in URLs:
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html5lib')
    tableBody = soup.tbody
    rows = tableBody.select('tr:nth-of-type(n+3) td:nth-child(2)')

    for row in rows:
        rowData = {}
        title = str(row.select('a:last-child')[0].contents[0])
        tempTitle = removeApostrophe(title)
        rowData["title"] = tempTitle
        rowData["type"] = row.div['class'][1]
        rowData["url"] = row.select('a:last-child')[0]['href']
        # follow url to comments
        pageR = requests.get(baseURL + rowData['url'])
        soup2 = BeautifulSoup(pageR.content, 'html5lib')
        # grabs all lines from first comment
        comments = soup2.select('#fTP dl')
        comment = comments[0].select('.bts')[0].contents
        # if too many lines in comment, dont bother
        cleanedComment = []
        if len(comment) > commentLineLimit:
            cleanedComment.append("too long")
        else:
            # cleans comment for line breaks and html tags
            for line in comment:
                # removes <br/> and cleans apostrophes
                if line.string:
                    cleanedComment.append(removeApostrophe(line.string))
        rowData['comment'] = cleanedComment
        data.append(rowData)

        time.sleep(pauseTimer)

print(data)

# to grab all but last dl tags
# comments = soup2.select('#fTP dl:not(:last-child)')
