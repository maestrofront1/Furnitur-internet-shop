import { CiCircleCheck } from 'react-icons/ci'

const options = ['Exclusive offers', 'Free events', 'Large discounts']

export const SignUpBlock = () => {
	return (
		<div className=" bg-[url('/public/SignupBack.jpg')] ">
			<div className='pt-[90px] pr-[473px] pl-[473px]'>
				<h1 className='pb-[12px] text-[32px] text-stone-50'>Join the club and get the benefits</h1>
				<p className='pb-[54px] text-center text-[18px] text-stone-50'>
					Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
				</p>

				<div className='flex gap-[36px]'>
					{options.map((el) => (
						<div
							key={JSON.stringify(el)}
							className='flex items-center gap-[4px] text-stone-50'
						>
							<CiCircleCheck className='' />
							<span className=' text-[16px]'>{el}</span>
						</div>
					))}
				</div>
				<div className='mt-[40px] flex items-center pb-[36px]'>
					<input
						className='h-[56px] w-[354px] bg-stone-50 pr-[205px] text-center'
						placeholder='your@email.com'
						type='text'
					/>
					<button
						type='button'
						className='h-[56px] bg-[#2A254B] pt-[17px] pr-[32px] pb-[17px] pl-[32px] text-stone-50'
					>
						Sign up
					</button>
				</div>
			</div>
		</div>
	)
}
