"""This script demonstrates conditionals in Python."""

##############################################
# Boolean conditionals
##############################################
# Python has two Boolean values: True and False.
# Empty objects are considered False, while non-empty objects are
# considered True.
# Any kind of Boolean expression can be used in an if statement.

dentist = ""

if dentist:
    print("dentist is truey/truthy")
else:
    print("dentist is falsy")

##############################################
# Comparison operators
##############################################
# Python has six comparison operators: ==, !=, <, <=, >, >=.
# Note that == in Python is the equivalent of === in JavaScript.

# Python's else if keyword is elif.

user_input_number = int(input("Enter a number: "))
if user_input_number < 0:
    print("The number is negative.")
elif user_input_number == 0:
    print("The number is zero.")
else:
    print("The number is positive.")

##############################################
# Logical operators
##############################################
# Python has three logical operators: and, or, and not.
# Logical operators are used to combine conditional statements.

# The and operator returns True if both conditions are True.
# and is the Python equivalent of the && operator in JavaScript.

if user_input_number > 0 and user_input_number % 2 == 0:
    print("The number is positive and even.")

# The or operator returns True if at least one condition is True.
# or is the Python equivalent of the || operator in JavaScript.

if dentist == "Dr. Takahashi" or dentist == "Dr. Lee":
    print("The dentist is either Dr. Takahashi or Dr. Lee.")

# The not operator returns True if the condition is False.
# not is the Python equivalent of the ! operator in JavaScript.

if not dentist:
    print("dentist is falsy (could for example be an empty string)")

##############################################
# Identity operators
##############################################
# Python has two identity operators: is and is not.
# Identity operators are used to compare the objects, not if they are equal,
# but if they are actually the same object, with the same memory location.

# We can use identity operators to check if an object is null or not.
# The None keyword is used to define a null value or no value at all.

house = None

if house is None:
    print("house is None")

house = "123 Main Street"

if house is not None:
    print("house is not None")

# We can also use identity operators to check if a variable is a particular
# data type.

dentist = "Dr. Takahashi"

if type(dentist) is str:
    print("dentist is a string")

savings = "4000"

if type(savings) is not int and type(savings) is not float:
    savings = float(savings)
    print("savings is now a float")

# Alternatively, you can use the isinstance() function to check the data type.
# isinstance() is a built-in function that returns True if the specified object
# is of the specified type, otherwise False.
# This is an example of using a function as a Boolean expression.

savings = "4000"

if not isinstance(savings, int) or not isinstance(savings, float):
    savings = float(savings)
    print("savings is now a float")

##############################################
# Membership operators
##############################################
# Python has two membership operators: in and not in.
# The in operator returns True if a sequence with the specified value is
# found in the object.

if "Takahashi" in dentist: # dentist is "Dr. Takahashi M. Johannsen"
    print("The dentist's name is Takahashi.")

if "Dr." not in dentist:
    print("The dentist is not a doctor.")
