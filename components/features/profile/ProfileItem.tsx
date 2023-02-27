type Props = {
    title: string
    content: string
}

export const ProfileItem: React.FC<Props> = ({ title, content }): JSX.Element => (
    <div className='w-full flex flex-col md:flex-row md:items-center py-2 md:py-3 gap-1'>
        <div className='font-semibold w-[180px]'>
            {title}
        </div>
        <div className='flex-1'>
            {content || 'No Content'}
        </div>
    </div>
)