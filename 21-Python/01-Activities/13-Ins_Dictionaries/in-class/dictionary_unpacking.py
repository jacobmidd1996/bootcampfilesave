"""This script demonstrates dictionary unpacking in Python"""


def calculation(a=0, b=0, c=1, d=1):
    """Perform a calculation and return the result"""
    return a - b * c / d


if __name__ == "__main__":
    # Define a dictionary of arguments
    my_dict = {
        "c": 3,
        "b": 2,
        "a": 10,
        "d": 2
    }

    # Call the calculation function with unpacked arguments
    print(calculation(**my_dict))
