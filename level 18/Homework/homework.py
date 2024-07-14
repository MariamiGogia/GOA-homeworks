#task 2
def two_sum(num1, num2):
    print(num1 + num2)

two_sum(27, 7)  

#task 3
def three_multiplied(num1, num2, num3):
    print(num1 * num2 * num3)

three_multiplied(3, 4, 7)    

#task 4
def info(name, surname):
    print(f"Hello {name} {surname}!")

info("Mari", "Gogia") 

#or

def info1(name, surname):
    return f"Hello {name} {surname}!"
greeting = info1("Mari", "Gogia")
print(greeting)

#task 5
def two_sum1(num1, num2):
    return num1 + num2

a = two_sum1(45, 20)
print(a)

#task 6
def three_multiplied1(num1, num2, num3):
    return num1 * num2 * num3

b = three_multiplied1(2, 1, 48)
print(b)

#task 7
def list_str(lst):
    for i in lst:
        print(i)
        
list_str(["khinkali", "fries", "pizza", "sushi"])    

#task 8
def list_int(lst):
        for i in lst:
            print(i)

list_int([30, 300, 456, 78])            

        
