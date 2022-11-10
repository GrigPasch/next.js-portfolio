import React from 'react'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#60c2a9]'>
            Skills
          </p>
          <h2 className='py-4'>Technologies I know</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='p-6 shadow-md shadow-[#E44D26] rounded-full hover:scale-105 ease-in duration-400 bg-gradient-to-r from-[#E44D26] to-[#F16529] hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/html.webp"
                      src="/assets/skills/html.webp"
                      alt = "HTML logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    HTML
                  </h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-md shadow-[#2965f1] rounded-full hover:scale-105 ease-in duration-400 bg-gradient-to-r from-[#264de4] via-[#2965f1] to-[#264de4] hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/css.webp"
                      src="/assets/skills/css.webp"
                      alt = "CSS logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    CSS
                  </h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-md shadow-[#f0db4f] rounded-full hover:scale-105 ease-in duration-400 bg-[#f0db4f] hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/javascript.webp"
                      src="/assets/skills/javascript.webp"
                      alt = "Javascript logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    Javascript
                  </h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-md shadow-[#68a063] rounded-full hover:scale-105 ease-in duration-400 bg-gradient-to-r from-[#3c873a] via-[#68a063] to-[#3c873a] hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/node.webp"
                      src="/assets/skills/node.webp"
                      alt = "Node logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    Node.js
                  </h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-md shadow-[#61DBFB] rounded-full hover:scale-105 ease-in duration-400 bg-[#61DBFB] hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/react.webp"
                      src="/assets/skills/react.webp"
                      alt = "React logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    React
                  </h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-md shadow-teal-600 rounded-full hover:scale-105 ease-in duration-400 bg-teal-600 hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/tailwind.webp"
                      src="/assets/skills/tailwind.webp"
                      alt = "Tailwind logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    Tailwind
                  </h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-md shadow-[#292626] rounded-full hover:scale-105 ease-in duration-400 bg-[#292626] hover:text-[#892ba5] text-[#fff]'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <picture>
                    <source type="image/webp" />
                    <img 
                      srcSet="/assets/skills/github.webp"
                      src="/assets/skills/github.webp"
                      alt = "Github logo"
                      width={64}
                      height={64} 
                    />
                  </picture>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                    Github                  
                  </h3>
                </div>
              </div>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Skills