import petHaven from '../../assets/home/dog1.jpg'
const PetHaven = () => {
      return (
            <div>
                  <div className='mb-24 relative'> 
                        <img className='h-[300px] w-full mx-auto object-cover' src={petHaven} alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/65 bg-opacity-80 p-14 w-5xl text-center space-y-4'>
                              <h1 className='text-4xl text-center font-semibold uppercase'>PetHaven</h1>
                              <p className='text-xl text-base-400 max-w-4xl text-center mask-x-to-accent m-8 rounded-2xl shadow-lg'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos accusantium adipisci quia pariatur est voluptatem, aliquam aliquid asperiores consequuntur dolore obcaecati earum. Illum nulla quibusdam earum, ipsam voluptas placeat?
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default PetHaven;