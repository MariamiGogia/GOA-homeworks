#task 1
person = int(input("Enter your age: "))

if person < 13:
    print("You are kid")
elif 13 <= person < 20:
    print("You are teenager")
else:
    print("You are grown up")


#task 2
a = 1
while a < 100:
    a += 1
    if a in range(40, 51):
        pass
    else: 
        print(a)
    