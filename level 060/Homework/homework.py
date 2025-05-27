#task 4
class Motorcycle:
    count = 0
    def __init__(self, brand, model, color, size):
        self.brand = brand
        self.model = model
        self.color = color
        self.size = size
        Motorcycle.count += 1

    def sound(self):
        print("BRRR, BRRR !!!")

motorcycle1 = Motorcycle("BMW", "M 1000 RR.", "dark red", "M")
motorcycle2 = Motorcycle("BMW", "2023 F 900 R.", "silver", "L")
motorcycle3 = Motorcycle("Kawasaki", "Kawasaki Z650", "black", "S")
motorcycle4 = Motorcycle("Suzuki", "Gsx-8r", "blue", "M")
motorcycle5 = Motorcycle("Harley Davidson", "Harley-Davidson Pan America 1250", "yellow", "XL")

print(motorcycle1.brand)
print(motorcycle2.model)
print(motorcycle3.color)
print(motorcycle4.size)
motorcycle5.sound()

print(Motorcycle.count)

#task 5
class Animal:
    def __init__(self, name, color):
        self.name = name
        self.color = color

class Frog(Animal):
    def voice(self):
        print("Kwa Kwa")

class Chicken(Animal):
    def voice1(self):
        print("KOO KOOO")

class Pig(Animal):
    def voice2(self):
        print("Grut Grut")


animal1 = Frog("Puss", "green")
animal2 = Chicken("KOKO", "white")
animal3 = Pig("Pinky", "pink")

print(animal1.name)
print(animal2.name)
print(animal3.name)

print(animal1.color)
print(animal2.color)
print(animal3.color)

animal1.voice()
animal2.voice1()
animal3.voice2()




    


