"""This script demonstrates the use of list comprehensions in Python"""

# Calculation example without list comprehension
circle_radii = [2.4, 4.5, 6.2, 7.6, 10.5]
PI = 3.14159265358979323846

# Create a circumferences list from a list of radii.
circumferences = []
for radius in circle_radii:
    circumferences.append(2 * PI * radius)
print(circumferences)

# Calculation example with list comprehension
circumferences = [round(2 * PI * radius, 3) for radius in circle_radii]
print(circumferences)

input("Press enter to continue!")

# Filter example without list comprehension
july_temperatures = [87, 85, 92, 79, 106, 88, 85, 92, 91, 87, 89, 90, 86, 96,
                     88, 79, 82, 87, 91, 86, 94, 100, 97, 89, 85, 89, 82, 86,
                     91, 89, 85]
hot_days = []
for temperature in july_temperatures:
    if temperature > 90:
        hot_days.append(temperature)
print(hot_days)

# Filter example with list comprehension
hot_days = [t for t in july_temperatures if t > 90]
print(hot_days)

# Combined
# 10% tax on items that cost at least $1000
prices = [500, 1000, 250, 2000, 5000, 100, 883]
luxury_item_costs = [price*1.1 for price in prices if price >= 1000]
print(luxury_item_costs)

ages = {
    "Cody": 27,
    "Dan": 39,
    "Katie": 29,
    "Mary": 28,
    "Sasha": 26
}

ages_next_year = [ages[n] + 1 for n in ages]
print(ages_next_year)

# Yes, there's also a dictionary comprehension
ages_in_two_years = { n:a+2 for (n,a) in ages.items()}
print(ages_in_two_years)