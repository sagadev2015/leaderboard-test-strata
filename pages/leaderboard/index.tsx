import { NextPage } from "next";
import { useEffect, useState } from "react";

import { LeaderBoardItem } from "../../components/features/leaderboard/leaderboardItem";
import { useAppSelector } from "../../hooks/redux";
import { useFetch } from "../../hooks/useFetch";
import { IFavouriteState } from "../../store/favourite";

const Leaderboard: NextPage = (): JSX.Element => {
  const { result, isLoading } = useFetch('/api/leaderboard', 20000)
  const [leaderboardData, setLeaderboardData] = useState<UserDetails[]>([])
  const { favouriteUsers }: IFavouriteState = useAppSelector(state => state.favourite)

  useEffect(() => {
    if (result) {
      if (Array.isArray(result.leaderboard)) {
        const _leaderboardArray = result.leaderboard as UserDetails[]
        setLeaderboardData(_leaderboardArray.sort((a, b) => b.score - a.score))

        if (favouriteUsers.length === 0) {
          // set initial favourte state from api with setInitialState()
        }
      }
    }
  }, [result])

  return <div className="w-full flex flex-col mt-4 items-center justify-center gap-5">
    {
      isLoading ?
        <div className='text-md text-center'>Loading...</div> :
        <div className="w-full md:w-[700px] flex flex-col  px-2 md:px-8 pt-1 gap-1">
          {
            leaderboardData.map((user: UserDetails, index: number) =>
              <LeaderBoardItem ranking={index+1} isFavourite={favouriteUsers.includes(user.username)} key={`leaderboard-item-${index}`} user={user} />)
          }
        </div>
    }
  </div>
}

export default Leaderboard