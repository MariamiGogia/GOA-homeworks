#task 2
film = {
    "name": "House of the Dragon",
    "year": 2022,
    "country": "USA"
}

for key, value in film.items():
    print(f"Key:{key}, Value:{value}")

#task 3
car_u_want_to_buy = {
    "first_car" : {
        "brand": "Porsche",
        "model": "Porsche 911", 
        "color": "Dark red",
        "price": 114400},
    "second_car" : {
        "brand": "Lamborghini",
        "model": "Aventador", 
        "color": "White",
        "price": 507353},
    "third_car" : {
        "brand": "Tesla",
        "model": "Model 3", 
        "color": "Grey",
        "price": 40380}
}

print(car_u_want_to_buy)
print(car_u_want_to_buy.get("first_car"))
print(car_u_want_to_buy.get("second_car"))
print(car_u_want_to_buy.get("third_car"))

