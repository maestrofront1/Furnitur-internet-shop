import HeroImage from '../../assets/Hero_Blocks.jpg'
import { LogicModuleOfBenefitsOfCompany } from '../../components/BenefitsOfCompany/logicModuleOfBenefitsOfCompany'
import { CartItem } from '../../components/CartItem'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const Home = () => {
	return (
		<div className='m-auto w-[1440px]'>
			<Header />
			<div className='static mb-[80px] '>
				<img
					className='w-[100%] '
					src={HeroImage}
					alt={''}
				/>
				<div className='absolute bottom-[240px] left-[970px] h-[444px] w-[630px] bg-white p-14'>
					<div className='mb-[157px]'>
						<h1 className='pb-[20px] text-[32px]'>Luxury homeware for people who love timeless design quality</h1>
						<span className=' text-[18px]'>Shop the new Spring 2022 collection today</span>
					</div>
					<button
						type='button'
						className=' h-[56px] w-[170px] bg-[#F9F9F9]'
					>
						View collection
					</button>
				</div>
			</div>
			<div className=''>
				<LogicModuleOfBenefitsOfCompany />
				<CartItem />
				<Footer />
			</div>
			<Footer />
		</div>
	)
}
