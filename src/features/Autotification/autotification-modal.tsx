import { useForm } from 'react-hook-form'

interface IFormInput {
	name: string
	email: string
	password: string
	password_confirmation: string
}

interface IProps {
	isOpen: boolean
	onClose: () => void
}

export const AuthenticationModal = ({ isOpen, onClose }: IProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>()

	const onSubmit = (data: IFormInput) => console.log(data)

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
					<h1 className='pt-5'>Регистрация</h1>
					<div className=' pt-5'>
						<div className='flex flex-col justify-start pl-2'>
							<label>Введите свой никнейм</label>
							<input
								{...register('name', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.name?.type === 'required' && <p className='text-red-400'>Это поле пустое</p>}
							{errors?.name?.type === 'maxLength' && (
								<p className='text-red-400'>Имя не должно превышать 20 символов</p>
							)}
						</div>
						<div className='flex flex-col justify-start pl-2'>
							<label>Введите свою почту</label>
							<input
								{...register('email', { required: true })}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.email?.type === 'required' && <p className='text-red-400'>Это поле пустое</p>}
						</div>
						<div className='flex flex-col justify-start pl-2'>
							<label>Введите свой пароль</label>
							<input
								{...register('password', { required: true, minLength: 6, maxLength: 20 })}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.password?.type === 'required' && <p className='text-red-400'>Это поле пустое</p>}
							{errors?.password?.type === 'minLength' && (
								<p className='text-red-400'>Пароль должен быть не менее 6 символов</p>
							)}
							{errors?.password?.type === 'maxLength' && (
								<p className='text-red-400'>Пароль должен быть не более 20 символов</p>
							)}
						</div>
						<div className='flex flex-col justify-start pl-2'>
							<label>Повторите свой пароль</label>
							<input
								{...register('password_confirmation', { required: true })}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.password_confirmation?.type === 'required' && <p className='text-red-400'>Это поле пустое</p>}
						</div>
					</div>
					<button
						className='pt-5'
						type='submit'
					>
						Зарегистрироваться
					</button>
				</div>
			</form>
		</div>
	)
}
