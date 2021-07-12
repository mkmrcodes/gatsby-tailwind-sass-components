import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className='flex space-x-4 pt-4 pl-4'>
        <button className='btn-primary rounded-none'>Button</button>
        <button className='btn-secondary'>Button</button>
        <button className='btn-tertiary'>Button</button>
        <button className='btn-success'>Button</button>
        <button className='btn-error'>Button</button>
        <button className='btn-dark'>Button</button>
      </div>
      <div className='container'>Test</div>
    </Layout>
  );
};

export default IndexPage;
