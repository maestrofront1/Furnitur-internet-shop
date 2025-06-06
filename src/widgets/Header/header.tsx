import { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { AuthenticationModal } from '../../features/Autotification'

export const Header = () => {
	const navBar = ['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery']

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='pr-[28px] pl-[28px]'>
			<div className='mt-[20px] mb-[20px] flex items-center justify-between '>
				<button type='button'>
					<IoIosSearch className='h-[16px] w-[16px]' />
				</button>

				<h1 className='text-[24px]'>Avion</h1>
				<div className='flex gap-[16px]'>
					<button type='button'>
						<IoCartOutline className='h-[16px] w-[16px]' />
					</button>
					<button
						type='button'
						onClick={() => setIsOpen(true)}
					>
						<FaRegCircleUser className='h-[16px] w-[16px]' />
					</button>
					<AuthenticationModal
						onClose={() => setIsOpen(true)}
						isOpen={isOpen}
					/>
				</div>
			</div>
			<hr className='h-[2px] w-[100%] border-[#EBE8F4]' />
			<nav className='mt-[20px] mb-[20px] flex items-center justify-center gap-[44px]'>
				{navBar.map((el) => (
					<button
						type='button'
						className='text-[#726E8D] text-[16px] hover:bg-gray-200 '
						key={JSON.stringify(el)}
					>
						{el}
					</button>
				))}
			</nav>
		</div>
	)
}
