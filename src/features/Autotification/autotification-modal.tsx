import { useForm } from 'react-hook-form'
// @ts-ignore
export const AuthenticationModal = ({ isOpen, onClose }) => {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data: any) => console.log(data)

	if (!isOpen) {
		return null
	}

	return (
		<div
			className='absolute top-50 right-0 left-0 z-20 m-auto h-[450px] w-[300px] rounded-2xl bg-stone-300'
			onClick={() => onClose}
			onKeyDown={(e) => e.stopPropagation()}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col items-center justify-center'>
					<div className=' pt-35'>
						<label>Ведите свой никнейм</label>
						<input
							{...register('name', { required: true })}
							className='mb-2.5 ml-2.5 w-70 rounded-md bg-stone-50'
						/>
						<label>Ведите свою почту</label>
						<input
							{...register('email', { required: true })}
							className='mb-2.5 ml-2.5 w-70 rounded-md bg-stone-50'
						/>
						<label>Ведите свой пароль</label>
						<input
							{...register('password', { required: true })}
							className='mb-2.5 ml-2.5 w-70 rounded-md bg-stone-50'
						/>
						<label>Повторите свой пароль</label>
						<input
							{...register('password_confirmation', { required: true })}
							className='mb-2.5 ml-2.5 w-70 rounded-md bg-stone-50'
						/>
					</div>
					<input type='submit' />
				</div>
			</form>
		</div>
	)
}
