import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className=''>
      <h1 className='text-2xl text-gray-400 py-[5px] px-[10px] text-center capitalize'>{cat} Blogs</h1>
      <div className="flex justify-center">
        <hr className="w-[10rem]"/>
      </div>
      <div className='flex gap-[50px] max-xl:flex-col'>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export async function generateMetadata({ searchParams }) {
  const { cat } = searchParams;

  return {
    title: `${cat} blogs | Tron`,
    description: 'This is category based blogs page',
  };
}

export default BlogPage;