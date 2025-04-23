import { CiCreditCard2 } from 'react-icons/ci'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { LuSprout } from 'react-icons/lu'
import { TbTruckDelivery } from 'react-icons/tb'

const dataCards = [
	{
		image: <TbTruckDelivery />,
		header: 'Next day as standard',
		description: 'Order before 3pm and get your order the next day as standard',
	},
	{
		image: <IoCheckmarkDoneCircleOutline />,
		header: 'Made by true artisans',
		description: 'Handmade crafted goods made with real passion and craftsmanship',
	},
	{
		image: <CiCreditCard2 />,
		header: 'Unbeatable prices',
		description: 'For our materials and quality you won’t find better prices anywhere',
	},
	{
		image: <LuSprout />,
		header: 'Recycled packaging',
		description: 'We use 100% recycled to ensure our footprint is more manageable',
	},
]

export const BenefitsOfCompany = () => {
	return (
		<div className=' mb-[100px] '>
			<h3 className='m-auto w-[366px] pb-[36px] text-[24px]'>What makes our brand different</h3>
			<div className='flex gap-[18px] '>
				{dataCards.map((el) => (
					<div
						className='h-[244px] w-[305px] bg-[#bbbb] p-[48px] '
						key={JSON.stringify(el)}
					>
						<div className='h-[24px] w-[24px] pb-[12px]'>{el.image}</div>
						<h4 className='pb-[12px] text-[20px]'>{el.header}</h4>
						<p className='text-[16px]'>{el.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
