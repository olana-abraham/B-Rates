import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

import Navbar from "../Navbar"

import './Reviews.css'
//import StarRate from "../pages/starRate.js"
import {FaStar} from "react-icons/fa"


const Reviews = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [Dining, setDining] = useState('')
  const [Review, setReview] = useState('')
  const [formError, setFormError] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const [reviews, setReviews] = useState(null)
  const [rating, setRating] = useState()
  const [UID, setUID] = useState('')
  //const [Name, setName] = useState('')
  const [otherUID, setotherUID] = useState('')
  const [ratingShown, setratingShown] = useState('')
  const [ordering, setOrdering] = useState(true)
  //const [otherUIDs, setotherUIDs] = useState('')

  //useEffect(() => {
  const fetchReviews = async () => {
    if(ratingShown =="-1" || ratingShown == '')
    {
    const { data, error } = await supabase
      .from('Reviews_v2')
      .select(
      )
      .eq('Dining', Dining)
     .order('created_at', { ascending: ordering });
      if (error) {
      setFetchError('Could not fetch the reviews')
      setReviews(null)
      console.log(error)
     }
      if (data) {
      setReviews(data)
      setFetchError("")
      }
    }
    else
    {
      const { data, error } = await supabase
      .from('Reviews_v2')
      .select(
      )
      .eq('Dining', Dining)
      .eq('rating', ratingShown)
      .order('created_at', { ascending: ordering });

      if (error) {
      setFetchError('Could not fetch the reviews')
      setReviews(null)
      console.log(error)
     }
      if (data) {
      setReviews(data)
      setFetchError("")
      }
    }

    
    // const id = data.map(reviews => reviews.UID);
    // setotherUIDs(id)
  }

  // const fixShit = async () => {
  //   otherUIDs.forEach(id => {
  //     setotherUID(id)
  //     fetchUser()

  //   })

  // }

  // const fetchUser  = async () => {

    
  //   const {data, error} = await supabase
  //     .from('Users')
  //     .select('Name')
  //     .eq('UID', otherUID)
    
  //     if(data)
  //     {
  //       setName(data)
  //     }
  // }
  // const fetchUser = async() => {
    

  // }
  //fetchReviews()
  //}, [])

  useEffect(() => {
    fetchReviews();
}, [Dining, ratingShown, ordering]);


  // useEffect(() => {
  //   if (otherUID) {
  //     fetchUser(); // Fetch user data when otherUID changes
  //   }
  // }, [otherUID]);

  const handleSelectChange = async (event) => {
    setDining(event.target.value)    
    //console.log(Dining)
    //fetchReviews()
  }
  const handleSelectChange2 = async (event) => {
    setratingShown(parseInt(event.target.value))    
    //console.log(Dining)
    //fetchReviews()
  }
  const handleSelectChange3 = async (event) => {
    if(event.target.value=="oldesttop")
    {
      setOrdering(true)    
    }
    else setOrdering(false)
    //console.log(Dining)
    //fetchReviews()
  }
  // async function fix(input)
  // {
  //   const {data, error} = await supabase
  //     .from('Users')
  //     .select('Name')
  //     .eq('UID', input)
    
  //   const name = data && data.length > 0 ? data[0].Name : '';
  //   return name;
    
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!Review || !Dining || !rating) {
      setFormError('Please fill in all the fields correctly.')
      return
    }
    //const { data: user } = await supabase.auth.getUser();
    
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user.id)
    
    setUID(user.id)
    //console.log(user.id)
    // const { data1, error1 } = await supabase
    //   .from('Users')
    //   .insert([{UID, rating, Dining, Review}])
    

    const { data, error } = await supabase
    .from('Users')
    .select('Name')
    .eq('UID', user.id);
  
    const Name = data && data.length > 0 ? data[0].Name : '';
      //console.log(UID+ " " + Name)
    if(true)
    {
      const { data, error } = await supabase
      .from('Reviews_v2')
      .insert([
          { 
              rating: rating,
              Dining: Dining,
              Review: Review,
              UID: user.id,
              Name: Name,
          }
      ]);
      if (error) {
        console.log(error)
        setFormError('Please fill in all the fields correctly.')
      }
      if (data) {
        //console.log(data)
        setFormError("")
       // navigate('/')
      }
      
    }
      //fetchReviews()
    //setDining(null)
    setRating('')
    setReview('')
    setFormError("")

    // const { data: user } = await supabase.auth.getUser();
    // const userID = user.id;
    // console.log(user.id)
    // setUID(userID)
      
    fetchReviews();
   // fetchUser();
  }

  return (
    
    <div className="page create">

      <Navbar />
       <select id="Foodspots" onChange={handleSelectChange} className="select-container">
          <option value=''>Select Dining</option>

          <option value="Epicuria">Epicuria</option>
          <option value="Feast">Feast</option>
          <option value="De Neve">De Neve</option>
          <option value="Bruin Cafe">Bruin Cafe</option>
          <option value="Bruin Plate">Bruin Plate</option>
          <option value="The Study">The Study</option>
          <option value="Cafe 1919">Cafe 1919</option>
          <option value="Epic at Ackerman">Epic at Ackerman</option>
        </select>

        <select id="Stars" onChange={handleSelectChange2} className="select-container">
          <option value="-1">All Ratings</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>

        <select id="Time" onChange={handleSelectChange3} className="select-container">
          {/* <option value="Time">Time</option> */}
          <option value="oldesttop">Oldest to Newest</option>
          <option value="newesttop">Newest to Oldest</option>
        </select>

      <form onSubmit={handleSubmit}>
      <label htmlFor="review">Review:</label>
        <textarea
          id="Review"
          value = {Review}
          onChange={(e) => setReview(e.target.value)}
          rows={5}
          cols={50}
        />
        {/* <label htmlFor="review">Review:</label>
        <input
          type="text"
          id="Review"
          value={Review}
          onChange={(e) => setReview(e.target.value)}
        /> */}

       

        <StarRate setParentRating={setRating} />
        {/* <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          
          //onChange={(e) => setRating(e.target.value)}
        /> */}

        <button className="blue-button" type="submit">Post Review</button>
        {/* <button onClick={() => { 
    setReview("");
    setDining("");
    setRating("")
}}>Submit Review</button> */}

        {formError && <p className="error">{formError}</p>}
      </form>
      
      {fetchError && (<p>{fetchError}</p>)}
      { reviews && (
  <div>
  {reviews.map((review, index) => (
    <textarea
      key={index}
      value={`${review.Name} ${review.created_at ? review.created_at.substring(0, 10) + ' ' + review.created_at.substring(11, 16) : ''} \nRating: ${review.rating || ''} \n${review.Review || ''}`}
      // Add created_at if needed
      rows={3} // Set the number of rows as per your requirement
      cols={35} // Set the number of columns as per your requirement
      readOnly // Make the textarea read-only
    />
  ))}
</div>
)}

     
      
      {/* <>
            <StarRate />
      </> */}

    </div>
  )
}


export default Reviews

function StarRate({ setParentRating }) {
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);
  const [hoverRating, setHoverRating] = useState(null)
  useEffect(() => {
    setParentRating(rating);
  }, [rating, setParentRating]);

  const handleRatingClick = (selectedRate) => {
    setRating(selectedRate);
  };

  const handleStarHover = (hoveredRate) => {
    setHoverRating(hoveredRate);
  };

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <label key={index} style={{ cursor: 'pointer', marginRight: '0px' }} onClick={() => handleRatingClick(currentRate)} onMouseEnter={() => handleStarHover(currentRate)} 
          onMouseLeave={() => setHoverRating(null)}>
            <input type="radio" name="rate" value={currentRate} style={{ display: 'none' }} />
            <FaStar
              key={index}
              size={30}
              color={currentRate <= (hoverRating || rating) ? 'coral' : 'rgb(145, 100, 62)'}
            />
          </label>
        );
      })}
    </>
  );
}
// function StarRate({setParentRating}) {
//   const [rating, setRating] = useState(null)
//   const [rateColor, setColor] = useState(null)
//   useEffect(() => { 
//     setParentRating(rating);
//   }, [rating, setParentRating]);
//   return (
//       <>
//           {[...Array(5)].map((star, index) => {
//               const currentRate = index + 1
//               return (
//                   <>
//                       <label>
//                       <input type="radio" name="rate"
//                       value = {currentRate}
//                       onClick = {() => setRating(currentRate)}
//                       />
//                       <FaStar size={35}
//                       color={currentRate <= (rateColor || rating) ? "yellow" : "grey" }
//                        />
//                       </label>
//                   </>
//               )
//           })}
//       </>
//   )
// }

// {reviews && (
//   <div className="reviews">
//     <textarea
//     {reviews.map(Reviews => (
//       <p>{Reviews.Review} {Reviews.Dining} {"Rating:" + Reviews.rating}</p>
//     ))}
//     />
//   </div>
// )}