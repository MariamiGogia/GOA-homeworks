#task 1
students = {
    "GOA": "mari",
    "IB Mtiebi": "nia",
    "Green school": "elene"
}
print(students["GOA"])
print(students["IB Mtiebi"])
print(students["Green school"])
print(students.get("GOA"))
print(students.get("IB Mtiebi"))
print(students.get("Green school"))

#task 2
brands = {
    1: "Chanel",
    2: "Miu Miu",
    3: "Louboton"
}

for i in brands.values():
    print(i)

#task 3
food = {
    "fruits":["apple", "strawberry", "grapes"],
    "veggies":["potato", "tomato", "zuchini"]
}

print(food)

#task 4
films ={
    1 : "OUAT",
    "Favourite" : ["Game of thrones", "Dr.house"],
    "new" : {1: "Young sheldon", 2: "House of the Dragon"}
}

print(films)