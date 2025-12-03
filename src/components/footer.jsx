// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  const name = process.env.NEXT_PUBLIC_NAME
  return (
    <footer className="bg-stone-900 text-white px-8 py-12 md:h-120 flex flex-col justify-end gap-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-5">
        <div className='text-center'>
          <div className='w-[30vw] text-[45px] font-medium min-w-max w-full'>{name}</div>
          <p className='w-2/3 md:w-full m-auto text-gray-300'>Committed to safe, reliable, and professional transportation services tailored to your needs.</p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-end md:w-[50vw] md:gap-10 lg:gap-30 gap-3 justify-center'> 
            
            <div className='flex flex-col md:text-[27px] text-[20px] font-semibold text-center text-white'>
                Navigations
                <Link href='/en/home' className='text-yellow-1000 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 text-gray-300'>Home</Link>   
                <Link href='/en/pickup' className='text-yellow-1000 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 text-gray-300'>Pickup</Link>        
                <Link href='/en/terms' className='text-yellow-1000 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 text-gray-300'>Terms of Use</Link> 
            </div>

            <div className="flex flex-col md:text-[27px] text-[20px] font-semibold text-center">
            Contact Us
            <a
              href="mailto:info@quickpickups.es"
              className="text-gray-300 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 transition-all duration-200"
            >
              info@quickpickups.es
            </a>
          </div>

          </div>
        </div>

      <div className="border-t border-gray-800 mt-10 mx-5 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2025 ALL RIGHTS RESERVED</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/en/terms">TERMS OF USE</a>
        </div>
      </div>
    </footer>
  );
}
