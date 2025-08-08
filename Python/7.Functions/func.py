# def add():
#     a = 5
#     b = 5
#     c = a+b
    
#     print(c)
    
# add()

# def findPassOrFail():
#     mark = int(input("Enter Your Mark: "))
    
#     if (mark < 0 or mark > 100):
#         print("Invalid mark! Please enter a value between 0 and 100.")
#     elif(mark >= 35):
#         print("Pass")
#     else:
#         print("Fail")

# findPassOrFail()


# def printRange(a, b):
#     for i in range(a, b):
#         print(i)

# # get inputs
# start = int(input("Enter a num: "))
# end = int(input("Enter a num: "))
# printRange(start, end)

def add(n1, n2):
    return n1 + n2

def subtract(n1, n2):
    return n1 - n2

def multiply(n1, n2):
    return n1 * n2

def divide(n1, n2):
    if n2 != 0:
        return n1 / n2
    else:
        return "Cannot divide by zero"

a = int(input("Enter a: "))
b = int(input("Enter b: "))

print("Addition:", add(a, b))
print("Subtraction:", subtract(a, b))
print("Multiplication:", multiply(a, b))
print("Division:", divide(a, b))
