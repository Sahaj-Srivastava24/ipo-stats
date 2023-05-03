import {styled} from '@nextui-org/react';

export const SendButton = styled('button', {
  // reset button styles
  background: 'transparent',
  border: 'none',
  padding: 0,
  // styles
  width: '40px',
  dflex: 'center',
  cursor: 'pointer',
  scale: '2',
  transition: 'opacity 0.25s ease 0s, transform 0.25s ease 0s',
  svg: {
    size: '100%',
    transition: 'transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms',
    boxShadow: '0 5px 20px -5px rgba(0, 0, 0, 0.1)',
  },
  '&:hover': {
    opacity: 0.8
  },
  '&:active': {
    transform: 'scale(0.9)',
    svg: {
      transform: 'translate(24px, -24px)',
      opacity: 0
    }
  }
});



export default function SearchButton() {
  return (
    <SendButton>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#777E90" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.9371 22.8799C21.034 23.582 19.8991 24 18.6666 24C15.7211 24 13.3333 21.6122 13.3333 18.6667C13.3333 15.7212 15.7211 13.3334 18.6666 13.3334C21.6122 13.3334 24 15.7212 24 18.6667C24 19.8992 23.5819 21.034 22.8799 21.9371L26.4714 25.5286C26.7317 25.789 26.7317 26.2111 26.4714 26.4714C26.211 26.7318 25.7889 26.7318 25.5286 26.4714L21.9371 22.8799ZM22.6666 18.6667C22.6666 20.8758 20.8758 22.6667 18.6666 22.6667C16.4575 22.6667 14.6666 20.8758 14.6666 18.6667C14.6666 16.4576 16.4575 14.6667 18.6666 14.6667C20.8758 14.6667 22.6666 16.4576 22.6666 18.6667Z" fill="#FCFCFD" />
      </svg>
    </SendButton>
  );
}
