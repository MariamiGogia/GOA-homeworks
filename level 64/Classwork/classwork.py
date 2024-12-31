# task 1
#a regular method operates on instance data, while a class method operates on class-level data, using cls

# task 2
#the instance method operates on instance data and requires self, while a static method doesn't require self or cls either

#task 3
#a class method operates on the class itself and requires cls, while a static method doesn't operate on the class or instance, 
#and doesn't require cls or self. also class method uses @classmethod decorator and static - @staticmethod decorator.

#task 4
# We need to use an instance method when we need to operate on instance-specific data, requiring access to the instance (self), 
# We use a class method when we need to modify or access class-level data, using the class itself (cls) and 
# We use a static method when the method doesn't need access to instance or class data and can work independently(it's alone with itself)

class School:
    count = 0
    def __init__(self, student_name, student_lastname, student_class):
        self.student_name = student_name
        self.student_lastname = student_lastname
        self.student_class = student_class
        School.count += 1

    @classmethod                          #task 5
    def num_of_students(cls):
        return f"{cls.count} children goes at school"
    
    @staticmethod                           #task 6
    def is_this_class(student_class):
        class_in_school = ["9 class", "10 class", "11 class", "12 class"]
        return student_class in class_in_school
    

student1 = School("mari", "gogia", "10 class")
student2 = School("data", "jgenti", "12 class")

print(School.num_of_students())
print(School.is_this_class("8 class"))
print(School.is_this_class("10 class"))
