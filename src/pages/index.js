import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className='flex space-x-4 pt-4 pl-4'>
        <button className='btn btn-primary rounded-none'>Button</button>
        <button className='btn btn-secondary'>Button</button>
        <button className='btn btn-tertiary'>Button</button>
        <button className='btn btn-success'>Button</button>
        <button className='btn btn-error'>Button</button>
        <button className='btn btn-dark'>Button</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
