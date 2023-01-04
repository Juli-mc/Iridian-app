import React from 'react';

const Footer = () => {
    return (
        <footer className="flex-grow foot p-8 bg-black shadow md:flex md:items-center md:justify-between md:p-8 dark:bg-gray-800">
    <span className="text-2xl text-gray-500 sm:text-center dark:text-gray-400">© 2022 Julián Marin Córdoba. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center gap-8 mt-3 text-4xl text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <b href="https://instagram.com/juli.marinc/" className="mr-4 hover:underline md:mr-6 "><i class="fa-brands fa-instagram" style={{cursor: "pointer"}}></i></b>
        </li>
        <li>
            <c href="https://github.com/Juli-mc" className="c mr-4 hover:underline md:mr-6"><i class="fa-brands fa-github" style={{cursor: "pointer", }}></i></c>
        </li>
        <li>
            <d href="mailto:julianmarincordoba19@gmail.com" className="d mr-4 hover:underline md:mr-6"><i class="fa-solid fa-envelope" style={{cursor: "pointer"}}></i></d>
        </li>
    </ul>
</footer>
    );
};

export default Footer;