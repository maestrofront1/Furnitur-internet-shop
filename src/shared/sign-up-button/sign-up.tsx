import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod/v4'

interface SignUpButtonProps {
	styles: { backgroundColor: string; color: string; background: string; width: string }
}

const signUpValidation = z.object({
	email: z.email(),
})

type InputField = z.infer<typeof signUpValidation>

export const SignUp = ({ styles }: SignUpButtonProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputField>({
		resolver: zodResolver(signUpValidation),
	})

	const onSubmit: SubmitHandler<InputField> = (data: InputField) => {
		console.log(data)
	}

	return (
		<div className=''>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('email')}
					className='h-[56px] w-[354px] bg-stone-50 pt-[17px] pb-[17px] pl-[32px] opacity-100 outline-none'
					placeholder='your@email.com'
					type='email'
					style={{
						background: styles.background,
						width: styles.width,
					}}
				/>
				{errors.email && <p className='text-red-400'>{errors.email.message}</p>}
				<button
					type='submit'
					className='h-[56px] bg-[#2A254B] pt-[17px] pr-[32px] pb-[17px] pl-[32px] text-stone-50'
					style={{
						backgroundColor: styles.backgroundColor,
						color: styles.color,
					}}
				>
					Sign up
				</button>
			</form>
		</div>
	)
}
