"""This script demonstrates the use of list comprehensions in Python"""


def get_total_guests(guests):
    """Calculate the total number of guests"""
    # Use list comprehension to calculate the total number of guests
    total_guests = sum([guest["party_number_adults"]
                        + guest["party_number_children"] for guest in guests])

    # Return the total number of guests
    return total_guests


def get_guest_list(guests):
    """Create a list of strings containing the invitation name and family name
    of each guest"""
    # Use list comprehension to create a list of strings that contain the
    # invitation name and family name, separated by a space
    guest_list = [guest["invitation_name"] + " " + guest["family_name"]
                  for guest in guests]

    # Return the guest list
    return guest_list


if __name__ == "__main__":

    guests = [
        {
            "family_name": "Liu",
            "invitation_name": "Mr. and Ms.",
            "party_number_adults": 2,
            "party_number_children": 2
        },
        {
            "family_name": "Jordan",
            "invitation_name": "Dr. and Mr.",
            "party_number_adults": 2,
            "party_number_children": 1
        },
        {
            "family_name": "Parton",
            "invitation_name": "Mx.",
            "party_number_adults": 1,
            "party_number_children": 0
        },
        {
            "family_name": "McCoy",
            "invitation_name": "Mx. and Ms.",
            "party_number_adults": 2,
            "party_number_children": 3
        },
        {
            "family_name": "Lopez",
            "invitation_name": "Dr. and Dr.",
            "party_number_adults": 2,
            "party_number_children": 3
        },
        {
            "family_name": "Mariani",
            "invitation_name": "Susan and Larson",
            "party_number_adults": 2,
            "party_number_children": 4
        },
        {
            "family_name": "Iglesias",
            "invitation_name": "Iggy",
            "party_number_adults": 1,
            "party_number_children": 2
        }
    ]

    # Get the guest list from the guests list
    guest_list = get_guest_list(guests)

    # Print the guest list
    print("Guest list:")
    for guest in guest_list:
        print(guest)

    # Get the total number of guests from the guests list
    total_guests = get_total_guests(guests)

    # Print the total number of guests
    print(f"Total number of guests: {total_guests}")
