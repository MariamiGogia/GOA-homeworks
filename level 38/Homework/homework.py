#task 1
tuples = lambda lst: sorted(lst, key=lambda x: x[1])
tuples_list = [(1, 'a'), (3, 'b'), (2, 'c'), (4, 'd')]
print(tuples(tuples_list))

squares = lambda lst: [x**2 for x in lst]
print(squares([1,2,3,4,5]))

a = ["banana", "cat", "a", "helicopter", "python"]
print(list(filter(lambda x: len(x)>= 4, a)))

#task 2
a = ["banana", "cat", "a", "helicopter", "python"]
print(list(map(lambda x: x.capitalize(), a)))

b = [1,2,3,4,5,6,7,20]
print(list(map(lambda x: x+5, b)))

a = ["banana", "cat", "a", "helicopter", "python"]
print(list(map(lambda x: x[0]+ "-start", a)))


#task 3
b = [1,2,3,4,5,6,7,20]
print(list(filter(lambda x: x % 2 == 1, b)))

words = ["banana", "cat", "a", "helicopter", "python", "Anna", "apple"]
print(list(filter(lambda x: x[0] == "a" or x[0] == "A", words)))

numbers = [-1, -2, -3, -4, -1000, -3.5, 0, 10, 20, 30, 44, 1]
print(list(filter(lambda x: x >= 0, numbers)))




