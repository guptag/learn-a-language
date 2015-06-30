#----------------------------------
''' Reference from Fluent Python '''
#----------------------------------

''' Functions '''

def factorial(n):
    '''returns n!'''
    return 1 if n < 2 else n * factorial(n-1)
print(factorial(10))
print(factorial.__doc__)
print(type(factorial))

fact = factorial
print(fact)
fn_map = map(factorial, range(11))
print (list(fn_map))


''' Higher order Functions '''

fruits = ['strawberry', 'fig', 'apple', 'cherry', 'raspberry']
print(sorted(fruits, key=len))

# Sort based on their reversed spelling
def reverse(word):
    return word[::-1]
print (reverse('testing'))
print(sorted(fruits, key=reverse))


''' Modern replacements of map, filter and reduce '''

#Functional languages commonly offer the map, filter and reduce
#higher order functions which are still built-in in Python 3,
#but since the introduction of list comprehensions and generator
#expressions they are not as important. A listcomp or gencomp does
#the job of map and filter combined, but is more readable.

print(list(map(factorial, range(6))))   # using map
print([factorial(n) for n in range(6)]) # using list comprehension

print(list(map(factorial, filter(lambda n:n % 2, range(6))))) #using map, filter
print(factorial(n) for n in range(6) if n % 2)                #using list comprehension

# The reduce function was demoted from a built-in in python 2 to
# the functools module in python 3.

import functools
import operator

print(functools.reduce(operator.add, range(100)))
print(sum(range(100)))

# Anonymous Functions
fruits = ['strawberry', 'fig', 'apple', 'cherry', 'raspberry', 'banana']
sorted_fruits = sorted(fruits, key=lambda word: word[::-1]) #sort by reversed spelling
print (sorted_fruits)

# Bingo Cage - picks items from a shuffled list

import random
class BingoCage:
 def __init__(self, items):
     self._items = list(items)
     random.shuffle(self._items)

 def pick(self):
    try:
        return self._items.pop()
    except IndexError:
        raise LookupError("pick from empty bingo cage")

 def __call__(self):
     return self.pick()

bingo = BingoCage(range(10))
print(bingo.pick())
print(bingo()) # class instance as callable
print(callable(bingo)) # checks if the instance is callable

''' Function Introspection '''
print(dir(factorial))

''' Positional to Keyword only parameters '''
def tag(name, *content, cls=None, **attrs):
    """Generate one or more html tags"""
    if cls is not None:
        attrs['class'] = cls

    if attrs:
        attr_str = ' '.join('%s=%s' % (attr, value)
                            for attr, value
                            in sorted(attrs.items()))
    else:
        attr_str = ''

    if content:
        return '\n'.join('<%s %s>%s</%s>' %
                         (name, attr_str, c, name) for c in content)
    else:
        return '<%s %s/>' % (name, attr_str)

print (tag('br')) # Single positional argument produces an empty tag with that name.
print (tag('p', 'hello')) # Any number of arguments after first is captured by *content as a dict.
print (tag('p','hello','world'))
print (tag('p', 'hello', id=33)) #Keyword arguments not explicitly named in the tag signature are captured by **attrs as a dict.
print (tag('p', 'hello', 'world', cls='sidebar')) #cls parameter can only be passed as keyword argument.
print (tag(content='testing', name='img')) #First positional argument can be passed a keyword.

my_tag = {'name': 'img',
          'title': 'Sunset Boulevard',
          'src': 'sunset.jpg',
          'cls': 'framed'}
print(tag(**my_tag)) #prefexing the my_tag with ** passes all its items as seperate arguments which then bound to the named parameters with the remaining caught by **attrs
