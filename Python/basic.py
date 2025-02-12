# Install Python
x=1.4
x="14fr"
x=True
print(x)

# Numbers : integers(Whole Number) & floats( decimal, exponential e)


text= "hello World "
print(len(text))


#print(text[1:]) # ignore the first character anf give the rest
#print(text[:4]) # Pick up to the first character
#print(text[:-1])# pick the last character
#print(text[:-5]) # ignore the last 5 character and give me the rest
#print(text[5:10])

# # repetiton
print(type(text.split('W')))

name=" John Doe"
print(text + "My name is" + name)

# modulo
# print("I'm going to inject %f here." %34)

#print("I'm going to inject %s here." %'something')

print("Hello there my Name is {} and I would want to say {} again".format(name, text))

# Formatted String Literals(f-strings)

print(f"Hello there  my name is {name}")

#print(text.index('o'))

people= ["Alex",'Ivonne','James', "Jennifer"]
# [] - List literals

#mutable
people[0]='Favour'
people.append("Evans")
people.pop(2)

combinedlist= people + ['Brian', 'Kelvin', "James",'Ivonne','James', "Jennifer"]

combinedlist.reverse()
combinedlist.sort()
print(combinedlist)


## Dictionary

my_dict = {'key1':'value1','key2':'value2'}
my_dict['key1']='fhgjh'

my_dict.keys() # list of keys
my_dict.values()# List of values

print(my_dict['key1'])
print(my_dict)


#  Tuple
# () -tuple literal
x=(1,2,3)
print(x)

# Set
# ()
# Unique values only

my_set=set(combinedlist)

my_set.add("Johnson")
print(my_set)

x = True
f = False