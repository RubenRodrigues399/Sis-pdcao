const logo= '/assets/img/2.png'

export default function NavBar() {
    return (
        <nav className='w-full h-16 flex sm:px-6 lg:px-8 items-center bg-[#21aeb8] border-b-2 border-blue-300 justify-around'>
            <div className='w-52 p-2 h-full flex items-center justify-center'>
                <a href="/" className='text-black flex items-center p-1'>Health First</a>
                <img src={logo} className='w-9' />
            </div>
            <div className='w-3/4 h-full flex items-center justify-end gap-4'>
                <a href="/login" className='text-black hover:text-white px-4'>Login</a> 

                <a href="/registro" className='text-black hover:text-white px-4 mr-10'>Registrar-se</a>
            </div>
        </nav>
    );
}