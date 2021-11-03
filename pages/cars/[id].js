import { useRouter } from "next/dist/client/router"

const Car = () => {

    const router = useRouter()
    const { id } = router.query

    return <h1>I will own a {id}.</h1>

}

export default Car