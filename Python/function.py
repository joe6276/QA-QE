
## Control Flow
# parentheses / Curly braces -other languages
# Colon / indentation


# if(a>b){

# }

# if a>b :
#     print('somethng')


# if case1:
#     actions
# elif case2:
#     actions
# else:
#     # else actions

day='Monday'
if day=='Wednesday':
    print("Hello world")

elif day=='Thursday':
    print("Hello Thursday")
else:
    print("Its a different day..")



# For

# for item in object:
#     statements to execute

list1=[1,2,3,4,5,6,7,8]

for num in list1:
    print(num)


# in statement - Check if something exist

print(1 in list1)

# not in statement - Check if something does not exist

print(1 not in list1)

# for index,num in enumerate(range(0,10)):
    # print(index, num)

# While loop


# while test:
#     code statements
# else:
#     final code ststements

x=0

while x<5:
    print(x)
    x+=1
    if x==3:
        continue
    if x==4:
        break
    #add other login

# print(min(list1))

# function  
# def


def printName(name,age):
    print(name,age)
    return age-2 # void, object

# result=printName("Jane Doe",12)

# print(result)

def printNames(*names):
   for name in names:
       print(name)

# * - represent arguments -Tuple
printNames('Jane', 'John', 'doe')


def sums(*args):
    print(sum(args))

sums(2,3,4,5)

def personProperties(**kwargs): # dictionary
    print(kwargs)


personProperties(name="John", age=12)


# Lambda

square = lambda num:num ** 2

print(square(2))


# **Write a Python function that checks whether a word or phrase is palindrome or not.**

# Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam,kayak,racecar, or a phrase "nurses run". Hint: You may want to check out the .replace() method in a string to help out with dealing with spaces. Also google search how to reverse a string in Python, there are some clever ways to do it with slicing notation.


# **Write a Python function to check whether a string is pangram or not. (Assume the string passed in does not have any punctuation)**

#     Note : Pangrams are words or sentences containing every letter of the alphabet at least once.
    # For example : "The quick brown fox jumps over the lazy dog"


    ____
# **Write a Python function to multiply all the numbers in a list.**