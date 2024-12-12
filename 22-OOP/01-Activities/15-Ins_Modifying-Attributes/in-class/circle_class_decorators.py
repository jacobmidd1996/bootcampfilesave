""" This program calculates the area and circumference of a circle """
from math import pi


class Circle:
    """ This class calculates the area of a circle """
    def __init__(self, radius=None):
        if radius is not None:
            self.radius = radius

    @property
    def radius(self):
        """ This method gets the radius of a circle """
        print("ACCESSING RADIUS!")
        return self._radius

    @radius.setter
    def radius(self, value):
        """ This method sets the radius of a circle """
        if not isinstance(value, float) or value <= 0:
            raise ValueError("positive number expected")
        self._radius = value

    def calculate_area(self):
        """ This method calculates the area of a circle """
        area = round(pi * self._radius**2, 2)
        return f"The area of the circle is: {area} inches squared"

    def calculate_circumference(self):
        """ This method calculates the circumference of a circle """
        circumference = round(2 * pi * self._radius, 2)
        return f"The circumference of the circle is: {circumference} inches."


if __name__ == "__main__":
    # Create an instance of the Circle class
    c = Circle(100.0)
    print(f"c.radius is {c.radius} and c._radius is {c._radius}")
    # Prompt the user for the radius of the circle
    circle_radius = input("Enter the radius of the circle in inches: ")

    try:
        # # Set the radius of the circle.
        c.radius = float(circle_radius)
        # c.radius = circle_radius
        # print(c.radius)
        # print(c._radius)
        # c._radius = 10  # Allowed but the idea is that you won't
        # c.radius = -10  # Raises Error!
        # c._radius = -10  # This will set the _radius property

        # Print the area of the circle
        print(c.calculate_area())

        # Print the circumference of the circle
        print(c.calculate_circumference())

    except ValueError as e:
        print(f"Error: {e}")
