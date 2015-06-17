## Reference: Fluent Python

import collections

Card = collections.namedtuple('Card', ['rank', 'suite'])

class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits
                                        for rank in self.ranks]

    def __len__(self):
        return len(self._cards)

    def __getitem__(self, position):
        return self._cards[position]


## card = Card('1', 'spades')
## card

## deck = FrenchDeck()
## len(deck)

## __getitem__ makes the list iterable and selectable
## deck[0]
## deck[-1]
## deck[:3]
## deck[12::13] ## get all 'A's across suits

## from random import choice
## choice(deck)
## choice(deck)


## for card in deck:
##    print(card)

## for card in reverse(deck):
##     print(card)

## Card('A', 'spades') in deck

## sort with a rank function

## ---
## suit_values = dict(spades=3, hearts=2, diamonds=1, clubs=0)
## def spades_high(card):
##    rank_value = FrenchDeck.ranks.index(card.rank)
##    return rank_value * len(suit_values) + suit_values[card.suit]

## for card in sorted(deck, key=spades_high):
##    print(card)
