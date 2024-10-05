#task 1
def dir_reduc(arr):
    box = []
    opp = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "WEST": "EAST",
        "EAST": "WEST"
    }
    for i in arr:
        if box and box[-1] == opp[i]:
            box.pop()
        else:
            box.append(i)
    return box
    
#First I created a variable called box, so then i could put values in there. Then I created dictionary, called opp(opposites) where I 
#wrote opposite directions whose difference is 0. Then i put arr in for loop and give them if-else condition. so if sum of 
#element that is in box variable and another element we want to add gives us opp, we shouldn't add it and if don't then we append it in box variable. 


#task 3
def alphanumeric(password):
    if len(password) < 1:
        return False
    elif password.isalnum():
        return True
    else:
        return False
    
#First of all i gave condition that if length is not more than 1, return False, because in instuctions said that password
#should have 1 or more letters in it. Then i used isalnum() function, that checks if letters are from (a-z) or (1-9). We only wanted
#letters and numbers, without spaces or underscores, so i gave else condition, that said return False.



#task 4
listn = [0, 2, 3, 4, 5]                   #1
a = list(map(lambda x: x*5, listn))
print(a)

listn1 = ["100", "200","0", "20"]         #2
b = list(map(lambda x: int(x), listn1))
print(b)

c = list(map(lambda x: x + "!", listn1))  #3
print(c)

d = list(map(lambda x: x ** 2, listn))    #4
print(d)

e = list(map(lambda x: x % 2==0, listn )) #5
print(e)





