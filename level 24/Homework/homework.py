#task 1
def arithmetic_mean(listn):
    return sum(listn) / len(listn)


a = [2, 6, 35, -3, 0]
print(arithmetic_mean(a))

#task 2
def manual_abs(num):
    if num == 0:
        return 0
    elif num < 0:
        return -(num)
    else:
        return(num)
    
print(manual_abs(-7.9)) 
print(manual_abs(-9)) 
print(manual_abs(27))  
print(manual_abs(45.6))
print(manual_abs(0))


#task 3
def remove_same_element(listn):
    new_list = []
    for i in listn:
        if i not in new_list:
            new_list.append(i)
    return new_list

b = [10, 5, 7, 10, 8]
print(remove_same_element(b))
