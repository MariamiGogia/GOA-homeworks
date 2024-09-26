#task 1
groups = [0, 1, 1, 4, 3, 8, 10]
print(list(map(lambda x: x+1, groups)))

#task 2
def func(*args):
    print(" ".join(args))

func("you","can","learn", "programming", "at", "goal-oriented","academy","<3")

#task 3
sent =["no","I", "don't", "want", "to", "study", "i'm", "lazy"]
bad_words=["no", "I'm bored", "lazy"]
print(" ".join(list(filter(lambda x: x not in bad_words, sent))))

#task 4
list1 = [1,2,3]
list2 = [10, 20, 30, 40]
print(list(map(lambda x, y: x + y**2, list1, list2)))