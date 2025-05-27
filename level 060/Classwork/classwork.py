# task 1
class Car:
    def __init__(self, brand, model, color, year):
        self.brand = brand
        self.model = model
        self.color = color
        self.year = year

    def honk(self):
        print("Beep, Beep!")

    def movement(self):
        print(f"{self.model} is moving!")

car1 = Car("BMW", "BMW X1", "Red", 2000)
car2 = Car("Porsche", "Cayenne", "Black", 2009)
car3 = Car("Jeep", "Wrangler", "White", 2023)

car1.honk()
car2.movement()
print(car1.brand)
print(car1.model)
print(car1.color)
print(car1.year)

print(car2.brand)
print(car2.model)
print(car2.color)
print(car2.year)

print(car3.brand)
print(car3.model)
print(car3.color)
print(car3.year)

#task 2
class Person:
    count = 0
    def __init__(self, name, lastname, age):
        self.name = name
        self.lastname = lastname
        self.age = age
        Person.count += 1

    def gender1(self):
        print("Male")

    def gender2(self):
        print("Female")


person1 = Person("Mariami", "Gogia", 15)
person2 = Person("Andria", "Kune", 2)
person3 = Person("Nia", "Tchania", 14)
person4 = Person("Data", "Jgenti", 14)

print(person1.name)
print(person1.lastname)
print(person1.age)

print(person2.name)
print(person2.lastname)
print(person2.age)

person1.gender2()
person2.gender1()

print(Person.count)


#task 3
#a dunder method is a special function in Python, identified by double underscores, example: def __init__()

#task 4
#Instance variables are attributes specific to an object, holding data unique to that object. example: self.brand = brand

#task 5
#class variables are variables, that are inside the class, but outside the dunder method. example: count = 0

#task 6
#a blueprint is a template or plan used to create objects, like a class.
              