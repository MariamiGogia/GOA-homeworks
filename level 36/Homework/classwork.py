# task 2
# map() function applys specified function to every element on iterable and it is faster way.

#task 3
# filter() function only displays elements on iterable that's answer to a specified condition is True.

#task 4
listn= [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
def list_average(listx):
   return [sum(i)/len(i) for i in listx]
   

print(list_average(listn))


#task 5
store = {
   "book": True,
   "chair": False,
   "desk" : True,
   "table": False,
   "notebook": False
}

out_of_stock = dict(filter(lambda x: x[1] is False, store.items()))
print(out_of_stock.keys())