# Boolean

# if(False):
#     print("Yes")
# else:
#     print("No")    

# Comparison Operator:
#     Operator which is used to compare two variables

# print("win"=="win")

# meghna = input("Meghna Died or Not ?")
# if(meghna=="Died"):
#     print("Surya meets Priya")
# else:
#     print("Surya weds Meghna")

# 1.Get input for variable if mark >35 print pass .else print fail

# mark = int(input())

# if(mark > 35):
#     print("Pass")
# else:
#     print("Fail")
    
# 2.    

# income = int(input("Enter Your Income "))

# if(income < 7000):
#     print("Scholarship Is Available")
# else:
#     print("Not Eligible For Scholarship")

# 3.

# number = int(input())

# if( number % 3 == 0 and number % 5 == 0 ):
#     print("Number is Divisible by 3 and 5 .")
# else:
#      print("Number is Not Divisible by 3 and 5 .")    

# 4. Add or Even

# number = int(input())

# if (number % 2 == 0):
#     print("The Number is even")
# else:
#     print("The number is odd")

#5.

# score = int(input("Enter Your Score: "))

# if(score < 35 ):
#     print("Poor Student")
# elif(score > 35 and score < 70 ):
#     print("Average Student")
# elif(score > 70 and score <= 100):
#     print("Good Student")
# else:
#     print("Invalid Score ")

# #6. 

# a = int(input("Enter Num: "))
# b = int(input("Enter Num: "))

# operation = input("add/sub/mul/div: ") 

# if(operation=="add"):
#     print(a+b)
# elif(operation == "sub"):
#     print(a-b)
# elif(operation == "mul"):
#     print(a*b)
# elif(operation=="div"):
#     print(a/b)
# else:
#     print("Invalid Operator")

#7 

# score = int(input("Score: "))

# if(score>=70):
    
#     name = input("Enter Your Name: ")
#     age = input("Enter Your Age: ")
    
#     print("You are Eligible",name)
        
# else:
#     print("Your not Eligible")

# salary = int(input("Enter Your Salary: "))
# age = int(input("Enter Your Age: "))

# if(salary>= 20000 or age <=25):
    
#     loan=int(input("Required Loan : "))
    
#     if(loan>=50000):
#         print("Maximum Loan Amount is 50000")
#     else:
#         print("You are eligible for under 50k loan")
    
# else:
#     print("You are not eligible for Loan")

a = int(input("Tamil: "))
b = int(input("English: "))
c = int(input("Maths: "))
d = int(input("Science: "))
e = int(input("S.Science: "))

add = a+b+c+d+c+e

avg = add/5

if(avg<35):
    print("Additional Class Required")
else:
    print("You are good to")