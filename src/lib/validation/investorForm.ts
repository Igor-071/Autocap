import { z } from 'zod'

export const investorFormSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  organization: z.string().min(1, 'Please enter your organization or fund name'),
  role: z.string().min(1, 'Please enter your role or title'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Please enter your phone number'),
  message: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to data processing to submit this form',
  }),
})

export type InvestorFormData = z.infer<typeof investorFormSchema>
