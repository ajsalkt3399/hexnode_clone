import React from 'react'
import Button from '../Buttons/Button'

function GetHexnodesSection() {
    return (

        <section class="bg-[#020a19] flex justify-center items-center md:h-[330px]  py-[50px] md:py-0">
            <div class="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"></div>
            <div class="w-[88%] mx-auto md:max-w-[1300px]">
                <div class="w-full text-center max-w-[1000px] mx-auto">
                    <h3 class="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">Get Hexnode UEM and start securing your endpoints</h3>
                </div>
                <div class="w-full  flex justify-center">
                    <Button label="TRY HEXNODE FOR FREE" customStyle="bg-[#DD0735] w-[350px] max-w-[90%] hover:bg-[#AA232F] flex items-center justify-center py-[15px] transition-all duration-300 ease-out rounded-[3px]" />
                </div>

            </div>
        </section>

    )
}

export default GetHexnodesSection
