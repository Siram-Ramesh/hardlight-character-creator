import  {Link} from 'react-router';

function CompendiumIndex() {

    return (
        <div className='flex-col justify-around min-h-full pt-12 sm:pt-6 lg:pt-8'>
            <h1 className='text-indigo-800 p-12 sm:p-6 lg:p-8 sm:text-4xl md:text-6xl'>Compendium</h1>

            <div className='flex relative left-0 justify-items-start py-12 sm:py-6 lg:py-8'>
                <button className = "p-12 sm:p-6 lg:p-8 bg-rose-900 hover:bg-rose-800 text-fuchsia-200">
                    <Link to="traits" className='lg:text-3xl sm:text-lg'>Search Through All Traits</Link>
                </button>
            </div>

            <div className='flex relative left-0 justify-items-start py-12 sm:py-6 lg:py-8'>
                <button className = "p-12 sm:p-6 lg:p-8 bg-gray-500 text-gray-100">
                    <Link to="talents" className='lg:text-3xl sm:text-lg'>Talents</Link>
                    <p className='text-gray-300 text-xs sm:hidden'>Feature under construction</p>
                </button>
            </div>
            <div className='flex relative left-0 justify-items-start py-12 sm:py-6 lg:py-8'>
                <button className = "p-12 sm:p-6 lg:p-8 bg-gray-500 text-gray-100">
                    <Link to="gear" className='lg:text-3xl sm:text-lg'>Gear</Link>
                </button>
            </div>
            <div className='flex relative left-0 justify-items-start py-12 sm:py-6 lg:py-8'>
                <button className = "p-12 sm:p-6 lg:p-8 bg-gray-500 text-gray-100">
                    <Link to="backgrounds" className='lg:text-3xl sm:text-lg'>Backgrounds</Link>
                </button>
            </div>
            <div className='flex relative left-0 justify-items-start py-12 sm:py-6 lg:py-8'>
                <button className = "p-12 sm:p-6 lg:p-8 bg-gray-500 text-gray-100">
                    <Link to="species" className='lg:text-3xl sm:text-lg'>Species</Link>
                </button>
            </div>
        </div>
      )
}

export default CompendiumIndex;