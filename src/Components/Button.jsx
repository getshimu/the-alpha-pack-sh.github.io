import React from 'react';

export default function Button({
    type = 'submit',
    className = '',
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-5 py-4 bg-gray-900 border border-gray-400 rounded-md text-xs text-gray-300 text-[20px] tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}