"""This script demonstrates how to loop through a dictionary"""

# Create a planet dictionary.
# planets = ("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus",
#            "Neptune")
# planet_sizes = (2440, 6052, 6371, 3390, 69911, 58232, 25362, 24622)

# planets_dict = dict(zip(planets, planet_sizes))

planets_dict = {
    "Mercury": 2440,
    "Venus": 6052,
    "Earth": 6371,
    "Mars": 3390,
    "Jupiter": 69911,
    "Saturn": 58232,
    "Uranus": 25362,
    "Neptune": 24622
}

print("Looping through a dictionary's keys:")

# Loop through the keys of the planets_dict.
for planet in planets_dict:
    print(planet)
    print(f"The size of the planet {planet} is {planets_dict[planet]}")


# Pause the script to review the output.
input("\nPress enter to continue:")

print("Looping through a dictionary's keys and using the keys:")

# Loop through the keys of the planets_dict and use the key to print out the
# key and value.
for planet in planets_dict.keys(): # SAME AS for planet in planets_dict
    print(f"The size of the planet {planet} is {planets_dict[planet]}")

# Pause the script to review the output.
input("\nPress enter to continue:")

print("Looping through a dictionary's values:")

# Loop through just a dictionary's values.
for size in planets_dict.values():
    print(size)

# Pause the script to review the output.
input("\nPress enter to continue:")

print("Looping through a dictionary's key-value pairs:")

# Use the items() method to loop through planets_dict.
for a, b in planets_dict.items():
    print(f"The size of the planet {a} is {b}")
