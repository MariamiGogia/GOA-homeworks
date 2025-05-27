# task 1
def sum_numbers(*numbers):
    res = 0
    for i in numbers:
        res += i
    return res

print(sum_numbers(1,0,45,6))

#task 2
def make_list(**kwargs):
    res = []
    for key, value in kwargs.items():
        res.append(f"{key} is capital of {value}")
    return res
    
print(make_list(Tbilisi="Georgia", Paris = "France"))

#task 3
def upper_word(func):
    def wrapper(*args, **kwargs):
        a = func(*args, **kwargs)
        return a.upper()
    return wrapper

    

@upper_word
def greet(name):
    return f"hello, {name}!"

print(greet("mari"))


#task 4
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Animal sound"


class Bird(Animal):
    def fly(self):
        print(f"{self.name} Flying high!")

class Eagle(Bird):
    def hunt(self):
        print( f"{self.name} Hunting for prey")

eagle = Bird("Coco")
print(eagle.name)
eagle.fly()

#task 5
class People:
    def __init__(self, name, surname, age):
        self.name = name
        self.surname = surname
        self._age = age
    
    def get_person_age(self):
        print(self._age)

person1 = People("Mari", "Gogia", 15)
person1.get_person_age()
print(person1.name)
print(person1.surname)


#task 6
class Guests:
    def __init__(self, name, surname, age, id):
        self.name = name
        self.surname = surname
        self.age = age
        self.__id = id

person2 = Guests("Mari", "Gogia", 15, "#1234567")
print(person2.name)
print(person2.surname)
print(person2.age)
print(person2._Guests__id)


        