import Plan from '@/components/common/plan'

export default function treatmentplan() {
  return (
    <div className='m'>
        <p className='underline text-(--darkblue) text-5xl text-center mt-15'>Treatment Plans</p>
        <div className='flex flex-wrap justify-between mx-25'>

        <Plan heading='General Consultation' points={['Initial assessment', 'Medical history review', 'Vital signs check', 'Follow-up recommendations']} price='$20.00' />

        <Plan heading='Diabetes Management' points={['Blood sugar monitoring', 'Dietary guidelines', 'Medication adjustment', 'Monthly review']} price='$45.00' />

        <Plan heading='Hypertension Treatment' points={['Blood pressure evaluation', 'Lifestyle modification plan', 'Medication optimization', 'Weekly tracking']} price='$35.00' />

        <Plan heading='Physiotherapy Session' points={['Muscle assessment', 'Range-of-motion exercises', 'Pain relief therapy', 'Home exercise plan']} price='$30.00' />

        </div>

    </div>
  )
}
