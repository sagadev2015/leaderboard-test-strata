import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addFavouriteUser, IFavouriteState, removeFavouriteUser } from '../../../store/favourite'
import { ProfileItem } from './ProfileItem'
import { BsArrowReturnLeft } from 'react-icons/bs'
import Link from 'next/link'

type Props = {
    profileData: ProfileData | null
}

type ProfileInfoItemType = {
    title: string // title of item
    data: string // data key of content of item  from profileData
}

export const ProfileComponent: React.FC<Props> = ({ profileData }): JSX.Element => {
    const { favouriteUsers }: IFavouriteState = useAppSelector(state => state.favourite)
    const dispatch = useAppDispatch()

    const updateFavouriteState = () => {
        if (profileData) {
            if (favouriteUsers.includes(profileData.username)) {
                dispatch(removeFavouriteUser(profileData.username))
            } else {
                dispatch(addFavouriteUser(profileData.username))
            }
        }
    }

    if (!profileData)
        return <div>No Data</div>

    const ProfileInfoItems: ProfileInfoItemType[] = [
        { title: 'Name', data: profileData.username },
        { title: 'Birthday', data: profileData.birthday },
        { title: 'Age', data: `${profileData.age}` },
        { title: 'Biography', data: profileData.bio },
        { title: 'Email Address', data: profileData.email },
        { title: 'Twitter Address', data: profileData.twitter },
    ]

    return <div className="w-full md:w-[700px] flex flex-col rounded-sm px-4 md:px-8 pt-4">
        <div className='flex w-full items-center justify-between border-b border-gray-200 pb-7'>
            <div className='relative'>
                <Image src={`/users/${profileData.username}.png`}
                    width={100}
                    alt={`${profileData.username}-image`}
                    height={100}
                    className="rounded-md"
                />
                <div onClick={updateFavouriteState} className='absolute top-[-8px] right-[-18px] cursor-pointer text-3xl text-yellow-400 space-y-3 border border-gray-300 rounded-full bg-amber-50 bg-opacity-95'>
                    {
                        favouriteUsers.includes(profileData.username) ? <AiFillStar /> : <AiOutlineStar />
                    }
                </div>
            </div>
            <div className="text-xl rounded-full  border p-3 border-gray-300 cursor-pointer hover:bg-gray-100">
                <Link href={`/leaderboard`}>
                    <BsArrowReturnLeft />
                </Link>
            </div>
        </div>
        {
            ProfileInfoItems.map((item, index) => <ProfileItem key={`profile-item-${index}`} title={item.title} content={item.data} />)
        }
    </div>
}