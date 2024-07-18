import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className='flex-2 mt-[60px]'>
      <div className="">
        <h2 className='text-gray-500 font-normal'>{"What's hot"}</h2>
        <h1 className='text-[28px]'>Most Popular</h1>
        <MenuPosts withImage={false} />
        <h2 className=''>Discover by topic</h2>
        <h1 className=''>Categories</h1>
      </div>
      <MenuCategories />
      <div className="">
        <h2 className=''>Chosen by the editor</h2>
        <h1 className=''>Editors Pick</h1>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;