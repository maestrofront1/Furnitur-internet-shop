import { CiCircleCheck } from 'react-icons/ci'
import { SignUp } from '../../shared/sign-up-button'

const options = ['Exclusive offers', 'Free events', 'Large discounts']

export const SignUpBlock = () => {
	return (
		<div className=" bg-[url('/SignupBack.jpg')] ">
			<div className='pt-[90px] pr-[473px] pl-[473px]'>
				<div className=' text-center'>
					<h1 className='pb-[12px] text-[32px] text-stone-50'>Join the club and get the benefits</h1>
					<p className='pb-[54px] text-center text-[18px] text-stone-50'>
						Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
					</p>

					<div className='flex items-center justify-center gap-[36px]'>
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
				</div>
				<div className='mt-[40px] flex pb-[36px]'>
					<SignUp
						styles={{
							backgroundColor: '',
							color: '',
							background: '',
							width: '',
						}}
					/>
				</div>
			</div>
		</div>
	)
}
