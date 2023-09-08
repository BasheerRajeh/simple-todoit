import {format} from 'date-fns';

const Header = () => {
    return (
        <div className="p-10 text-white flex flex-wrap items-center justify-between bg-gradient-to-r from-pink-500 to-violet-700 overflow-hidden">
            <h1 className="text-5xl font-bold tracking-wider select-none">
                ToDo IT
            </h1>
            <p className='font-bold text-2xl'>{format(new Date(), 'dd MMM yyyy')}</p>
        </div>
    );
};

export default Header;
