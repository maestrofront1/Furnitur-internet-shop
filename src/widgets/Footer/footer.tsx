const MenuOptions = ['New arrivals', 'Best sellers', 'Recently viewed', 'Popular this week', 'All products']
const CategoriesOptions = ['Crockery', 'Furniture', 'Homeware', 'Plant pots', 'Chairs', 'Crockery']
const OurCompanyOptions = ['About us', 'Vacancies', 'Contact us', 'Privacy', 'Returns policy']

export const Footer = () => {
	return (
		<div className='bg-[#2A254B] pt-[58px] pl-[82px] text-stone-50'>
			<div className='flex gap-[109px]'>
				<div>
					<h1>Menu</h1>
					{MenuOptions.map((el) => (
						<li
							className='list-none'
							key={JSON.stringify(el)}
						>
							<button
								type='button'
								className='pt-[12px]'
							>
								{el}
							</button>
						</li>
					))}
				</div>
				<div>
					<h1>Categories</h1>
					{CategoriesOptions.map((el) => (
						<li
							className='list-none'
							key={JSON.stringify(el)}
						>
							<button
								type='button'
								className='pt-[12px]'
							>
								{el}
							</button>
						</li>
					))}
				</div>
				<div>
					<h1>Our company</h1>
					{OurCompanyOptions.map((el) => (
						<li
							className='list-none'
							key={JSON.stringify(el)}
						>
							<button
								type='button'
								className='pt-[12px]'
							>
								{el}
							</button>
						</li>
					))}
				</div>
			</div>
		</div>
	)
}
