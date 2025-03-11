#task 2
def binary_nums(num):
    if num == 0:
        return "0"

    binary = []
    while num > 0:
        res = num % 2  
        binary.append(str(res))  
        num = num // 2 
    
    return ''.join(binary[::-1])

print(binary_nums(9))

#task 3
def decimal_num(num_str):
    count = 0
    for i in range(len(num_str)):
        bit_value = int(num_str[-(i + 1)]) * (2 ** i)
        count += bit_value
    return count

print(decimal_num('10010'))