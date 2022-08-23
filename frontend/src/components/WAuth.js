import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


// HOC
const wAuth = Page => {

    return (props) => {

        const navigate = useNavigate();
        const token = localStorage.getItem('token')


        useEffect(()=>{

            if( !token ){
              navigate('/')
            }
      },[])

        return <Page {...props}></Page>
    }
}


export default wAuth