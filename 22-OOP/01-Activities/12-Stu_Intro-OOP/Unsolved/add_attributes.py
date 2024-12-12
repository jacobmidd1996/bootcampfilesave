"""Creating a Car class with methods and instances"""

# Define the Car class with five parameters
class Car:
    """Creating a Car class with five parameters and instances"""
    # TODO: Create the __init__ method with five parameters
    # TODO: Initialize the five attributes
    def _init_(self, make=None, model=None, body=None, year=None, color=None):
        self.make=make
        self.model=model
        self.body=body
        self.year=year
        self.color=color


if __name__ == "__main__":
    # TODO: Create prompts for the user to enter the car information.
    make=input("please enter the car's make:")
    model=input("please enter the car's model:")
    body=input("please enter the car's body:")
    year=input("please enter the car's year:")
    color=input("please enter the car's color:")

    # TODO: Pass user information to the instance of the Car class.
    car = Car(make, model, body, year, color)


    print('Here is the information you enter for the car.')
    # TODO: Print the details of the car.
    print(f"make: {car.make}")
    print(f"make: {car.model}")
    print(f"make: {car.body}")
    print(f"make: {car.year}")
    print(f"make: {car.color}")
    
