const Footer=()=>{
    return(
        <footer className='py-6 md:px-8 mdpy-0 bg-black text-white border-t border-gray-800'>
           <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
            <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                Built by{" "}
                <a href="https://www.instagram.com/mudgil_boy_96/"
                target="_blank"
                className='font-medium underline underline-offset-4'>Rachit Mudgil</a>
            </p>
            </div> 

        </footer>
    )
}
export default Footer