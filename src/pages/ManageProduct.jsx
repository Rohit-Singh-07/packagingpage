import { Switch } from 'antd';
import ProductNav from '../components/ProductNav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function ManageProduct() {

  const [checked, setChecked] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('limegreen');

    const onChange = (checked) => {
      setChecked(checked);
      setBackgroundColor(checked ? 'limegreen' : 'gray')  
      };

  return (
    <div className="py-10 px-[5vw] w-full h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="lg:text-[40px] md:text-[35px] text-[30px] text-blue-500 font-semibold">Manage Product</h1>

      <div className='flex gap-4 items-center text-zinc-400 pt-5'>
      <h2 className='lg:text-[25px] md:text-[20px] text-[15px]'>Personalized Magazines</h2>
      <Switch defaultChecked={checked} onChange={onChange} style={{ backgroundColor: backgroundColor }} />
      </div>

      <ProductNav/>

      <div className='w-full min-h-[60vh]  mt-16'>
        <Outlet/>
      </div>
    </div>
  )
}

export default ManageProduct
