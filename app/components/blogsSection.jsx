

import Blog from './blog'

const BlogsSection = () => {




    return (
        <section id="blogs" className=" flex flex-col justify-center py-10 ">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-5 content-center'>
                <Blog img='/blog-1.png'></Blog>
                <Blog img='/blog-2.png'></Blog>
                <Blog img='/blog-3.png'></Blog>
                <Blog img='/blog-4.png'></Blog>
            </div>
            {/* <h1 className='p-5 font-medium	 text-5xl'>Blog Artixcore</h1> */}

        </section>

    )




}

export default BlogsSection;