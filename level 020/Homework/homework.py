#task 2
a = 10
b = 7
print(a + b)

#task 3
# Concatenation is when words come together.
m = "air"
n = "plane"
print(m + n)

#task 4
age = 12
year = 3
print(age / year) 
#this would be float type, because computer doesn't know if result will be decimal or not, 
# so in result it writes after dot a zero,if it's divided exactly. And it's called implicit

#task 5
print(5 > 10) #False
print(27 < 30) #True
print(7 != 7) #False
print(10 == 10) #True
print(3 <= 7) #True
print(30 >= 30) #True

#task 6
print(10/2 == 5) #True
print(3+3 != 4*12) #True
print( 70-25 > 100+30) #False
print(50*2/10 < 10-1) #False
print(8+44 >= 44+8) #True
print(30/3 <= 50*3 ) #True

#task 7
print(True and True)  #True
print(True and False) #False
print(False and False) #False
print(False and True) #False
print(True or True) #True
print(True or False) #True
print(False or False) #False
print(False or True) #True

#task 8
print(50/2 >=100 or True) #True
print(False and False or 7*9 != 50) #True
print(True and True and 30+1 == 32) #False
print(False or 30-20 <= 10) #True
print(False and 30*2 > 20) #False

#task 9
for i in range(1, 10):
    print(i)

#task 10
list1 = [10, 20, 30, 100, 50] 
sum_nums = 0
for i in list1:
    sum_nums += i
    print(sum_nums)

#task 11
word = "Hello, World!" 
for i in word:
    print(i)   
    
#task 12
num = 1
while num < 10:
    print(num) 
    num += 1   
    
#task 13
num = 1
while num < 100:
    if num >= 50 and num < 60:
        num += 1  
        continue
    else:
        print(num)
        num += 1   

#task 14
num2 = 1
sum_up = 0
while sum_up < 50:
   print(sum_up)
   sum_up += num2
   num2 += 1  


#task 15
def division(number):
    if number %5 == 0 and number %3 == 0:
        print("This number is divisible by both")
    elif number %3 == 0:
        print("This number is divisible by 3")
    elif number %5 == 0:
        print("This number is divisible by 5")
    else:
        print("not divided")

division(70)   

#task 16
def arithmetic_average(lst):
    sum_upp = 0
    for i in lst:
        sum_upp += i
    return sum_upp / len(lst)

print(arithmetic_average([10, 20, 30]))

#task 17
def string_upper2(string):
    result = ""
    for i in range(len(string)):
      if i %2 == 1:
         result += string[i].upper()
      else:
         result += string[i]
    return result
        

print(string_upper2("hello"))    

#task 18
def num_square(lst):
    new_list = []
    for i in lst:
        i *= i
        new_list.append(i)
    return new_list

print(num_square([3, 4, 5]))    

#task 19
str1 = "python"
print(len(str1)) #len
print(str1.find("t")) #find
print(str1.upper()) #upper
print(str1.lower()) #lower
print(str1.capitalize()) #capitalize

listd = [30, True, "hello", 3.14]
listd.append("GOA") #append
print(listd)
listd.pop(3) #pop
print(listd)
listd.insert(1, False) #insert
print(listd)
print(len(listd)) #len

#task 20
#codewars homework



    
    


    


    

   

 