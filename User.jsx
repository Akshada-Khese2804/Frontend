import { useParams } from "react-router-dom"
function User() {
  let {uid} = useParams()
    return (
      <div className="bg-gray-500 text-white text-3xl p-4 text-center">User 🚗 {uid}</div>
    )
  }
  
  export default User