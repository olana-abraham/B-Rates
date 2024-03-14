// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import supabase from "../config/supabaseClient"

const Search = () => {
    const [username, setusername]  = useState('')
    const[otherUser, setotherUser] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!username)
        {
            alert("Enter a username to search for a user's profile")
            return
        }
        fetchUser()
    }
    const fetchUser = async (e) => {
        const {data, error} = await supabase
            .from('Users')
            .select()
            .eq('username', username)
        if(error)
        {
            alert("Could not fetch user's profile")
        }
        if(!data)
        {
            alert("User does not exist")
        }
        if(data)
        {
            setotherUser(data)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
      <label htmlFor="user">Review:</label>
        <textarea
          id="User"
          value = {username}
          onChange={(e) => setusername(e.target.value)}
          rows={5}
          cols={20}
        />
        {otherUser && (
  <div>
  {otherUser.map((info) => (
    <textarea
      value={`${info.Name}}`}
      // Add created_at if needed
      rows={3} // Set the number of rows as per your requirement
      cols={35} // Set the number of columns as per your requirement
      readOnly // Make the textarea read-only
    />
  ))}
</div>
)}
            
//         </form>
//     )
// }