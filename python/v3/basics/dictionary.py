# Creating Dictionaries

a = dict(one=1, two=2, three=3)
b = {'one':1, 'two': 2, 'three': 3}
c = dict(zip(['one', 'two', 'three'], [1,2,3]))
d = dict([('two', 2), ('one', 1), ('three', 3)])
e = dict({'three': 3, 'one': 1, 'two': 2})
print(a, b, c, d, e)
print (a == b == c == d == e)

# Dictionary Comprehensions

'''Dictionary instance can be built by producing key:value pairs from any iterable'''
DIAL_CODES = [ (91, 'India'),
               (1, 'United States'),
               (62, 'Indonasia'),
               (55, 'Brazil'),
               (92, 'Pakistan'),
               (880, 'Bangladesh'),
               (234, 'Nigeria'),
               (7, 'Russsia'),
               (81, 'Japan')
             ]
country_code = {country: code for code, country in DIAL_CODES}
print (country_code)
code_country = {code: country.upper() for country, code in country_code.items()}
print (code_country)

'''Build an index mapping word -> List of occurances'''
import sys
import re

WORD_RE = re.compile('\w+')

index = {}
file_path = "../.data/war-and-peace.txt"
with open (file_path, encoding = 'utf-8') as fp:
    for line_no, line in enumerate(fp, 1):
        for match in WORD_RE.finditer(line):
            word = match.group()
            column_no = match.start() + 1
            location = (line_no, column_no)
            index.setdefault(word, []).append(location)
for word in sorted(index, key=str.upper):
    print (word, index[word])


'''Build an index mapping word -> List of occurances (with defaultdict)'''
import sys
import re
import collections

WORD_RE = re.compile('\w+')
index = collections.defaultdict(list)
with open(file_path, encoding = 'utf-8') as fp:
    for line_no, line in enumerate(fp, 1):
        for match in WORD_RE.finditer(line):
            word = match.group()
            column_no = match.start() + 1
            location = (line_no, column_no)
            index[word].append(location)
for word in sorted(index, key=str.upper):
    print (word, index[word])
