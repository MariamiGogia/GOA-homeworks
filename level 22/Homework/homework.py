#task 2
def manual_min(listn):
    min_number = listn[0]
    for i in listn:
        if i < min_number:
            min_number = i
    return min_number

print(manual_min([4, 67, 2]))

#task 3
def manual_max(listn):
    max_number = listn[0]
    for i in listn:
        if i > max_number:
            max_number = i
    return max_number       

print(manual_max([300, 0, 12]))


#task 4
def manual_len(listn):
    sum_nums = 0
    for i in listn:
        sum_nums += 1
    return sum_nums
        

print(manual_len([27, 8, 10, "Hello", True]))


#task 5
def manual_sum(listn):
    sum1 = 0
    for i in listn:
        sum1 += i
    return sum1

print(manual_sum([2, 3, 45, 67, 300]))


#task 6
def manual_replace(sentence, word, word2):
    x = []
    new = sentence.split()
    for i in new:
        if i != word:
            x.append(i)
        else:
            x.append(word2)
    return " ".join(x)

print(manual_replace("i love me", "me", "u"))

  



#task 7
def manual_find(str, x):
    for i in range(len(str)):
        if str[i] == x:
            return i
    return -1    
        
print(manual_find("apple", "l"))        




    