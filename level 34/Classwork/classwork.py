# task 1
#Error types: NameError, ValueError, IndexError, TypeError, SyntaxError.
#NameError is an error when variable is not defined
#ValueError is an error when there is inappropriate value
#SyntaxError is an error when our code has incorrect syntax
#IndexError is an error when index is out of the range
#TypeError is an error when there is incorrect type of the argument for the variable

#task 2
age = 27
try:
    print(name)
except NameError:
    print("Variable is not defined!")

print(age)

#task 3
tuple1 = ("GOA", 5, "Python")
try:
    print(tuple1[5])
except IndexError:
    print("Index is out of range!")

print(tuple1[0])

#task 4
season = "October"
try:
    print(int(season))
except ValueError:
    print("Enter only numbers!")

season1 = 10
print(season1)

#task 5
#We need try/except to avoid expected errors and not stop the flow of executing code



