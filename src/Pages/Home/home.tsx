import HeroImage from '../../assets/Hero_Blocks.jpg'
import ImageBlock from '../../assets/ImageBlock.jpg'
import { BenefitsOfCompany } from '../../components/BenefitsOfCompany'
// import { ProductItem } from '../../components/CartItem'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { SignUpBlock } from '../../components/SignupBlock'

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

			<div className='mr-[80px] ml-[80px]'>
				<BenefitsOfCompany />
				{/*<ProductItem />*/}

				<div className=' mb-[60px] flex gap-[16px]'>
					<div className='w-[634px] bg-[#2A254B]'>
						<div className=' pt-[64px] pr-[75px] pb-[205px] pl-[65px]'>
							<h1 className='pb-[12px] text-[32px] text-stone-50'>It started with a small idea</h1>
							<p className='text-left text-[18px] text-stone-50'>
								A global brand with local beginnings, our story began in a small studio in South London in early 2014
							</p>
						</div>
						<button
							type='button'
							className='ml-[65px] bg-[#4E4D93] p-[16px] text-stone-50'
						>
							View collection
						</button>
					</div>
					<div className=''>
						<img
							alt={''}
							src={ImageBlock}
						/>
					</div>
				</div>
			</div>
			<SignUpBlock />
			<Footer />
		</div>
	)
}
