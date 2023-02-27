import { NextPage } from "next";
import { useRouter } from "next/router";

import { ProfileComponent } from "../../components/features/profile";
import { useFetch } from "../../hooks/useFetch";

const Profile: NextPage = (): JSX.Element => {

  const router = useRouter();
  const username = router.query.username as string;

  const { result: profileData, isLoading } = useFetch(`/api/profile/${username}`)

  return <div className="w-full mx-auto mt-4 flex flex-col items-center justify-center gap-3">
    {
      isLoading ? <div className='text-md text-center'> Loading...</div>
        : <ProfileComponent profileData={profileData} />
    }
  </div>
}

export default Profile