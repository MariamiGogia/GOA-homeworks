#task 2
print(5 >= 5) #True
print(2 >= 7) #False
print(7 <= 7) #True
print(27 <= 28) #True
print(2 != 7) #True
print(1 != 1) #False


#task 3
m = 27
g = 28
n = 17
k = 1.5
same = 27
print(g > m) #True
print(k > n) #False
print(g < n) #False
print(k < m) #True
print(same == m) #True
print(g == same) #False
print(27 >= same) #True
print(g >= k) #True
print(n >= same) #False
print(m <= g) #True
print(m <= same) #True
print(n <= k ) #False
print(same != m) #False
print(n != k) #True
print(g > m and k>n) #False
print(same == m and n != k) #True
print(g == same and n<= k) #False
print(m <= same or same != m) #True
print(k < m or m <= g ) #True

green = True
red = False
print(green or red) #True
print(red and green) #False
print(red or red or green) #True
print(green and green and green and red and green) #False
print(red or red or red) #False
print(green and green and green) #True
print(green or green) #True
print(green or red or green) #True


#task 4
#and - it will produce a true result if both side is true.
#or - it will produce a true result if one of them is true.


#task 5
num1 = input("Write a first number: " )
num2 = input("Write a second number: ")
print(num1)
print(num2)
print(num1 > num2) #True
print(num1 < num2) #False
print(num1 == num2) #False
