# -----------------------------------------
''' Reference from book - Fluent Python '''
# -----------------------------------------

''' Creating Dictionaries '''

a = dict(one=1, two=2, three=3)
b = {'one':1, 'two': 2, 'three': 3}
c = dict(zip(['one', 'two', 'three'], [1,2,3]))
d = dict([('two', 2), ('one', 1), ('three', 3)])
e = dict({'three': 3, 'one': 1, 'two': 2})
print(a, b, c, d, e)
print (a == b == c == d == e)

''' Dictionary Comprehensions '''

# Dictionary instance can be built by producing key:value pairs from any iterable
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

# Note defaultdict will fill the default only when called dd[k] but not when dd.get(k) is called.
# None is returned in the later case.
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

''' Immutable Maps - MappingProxyType'''

# MappingProxyType returns a mapping proxy instance
# that is read-only but dynamic view of the original instance where updates are visible
import types
d = {1:'A'}
d_proxy = types.MappingProxyType(d)
print (d_proxy)
print (d_proxy[1])
# print(d_proxy[2]) #error
d[2] = 'B'
print (d_proxy)


''' SET THEORY '''

# Set is collection of unique objects.
# Set elements must be hashable
l = ['spam', 'spam', 'eggs', 'spam']
print (set(l)) # {'eggs', 'spam'}
print (list(set(l))) # ['eggs', 'spam']

# In addition to uniqueness, set types implement
# the operations as infix operators (a |b -> union, a & b -> intersection)
# found = len(needles & haystacks)

# set initialization
# set(), {1}, {1,3}, set([1,3])

# frozen set initialization
# frozenset({0,1,2,3,4,5,6})

# Byte code differences between {1,3} vs set([1,3])
from dis import dis
print (dis('{1,3}')) # efficient
print (dis('set([1,3])'))


''' SET comprehensions '''
import unicodedata

# print unicode chars that have 'SIGN' in their names
unicode_list = {chr(i) for i in range(32, 256) if 'SIGN' in unicodedata.name(chr(i), '')}
print(unicode_list)


''' Hash tables in Dictionaries '''

# An hash table is a sparse array i.e an array which always has empty
# cells (or 'buckets'). In a dict hash table, there is a bucket for each item
# and contains two fields: a reference to the key and a reference to the value
# of the item. Python tries to keep atleast 1/3 of the buckets empty; if the hash
# table becomes to crowded, it is copied to a new location with room for more buckets.

# To fetch the value at my_dict[search_key], Python calls hash(search_key) to obtain the
# hash value of search_key and uses the least significant bits of that number as an offset
# to lookup a bucket in the hash table and then python checks whether search_key == found_key.
# If they match, that was the item sought.

# If the keys do not match, this is a hash collision. This happens because a hash function
# maps arbitrary objects to a smaller number of bits and the hash table is indexed with a
# subset of those bits. To resolve the collision, the algorithm then takes different bits
# in the hash, massages them in a specific way and uses the result as an offset to lookup
# at a different bucket.

# Dialcodes using dictionaries
DIAL_CODES = [
    (86, 'China'),
    (91, 'India'),
    (1, 'United States'),
    (62, 'Indonesia'),
    (55, 'Brazil')
 ]
d1 = dict(DIAL_CODES)
print (d1)
print (d1.keys(), d1.values(), d1.items())
d2 = dict(sorted(DIAL_CODES))
print (d2)
d3 = dict(sorted(DIAL_CODES, key = lambda x: x[1]))
print (d3)
print (d1 == d2, d2 == d3)
