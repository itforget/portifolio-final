import Image from 'next/image';
import IconInstagram from '/public/images/instagram.png';
import IconGithub from '/public/images/github.png';
import IconLinkedin from '/public/images/linkedin.png';
import Computer from '/public/images/computer.png';
import React, { useState } from 'react';
import Nav from './components/Nav'
import SlidingPage from './components/SlidingPage';

export default function Sobre() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);

  const texto1 = [
    "Olá,",<br/>, "Meu nome é ", <span className='text-[#6655a1] underline'>Ítalo Cordeiro</span>,
   <br/>, "Sou um ", <span className='text-[#6655a1] underline'>Futuro</span>, " Desenvolvedor", <br/>,
    "Morando em ",<span className='text-[#6655a1] underline'>Brasilia, Brasil.</span> ]

  const texto2 = [
    "Hello,", <br/>, "My name is ",  <span className='text-[#6655a1] underline'>Ítalo Cordeiro</span>,
     <br/>, "I`m a " , <span className='text-[#6655a1] underline'>Future</span>, " Developer", <br/>,
      "Based in ",<span className='text-[#6655a1] underline'>Brasilia, Brazil.</span>]

  
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <SlidingPage transition='scale'>
    <div>
      <Nav toggleTexto={alternarTexto}/>
      <div className="flex flex-col flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 mx-16 p-5 rounded-[120px] md:my-0 md:mx-0 md:mt-2 animate-fade-up animate-once">
        <Image className='w-[50px] animate-bounce'alt='imagem'  priority={false} src={Computer} />
        <h1 className=' text-[#96a7a4] text-[90px]  md:text-3xl md:tracking-wide md:leading-[80px] md:text-center animate-fade-up animate-once animate-duration-[3000ms] animate-delay-300'>
        {mostrarPrimeiroTexto ? texto1 : texto2}
        </h1>
        <div className='flex flex-row gap-8 ml-20 md:justify-center md:place-content-center md:ml-0 animate-fade-up animate-once animate-duration-[3000ms] animate-delay-300'>
          <a href='https://www.instagram.com/_italocds/' target='_blank'>
            <Image className='w-[70px]  md:w-10 mt-4 hover:animate-shake animate-alternate' alt='imagem' priority={true} src={IconInstagram} />
          </a>
          <a href='https://github.com/itforget'target='_blank'>
            <Image className='w-[70px]  md:w-10 mt-4 hover:animate-shake animate-alternate' alt='imagem' priority={true} src={IconGithub} />
          </a>
          <a href='https://www.linkedin.com/in/%C3%ADtalo-cordeiro-238a4a21a/' target='_blank'>
            <Image className='w-[70px] md:w-10 mt-4 hover:animate-shake animate-alternate'alt='imagem'  priority={true} src={IconLinkedin} />
          </a>
        </div>
      </div>
    </div>
    </SlidingPage>
  );
}
