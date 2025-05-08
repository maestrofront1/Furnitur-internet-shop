import HeroImage from '/Hero_Blocks.jpg'
import ImageBlock from '/ImageBlock.jpg'
import { SignUpBlock } from '../../features/SignupBlock'
import { ViewCollectionButton } from '../../shared/view-collection-button/view-collection-button'
import { BenefitsOfCompany } from '../../widgets/BenefitsOfCompany'
// import { ProductItem } from '../../components/CartItem'
import { Footer } from '../../widgets/Footer'
import { Header } from '../../widgets/Header'

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
					<ViewCollectionButton
						styles={{
							backgroundColor: '#F9F9F9',
							color: 'black',
							background: 'white',
						}}
					/>
				</div>
			</div>

			<div className='mr-[80px] ml-[80px]'>
				<BenefitsOfCompany />
				{/*<ProductItem />*/}

				<div className=' mb-[60px] flex gap-[16px]'>
					<div className='w-[634px] bg-[#2A254B] pt-[64px] pr-[75px] pl-[65px]'>
						<div className=' pb-[205px] '>
							<h1 className='pb-[12px] text-[32px] text-stone-50'>It started with a small idea</h1>
							<p className='text-left text-[18px] text-stone-50'>
								A global brand with local beginnings, our story began in a small studio in South London in early 2014
							</p>
						</div>
						<ViewCollectionButton
							styles={{
								backgroundColor: '#4E4D93',
								color: 'white',
								background: '',
							}}
						/>
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
