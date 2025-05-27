#task 2
# a single underscore (_) indicates a variable is intended for internal use, but not strictly private and a double underscore (__) triggers name mangling, making the variable more difficult to access outside the class.

#task 3
class Personal_info:
    def __init__(self, name, last_name, phone_number, id):
        self.name = name
        self.last_name = last_name
        self._phone_number = phone_number
        self.__id = id
    def get_num(self):
        print(f"{self._phone_number}, This is the phone number")

person1 = Personal_info("mariami", "gogia", "577103803", "#0187223018")
print(person1.name)
print(person1.last_name)
person1.get_num()
print(person1._Personal_info__id)

#task 4
class Animal:
    def __init__(self, name, food_color):
        self.name = name
        self.food_color = food_color
    def opinion(self):
        print("We are all animals!!!")

class Prey(Animal):
    def food_1(self):
        print(f"We eat only {self.food_color} plants and veggies!")

class Predator(Animal):
    def food_2(self):
        print(f"We eat {self.food_color} meat!!!")

class Rabbit(Prey):
    def sound(self):
        print(f"{self.name} says whin-whin!")

class Hawk(Predator):
    def scary_sound(self):
        print(f"{self.name} says kee-kee-kee!")


animal_1 = Rabbit("Miss Rabbit", "green")
animal_2 = Hawk("Bran", "red")
print(animal_1.name)
print(animal_1.food_color)
print(animal_2.name)
print(animal_2.food_color)
animal_1.food_1()
animal_2.food_2()
animal_1.sound()
animal_2.scary_sound()
              

