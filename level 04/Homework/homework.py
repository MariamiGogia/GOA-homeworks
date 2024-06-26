from turtle import*
bgcolor("skyblue")
speed(30)
width(7)
penup()
goto(-700,-300)
pendown()
color("dark green")
color("black")
begin_fill()
forward(700)
left(90)
forward(250)
left(90)
forward(700)
left(90)
forward(250)
end_fill()
penup()
goto(-250, -50)
pendown()

left(180)
color("black")
begin_fill()
forward(135)
left(45)
forward(150) #roof
left(90)
forward(150)
left(45)
forward(135)
end_fill()

penup()  #window
goto(-420,-30)
pendown()
right(180)
color("dark green")
forward(100)
right(90)
forward(120)
right(90)
forward(100)
right(90)
forward(120)
penup()
goto(-360, -30)
pendown()
right(90)
forward(100)



penup()
goto(-357, 190)
pendown()
color("dark green")
begin_fill()
forward(150) #flag
right(90)
forward(180)
right(90)
forward(80)
right(90)
forward(180)
end_fill()


penup()         #flag title
goto(-345,275)
pendown()
right(90)
color("black")
forward(50)
right(90)
forward(30)
penup()
goto(-345, 275)
pendown()
forward(30)
left(90)
forward(20)
left(90)
forward(10)
penup()

goto(-290, 275)
pendown()
left(180)
forward(35)
left(90)
forward(50)
left(90)
forward(35)
left(90)
forward(50)

penup()
goto(-230, 275)
pendown()
left(160)
forward(50)
right(140)
forward(50)


penup()   #door
goto(-250,-300)
pendown()
color("dark green")
begin_fill()
left(160)
forward(160)
left(90)
forward(200)
left(90)
forward(160)
end_fill()


penup()     #The king
goto(150,-300)
pendown()
color("black")
right(180)
forward(10)
color("blue")
forward(40)
color("red")
begin_fill()
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
end_fill()
left(90)
forward(50)
right(90)
color("blue")
forward(40)
color("black")
forward(10)

penup()
goto(175, -200)
pendown()
left(180)
width(3)
forward(15)
right(90)
forward(15)
left(90)
forward(25)
left(90)
forward(35)
left(90)
forward(25)
left(90)
forward(19)

penup()
goto(150, -210)
pendown()
width(7)
color("red")
right(110)
forward(50)
penup()
goto(200, -210)
pendown()
left(50)
forward(50)


penup()   #the queen
goto(300, -300)
pendown()
begin_fill()
left(60)
forward(90)
left(110)
forward(115)
left(135)
forward(115)
end_fill()
penup()
goto(350, -200)
pendown()
color("black")
width(3)
left(205)
forward(15)
right(90)
forward(15)
left(90)
forward(25)
left(90)
forward(35)
left(90)
forward(25)
left(90)
forward(19)



penup()             
goto(150, -155)
pendown()
color("yellow")
begin_fill()
forward(45)
left(90)
forward(25)
left(90)
forward(45)
left(90)
forward(25)
end_fill()


# The sun
penup()
goto(500,300)
pendown()
color("yellow")
begin_fill()
circle(50)
end_fill()

# The tree
penup()
goto(700, -300)
pendown()
right(180)
color("brown")
begin_fill()
forward(250)
left(90)
forward(50)
left(90)
forward(250)
end_fill()

penup()
goto(600, 0)
pendown()
color("green")
begin_fill()
circle(80)
end_fill()

penup()
goto(550, -300)
pendown()
color("brown")
begin_fill()
left(180)
forward(150)
left(90)
forward(50)
left(90)
forward(150)
end_fill()

penup()
goto(467, -100)
pendown()
color("green")
begin_fill()
circle(60)
end_fill()

exitonclick()



