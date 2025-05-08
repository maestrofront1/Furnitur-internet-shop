interface SignUpButtonProps {
	styles: { backgroundColor: string; color: string; background: string }
}

export const SignUpButton = ({ styles }: SignUpButtonProps) => {
	return (
		<button
			type='button'
			className='h-[56px] bg-[#2A254B] pt-[17px] pr-[32px] pb-[17px] pl-[32px] text-stone-50'
			style={{ backgroundColor: styles.backgroundColor, color: styles.color, background: styles.background }}
		>
			Sign up
		</button>
	)
}
