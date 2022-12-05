function Spinner() {
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-5000 flex justify-center items-center'>
      <div className='loadingSpinner border-transparent border-solid border-8 h-16 w-16'></div>
    </div>
  );
}

export default Spinner;


