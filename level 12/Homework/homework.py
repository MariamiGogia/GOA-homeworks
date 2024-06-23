#task 2
m = 3
guess = int(input("Enter number: "))

if guess in range(1, 7):
    if guess != m:
        print("It's incorrect!")
    else:
        print("It's correct!")



#task 3
n = 0
for i in range(1, 100):
    n += i
    print(n)



#task 4
n = 0
for i in range(1, 1000):
    if i in range(500, 600):
        pass
    else:
        n += i
        print(n) 




#task 5
a = 7
guess_1 = int(input("Enter number between 1 and 10: "))

if guess_1 in range(1, 11):
    while guess_1 == a:
        print("It's correct!")
        break
    else:
        print("It's incorrect!")




#task 6
v = 1
b = 1
while b <= 10:
    v *= b
    b += 1
    print(v)



#task 7
num = int(input("Enter number: "))
if num % 2 == 0:
    print("It's even")
else:
    print("It's odd")




#task 8
grade = int(input("Enter your grade: "))

if grade in range(0, 101):
    if grade >= 90:
        print("A")
    elif 80 <= grade < 90:
        print("B")
    elif 70 <= grade < 80:
        print("C")
    elif 60 <= grade < 70:
        print("D")
    else:
        print("F")










