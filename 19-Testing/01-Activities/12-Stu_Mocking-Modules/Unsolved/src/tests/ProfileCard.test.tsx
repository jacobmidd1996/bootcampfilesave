import { render } from '@testing-library/react';
import ProfileCard from '../components/ProfileCard';
import pretty from 'pretty';

// TODO: import vi from vitest

const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  phone: '123-456-7890',
};

// TODO mock the ProfileDetails component so that our tests pass and they do not rely on the ProfileDetails component

describe('ProfileCard', () => {
  it('should render a ProfileCard with the mocked ProfileDetails component', () => {
    render(<ProfileCard user={user} />);

    const profileCardName = document.querySelector('h2');
    const profileDetails = document.querySelectorAll('p');

    expect(profileCardName?.textContent).toBe('John Doe');
    expect(profileDetails[0].textContent).toBe('JOHN@doe.com');
    expect(profileDetails[1].textContent).toBe('321-456-7890');
  });

  it('should render a ProfileCard that matches the snapshot', () => {
    render(<ProfileCard user={user} />);

    const profileCard = document.querySelector('.profile-card');

    if(profileCard) {
      expect(pretty(profileCard.innerHTML)).toMatchSnapshot();
    }
  });
});
