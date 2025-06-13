import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod/v4'

interface IModalProps {
	isOpen: boolean
	onClose: () => void
}

const schema = z

	.object({
		name: z.string().min(1, { message: 'Имя слишком короткое' }),
		email: z.email('Неправильный адрес почты'),
		password: z.string().min(6, { message: 'Пароль должен быть не менее 6' + ' символов' }),
		password_confirmation: z
			.string()
			.min(6, { message: 'Пароль должен быть не менее 6' + ' символов' })
			.max(255),
	})
	.refine((data) => data.password === data.password_confirmation, {
		path: ['password_confirmation'],
		message: 'Пароли не совпадают',
	})

type FormFields = z.infer<typeof schema>

export const AuthenticationModal = ({ isOpen, onClose }: IModalProps) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({ resolver: zodResolver(schema) })

	const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log(data)
		} catch {
			setError('root', {
				message: 'Эта почта уже используется',
			})
		}
	}

	if (!isOpen) {
		return null
	}

	return (
		<div
			className='absolute top-50 right-0 left-0 z-20 m-auto h-[490px] w-[300px] rounded-2xl bg-stone-300'
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
								{...register('name')}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.name && <p className='text-red-400'>{errors.name.message}</p>}
						</div>
						<div className='flex flex-col justify-start pl-2'>
							<label>Введите свою почту</label>
							<input
								{...register('email')}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.email && <p className='text-red-400'>{errors.email.message}</p>}
						</div>
						<div className='flex flex-col justify-start pl-2'>
							<label>Введите свой пароль</label>
							<input
								{...register('password')}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.password && <p className='text-red-400'>{errors.password.message}</p>}
						</div>
						<div className='flex flex-col justify-start pl-2'>
							<label>Повторите свой пароль</label>
							<input
								{...register('password_confirmation')}
								aria-invalid={!!errors.password_confirmation}
								className='mb-2.5 w-70 rounded-md bg-stone-50'
							/>
							{errors?.password_confirmation && <p className='text-red-400'>{errors.password_confirmation.message}</p>}
						</div>
					</div>
					<button
						className='pt-5'
						type='submit'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Загрузка' : 'Зарегистрироваться'}
					</button>
				</div>
			</form>
		</div>
	)
}
