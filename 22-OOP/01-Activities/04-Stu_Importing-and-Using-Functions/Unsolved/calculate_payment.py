"""This program calculates the monthly payment for a car loan."""

# TODO: Import the calculate_monthly_payment function from the car_loan file.
from car_loan import calculate_monthly_payment
# TODO: Prompt the user to enter the price of the car.
# TODO: Convert the price to a floating point number.
principle = float(input("enter the price of the car: "))
# TODO: Prompt the user to enter the annual interest rate.
# TODO: Convert the interest rate to a floating point number.
annual_interest_rate = float(int("enter the annual interest rate: "))
# TODO: Prompt the user to enter the number of months to pay off the loan.
# TODO: Convert the number of months to an integer.
length_of_loan = float(int("enter the amount of months to pay off loan: "))
# TODO: Call the function and pass the user's input as arguments.
monthly_payment = calculate_monthly_payment(annual_interest_rate, principal, annual_interest_rate)
# TODO: Assign the result to a variable.

# TODO: Print the monthly payment to two decimal places.
