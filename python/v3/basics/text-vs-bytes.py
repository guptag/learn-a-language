#--------------------------------------------
''' Reference from Fluent Python '''
#--------------------------------------------

''' Character Issues '''
# The concept of string is simple enough; a string is a sequence of characters
# The problem lies in the definition of "character"

# In 2014 the best definition of "character" we have is a Unicode character.
# The items you get out of Python 3 str are Unicode characters, just like the
# the items of a Unicode object in python 2 - and not the raw bytes you get from
# a python2 str.

# The identity of a character is - code point - is a number from 0 to 1,114,111 (base 10),
# shown in the unicode standard as 4 to 6 hexadecimal digits with a 'U+' prefix.
# For example, the code point for the leter A is U+0041.

# The actual bytes that represent a character depend on the encoding the use. An
# encoding is an algorithm that converts code points to byte sequences and vice-versa.
# The code point for A(U+0041) is encoded as byte \x41 (UTF-8) and \x41\x00 (UTF-16)

# Converting from code points to bytes is encoding
# Converting from bytes to code points is decoding

s= 'café'
b = s.encode('utf8')
print (s, b, len(b), b.decode('utf8'))

# a five-byte sequence as bytes and a byte-array
cafe = bytes('café', encoding='utf_8')
print (cafe[0], cafe[:1]) # 99, c cafe[0] returns 99 whereas cafe[:1]  return bytes object of length 1
cafe_arr = bytearray(cafe)
print (cafe_arr)
print(cafe_arr[-1:])


# for bytes in the printable ASCII range - from space to ~- the ASCII character itself is used.
# for bytes corresponding to tab, newline, carriage return and \, the escape sequences \t, \n, \r and \\ are used.
# for every other byte value, an hexadecimal escape sequence is used, e.g. \x00 is the null byte.

print (bytes.fromhex('31 4B CE A9'))

# initialize bytes from an array
import array
numbers = array.array('h', [-2, -1, 0, 1, 2]) #array of short integers
octets = bytes (numbers)
print (numbers)
print (octets) # 10 bytes to store 5 short ints


for codec in ['latin_1', 'utf_8', 'utf-16']:
    print(codec, 'El Niño'.encode(codec))
