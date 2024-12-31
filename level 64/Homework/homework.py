#task 3
#use class methods for class-specific actions, and static methods for utility functions that don't need class or instance context.
#instance methods operate on instance data and require self as the first parameter.
#class methods operate on class-level data and take cls as the first parameter, using the @classmethod decorator.
#static methods don't operate on class or instance data, and don't require self or cls, using the @staticmethod decorator.

#task 4
class School:
    count = 0
    average_score = 0

    def __init__(self, name, lastname, school_class, score, id):
        self.name = name
        self.lastname = lastname
        self.school_class = school_class
        self._score = score
        self.__id = id
        School.count += 1
        School.average_score += score
    
    def student_score(self):
        print(f"{self.name} {self.lastname}: {self._score}")

    @classmethod
    def count_students(cls):
        print(f"Number of students at school: {cls.count}")
    
    @classmethod
    def average_score_school(cls):
        print(f"Average score:{cls.average_score // cls.count}")


class Middle_school(School):
    def school_1(self):
        print(f"{self.name} {self.lastname} goes to middle school!")

    @staticmethod
    def is_this_class_Mschool(num):
        class_in_Mschool = [6, 7, 8, 9]
        print(num in class_in_Mschool)
    

class High_school(School):
    def school_2(self):
        print(f"{self.name} {self.lastname} goes to high school!")

    @staticmethod
    def is_this_class_Hschool(num):
        class_in_Hschool = [10, 11, 12]
        print(num in class_in_Hschool)
    

student1 = Middle_school("Barbare", "Gogia", 6, 7, "#1654648")
student2 = High_school("Mariami", "Gogia", 10, 7, "#0187382")

student1.student_score()
student2.student_score()
print(student1._School__id)

School.count_students()
School.average_score_school()

student1.school_1()
student2.school_2()

Middle_school.is_this_class_Mschool(10)
High_school.is_this_class_Hschool(12)

print(student1.school_class)
print(student2.school_class)
