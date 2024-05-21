from turtle import*

#we want to paint a house

#step 1: draw a square
speed(30)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of squre

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)     #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

#end drawing of a door

penup()
goto(200, 200)
pendown()

#drawing a roof
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#end drawing of a roof

#drawing windows

penup()
goto(65, 125)
pendown()

color("blue")
begin_fill()
left(300)
forward(50)
right(90)
forward(45)
right(90)
forward(50)
right(90)
forward(45)
end_fill()

penup()
goto(135, 125)
pendown()

begin_fill()
left(90)
forward(50)
left(90)
forward(45)
left(90)
forward(50)
left(90)
forward(45)
end_fill()

#end drawing of windows

#The End


exitonclick()