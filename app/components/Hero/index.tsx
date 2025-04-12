import React from 'react';

export function Hero() {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className="flex flex-col justify-between items-center py-4 px-2 lg:px-0 container">
                <div className='flex justify-center items-center flex-col gap-2 p-4 bg-linear-to-r from-30% from-orange-500 to-red-600 rounded-2xl w-full'>
                    <span className='text-xs bg-yellow-400 rounded-2xl px-3'>
                        Não perca
                    </span>
                    <span className='text-white font-bold text-xl lg:text-2xl'>
                        🔥 AS MAIORES PROMOÇÕES DO BRASIL 🔥
                    </span>
                </div>
            </div>
        </div >
    );
}
