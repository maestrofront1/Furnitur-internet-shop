interface SignUpButtonProps {
	styles: { backgroundColor: string; color: string; background: string; width: string }
}

export const SignUp = ({ styles }: SignUpButtonProps) => {
	return (
		<div className=''>
			<input
				className='h-[56px] w-[354px] bg-stone-50 pt-[17px] pb-[17px] pl-[32px] opacity-100 outline-none'
				placeholder='your@email.com'
				type='email'
				style={{
					background: styles.background,
					width: styles.width,
				}}
			/>
			<button
				type='button'
				className='h-[56px] bg-[#2A254B] pt-[17px] pr-[32px] pb-[17px] pl-[32px] text-stone-50'
				style={{
					backgroundColor: styles.backgroundColor,
					color: styles.color,
				}}
			>
				Sign up
			</button>
		</div>
	)
}
