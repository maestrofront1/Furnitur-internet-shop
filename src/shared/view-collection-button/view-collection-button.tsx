interface ViewCollectionButtonProps {
	styles: { backgroundColor: string; color: string; background: string }
}

export const ViewCollectionButton = ({ styles }: ViewCollectionButtonProps) => {
	return (
		<button
			type='button'
			className='h-[56px] w-[170px] hover:opacity-30'
			style={{
				backgroundColor: styles.backgroundColor,
				color: styles.color,
				background: styles.background,
			}}
		>
			View collection
		</button>
	)
}
