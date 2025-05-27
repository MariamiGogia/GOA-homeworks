#1
def manual_isalnum(txt):
    for i in txt:
        if not (i.isdigit() or i.isalpha()):
            return False
    return True

print(manual_isalnum("hello."))
print(manual_isalnum("Hvd1234"))

#2
def manual_startswith(txt, pref):
    if len(pref) > len(txt):
        return False
    for i in range(len(pref)):
        if txt[i] != pref[i]:
            return False
    return True

print(manual_startswith("hello", "hei"))

#3
def manual_endswith(txt, suf):
    if len(suf) > len(txt):
        return False
    txt = txt[::-1]
    suf = suf[::-1]
    for i in range(len(suf)):
        if txt[i] != suf[i]:
            return False
    return True
    
print(manual_endswith("hello", "llo"))

#4
def manual_round(number):
    number_int = int(number)
    if number - number_int >= 0.5:
        return number_int + 1
    else:
        return number_int
    
print(manual_round(2.5))
print(manual_round(3.4))
print(manual_round(4.9))










