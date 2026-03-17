#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    s = input()

    counts = {}

    for ch in s:
        if ch in counts:
            counts[ch] += 1
        else:
            counts[ch] = 1

    items = []

    for key in counts:
        items.append([key, counts[key]])

    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[j][1] > items[i][1] or (items[j][1] == items[i][1] and items[j][0] < items[i][0]):
                items[i], items[j] = items[j], items[i]

    for i in range(3):
        print(items[i][0], items[i][1])
            
        
