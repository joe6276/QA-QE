
# class Example:
#     pass
#     # Attributes
#     # Method
# x= Example()

# print(type(x))


class Vehicle:
    name=" Mercedes Benz" # Class object Attribute

    def __init__(self, color): # Constructor
        self.color=color

    def speed(self):
        print("Speeding..")

    def hoot(self):
        print("The " + self.color + self.name + " is Hooting...")


class Car(Vehicle):

    def __init__(self, color, power):
        Vehicle.__init__(self,color)
        self.power= power
    
    def speed(self):
        print("Speeding at 100 KMPH..")
    
    def reverse(self):
        print("the car is reversing..")


class Lorry(Vehicle):

    def __init__(self, color, power):
        Vehicle.__init__(self,color)
        self.power= power
    
    def speed(self):
        print("Speeding at 60 KMPH..")
    
    def load(self):
        print("Loading Cargo..")


c= Car('Black', "2500CC")
c.hoot() # parent
c.reverse() # Child
c.speed() # Overriding


l= Lorry('Black', "3500CC")
l.hoot() # parent
l.load()

 # Child
l.speed() #
c.speed()


# special Methods

class Book:
    def __init__(self, title, author, pages):
        self.title=title
        self.author=author
        self.pages=pages
    
    def __str__(self):
        return f"{self.title} is written bt {self.author} and its {self.pages} pages"
    
    def __len__(self):
        return self.pages
    
    def __del__(self):
        print("The book was deleted") 

book = Book("The Anthology of Balaji", "Eric Jogen", 230)
print(book)
print(len(book))
del book




# For this challenge, create a bank account class that has two attributes:

# * owner
# * balance

# and two methods:

# * deposit
# * withdraw

# As an added requirement, withdrawals may not exceed the available balance.

# Instantiate your class, make several deposits and withdrawals, and test to make sure the account can't be overdrawn.