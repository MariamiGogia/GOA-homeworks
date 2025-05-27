# task 1
def greeting(name):
    print(f"Hello {name}!")

greeting("mari")
 

#task 2
def trio_sum(num1, num2, num3):
    print(num1 + num2 + num3)

trio_sum(2, 3, 4)    


#task 3
def print_nums(start, end):
    for i in range(start, end):
        print(i)

print_nums(3, 28)        

#task 4
def info(name, surname, age, academy):
    print(f"My name is {name}, my surname is {surname}, age- {age}, I study in {academy}")

info("mari", "gogia", 14, "GOA")    


#task 5
def nums(num1, num2, num3):
    return num1 * num2 * num3

m = nums(3, 5, 2)  
print(m) 


#task 6
def age(num):
    if num >= 18:
        return "You can't have discount"
    else:
        return "You have discount"
    
print(age(27))
print(age(17))

#task 7
def listn(lst):
    for i in lst:
        print(i)

listn([1, 2, 3, 4, 5, 6])        
     

       



        

    
    