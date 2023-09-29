import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogin');
    localStorage.clear();
    window.location.replace('/');
  });
};

export default Logout;
