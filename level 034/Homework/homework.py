#task 4
words = ["Mari", "NINI", "GOA"]
try:
  for i in names:
     print(i)
except NameError:
   print("Error")

tuple1 = (23, "year", "car", True)
try:
    print(tuple1[-6])
except IndexError:
    print("Index is out of range!")

str1 = "Hello world!"
try:
    print(int(str1))
except ValueError:
   print("Enter numbers only!")
finally:
   print("Good job!")

age = input("Enter your age:" )
try:
   age = int(age)
except ValueError:
   print("Enter only numerical answer")
else:
   print("Your age is send!")



#task 5
def numbers(listn):
   res = [int(i) for i in listn if isinstance(i, (int,str)) and str(i).isdigit()]
   return sum(res)

print(numbers([10, "5","abcds", "4", 11, True]))

#task 6
numbers1 = lambda listn: sum([int(i) for i in listn if isinstance(i, (int,str)) and str(i).isdigit()])
print(numbers1(["10", 1, 21, "iii"]))
