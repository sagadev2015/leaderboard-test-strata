import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { CgEye } from 'react-icons/cg'
import { useAppDispatch } from '../../../hooks/redux'
import { addFavouriteUser, removeFavouriteUser } from '../../../store/favourite'
import { GiRank3, GiRank2, GiRank1 } from "react-icons/gi"

type Props = {
    user: UserDetails
    isFavourite: boolean
    ranking: number
}

export const LeaderBoardItem: React.FC<Props> = ({ user, isFavourite, ranking }): JSX.Element => {
    const dispatch = useAppDispatch()

    const updateFavouriteState = () => {
        if (isFavourite) {
            dispatch(removeFavouriteUser(user.username))
        } else {
            dispatch(addFavouriteUser(user.username))
        }
    }

    const getRankingIcon = () => {
        switch (ranking) {
            case 1: return <GiRank3 className='text-yellow-600' />
            case 2: return <GiRank2 className='text-slate-500' />
            case 3: return <GiRank1 className='text-yellow-700' />
            default: return null
        }
    }

    return <div className={'w-full items-center flex justify-between gap-3 px-4 py-3 '} >
        <Image src={user.profileImage}
            width={70}
            alt={user.username}
            height={70}
            className="rounded-full"
        />
        <div className='flex flex-col flex-1 gap-2'>
            <div className="text-md font-semibold ">
                {user.username}
            </div>
            <div onClick={updateFavouriteState} className='cursor-pointer text-xl text-yellow-500'>
                {
                    isFavourite ? <AiFillStar /> : <AiOutlineStar />
                }
            </div>
        </div>

        <div className="text-md flex-1 flex items-center gap-1">

            <span>
                {user.score}
            </span>
            <div>
                {
                    getRankingIcon()
                }

            </div>
        </div>


        <Link href={`/profile/${user.username}`} >
            <CgEye className='text-xl text-gray-700 hover:text-gray-900' />
        </Link>
    </div>
}