# Reference "Fluent Python"

# Build unicode values from a string (take 1)
symbols = "$¢£¥€¤"
codes = []
for symbol in symbols:
    codes.append(ord(symbol))
print(codes)


# Build unicode values from a string (take 2)
symbols = "$¢£¥€¤"
codes = [ord(symbol) for symbol in symbols]
print (codes)

# map and filter in list comprehension
symbols = "$¢£¥€¤"
codes = [ord(symbol) for symbol in symbols if ord(symbol) > 127]
print (codes)

# map and filter in functional way
symbol = "$¢£¥€¤"
codes = list(filter(lambda c: c > 127, map (ord, symbol)))
print (codes)

# cartesian product using a list comprehension
colors = ['black', 'white']
sizes = ['S', 'M', 'L']
tshirts = [(color, size) for color in colors for size in sizes]
print (tshirts)

tshirts = [(color, size) for size in sizes for color in colors]
print (tshirts)

# Generator Expressions
# Memory efficient - yields elements rather than building the entire lists
symbols = "$¢£¥€¤"
t = tuple(ord(symbol) for symbol in symbols)
print (t)
import array
a = array.array('I', (ord(symbol) for symbol in symbols))
print (a)

# Cartesian product using generators
colors = ['black', 'white']
sizes = ['S', 'M', 'L']
for tshirt in ('%s %s' % (c, s) for c in colors for s in sizes):
    print (tshirt)

# Tuples as records
coordinates = (33.934, -118.408)
city, year, pop, chg, area = ('Tokyo', 2003, 32450, 0.66, 8014)
traveller_ids = [('USA', '31119855'), ('ESP', 'XDA205856')]
for passport in sorted(traveller_ids):
    print('%s %s' % passport)

# Tuple Unpacking
coordinates = (33.934, -118.408)
latitude, longitude = coordinates
print(latitude, longitude)
latitude, longitude = longitude, latitude
print(latitude, longitude)

# prefix an argument with a star to unpack the result
quotient, reminder = divmod(20, 8)
print(quotient, reminder)

# use * to grab excess items
a, b, *rest = range(5)
print(a, b, rest)

# Nested tuple unpacking
metro_areas = [
    ('Tokyo', 'JP', 36.393, (35.56, 139.234)),
    ('Mexico City', 'MX', 20.142, (19.234234, -99.234)),
    ('New York', 'US', 20.104, (40.2345, -74.25235)),
    ('Sao Paulo', 'BR', 19.649, (-23.54, -46.364))
]
fmt = '{:15} | {:9.4f} | {:9.4f}'
for name, cc, pop, (latitude, longitude) in metro_areas:
    print(fmt.format(name, latitude, longitude))


# Named Tuples
from collections import namedtuple
City = namedtuple('City', 'name country population coordinates')
tokyo = City(name='Tokyo', country='Japan', population=36.393, coordinates=(35.346346, 139.23523))
print(tokyo, tokyo.name, tokyo.country)

# Using + and * with lists
list = [1,2,3,4,5]
list = list * 5
print (list)
print (5 * 'abcd')

# Building list of lists
board = [['_'] * 3 for i in range(3)]
print (board)

board[1][2] = 'X'
print (board)

# Caution - using expressions like a * n
weird_board = [['_'] * 3] * 3
print (weird_board)

weird_board[1][2] = '0'
print (weird_board)

# augmented assignment operators
l = [1,2,3]
id(l)
l *= 2
id (l) # same as previous id - inplace changes __iadd__ available

t = (1,2,3)
id(t)
t *= 2
id(t) # new identifier - adds and returns new instance

# Sorted
fruits = ['grape', 'rasberry', 'apple', 'banana']
sorted(fruits)
print (fruits)
print (sorted(fruits, reverse=True))
print (sorted(fruits, key=len))
print (sorted(fruits, key=len, reverse=True))
print (fruits)
fruits.sort()
print (fruits)


# Bisect module offers two functions bisect and insort that use binary search
# algorithm to quickly find and insert items
import bisect
import sys
HAYSTACK = [1, 4, 5, 6, 8, 12, 15, 20, 21, 23, 23, 26, 29, 30]
NEEDLES = [0, 1, 2, 5, 8, 10, 22, 23, 29, 30, 31]
ROW_FMT = '{0:2d} @ {1:2d}   {2}{0:<2d}'
def demo (bisect_fn):
    print('DEMO:', bisect_fn.__name__)
    print('haystack->', ' '.join('%2d' % n for n in HAYSTACK))
    for needle in reversed(NEEDLES):
        position = bisect_fn(HAYSTACK, needle)
        offset = position * '  |'
        print(ROW_FMT.format(needle, position, offset))

demo(bisect.bisect)
demo(bisect.bisect_left)


# Usage of Bisect - Given a test score, grade returns the
# corresponding letter grade
def grade(score, breakpoints=[60, 70, 80, 90], grades='FDCBA'):
    i = bisect.bisect(breakpoints, score)
    return grades[i]

print([grade(score) for score in [33, 99, 77, 70, 89, 90, 100]])


# insort(seq, item) insects an item into seq and
# keeps the sequence in order

import bisect
import random

SIZE = 7

random.seed(1729)
my_list = []
for i in range(SIZE):
    new_item = random.randrange(SIZE*2)
    bisect.insort(my_list, new_item)
    print('%2d ->' % new_item, my_list)
