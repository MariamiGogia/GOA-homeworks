list1 = [2, 51, 11, 13, 51, 100]
#task 1 - Output every item from list with positive indexing.
print(list1[0])
print(list1[1])
print(list1[2])
print(list1[3])
print(list1[4])
print(list1[5])

#task 2 - Output every item from list with negative indexing.
print(list1[-6])
print(list1[-5])
print(list1[-4])
print(list1[-3])
print(list1[-2])
print(list1[-1])

#task 3 - Replace the last element of a list with a new value.
list1[5] = 27

#task 4 - Replace the fifth element of a list with a new value.
list1[4] = 333

#task 5 - Extract the last three elements of a list.
print(list1[3:6])

#task 6 - Extract the first three elements of a list.
print(list1[0:3])

#task 7 - Extract the middle two elements of a list. ([11, 13])
print(list1[2:4])

#task 8 - Extract random elements of a list with negative indexes.
print(list1[-6:-3])
print(list1[-4:-2])
print(list1[-3:-1])