import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='container'>
      <main className='mx-2 flex flex-col my-2 gap-4'>
        <div className='flex gap-2'>
          <Link to='/'>
            <p className='text-gray-600'>Home</p>
          </Link>
          <p className='text-gray-600'>/</p>
          <Link to='contact'>
            <p>Contact</p>
          </Link>
        </div>
        <h2>Contact Us</h2>
        <p>
          If you have business inquiries or other questions, please send and
          email to: 9anime@gmail.com
        </p>
      </main>
    </div>
  );
};

export default Contact;
