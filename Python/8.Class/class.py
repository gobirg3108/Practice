# class laptop:
#     price = 0
#     processor = ""
#     ram = ""
    
# hp = laptop()
# dell = laptop()
# lenovo = laptop()

# hp.price=500000
# hp.processor = "i7"
# hp.ram = "8GB"

# print(hp.price)
    
    
# class student:
#     def __init__(self, name, reg_no):
#         self.name = name
#         self.register_no = reg_no

#     def display(self):
#         print("Name:", self.name)
#         print("Reg No:", self.register_no)

# name = input("Enter name: ")
# reg_no = input("Enter reg no: ")

# s1 = student(name, reg_no)
# s1.display()

# class Fruit :
#     def __init__(self,color):
        
#         self.color = color
        
# apple = Fruit("Red")

# print(apple.color)

class Teacher:
    def __init__(self, name, RegNo, subject, salary):
        self.name = name
        self.RegNo = RegNo
        self.subject = subject
        self.salary = salary

    def display(self):
        print("Name      :", self.name)
        print("Reg No    :", self.RegNo)
        print("Subject   :", self.subject)
        print("Salary    :", self.salary)

# Create objects
teacher1 = Teacher("Gobi", 22, "Maths", 45000)
teacher2 = Teacher("Anu", 33, "Science", 50000)

# Display info
teacher1.display()
print("-----------")
teacher2.display()
