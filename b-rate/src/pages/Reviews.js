import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
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
  const [rating, setRating] = useState('')

  //useEffect(() => {
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('Reviews')
      .select()
      .eq('Dining', Dining);

    if (error) {
      setFetchError('Could not fetch the reviews')
      setReviews(null)
      console.log(error)
    }
    if (data) {
      setReviews(data)
    }
  }
  //fetchReviews()
  //}, [])

  useEffect(() => {
    fetchReviews()
  }, [Dining])

  const handleSelectChange = async (event) => {
    setDining(event.target.value)    
    //console.log(Dining)
    //fetchReviews()
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!Review || !Dining || !rating) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('Reviews')
      .insert([{ rating, Dining, Review }])
      //fetchReviews()
    //setDining(null)
    setRating('')
    setReview('')
    setFormError("")

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      //console.log(data)
      setFormError("")
     // navigate('/')
    }
    fetchReviews();
  }

  return (
    
    <div className="page create">
       <select id="Foodspots" onChange={handleSelectChange} className="select-container">
          <option value="">Select Dining</option>
          <option value="Epicuria">Epicuria</option>
          <option value="Feast">Feast</option>
          <option value="De Neve">De Neve</option>
          <option value="Bruin Cafe">Bruin Cafe</option>
          <option value="Bruin Plate">Bruin Plate</option>
          <option value="The Study">The Study</option>
          <option value="Cafe 1919">Cafe 1919</option>
          <option value="Epic at Ackerman">Epic at Ackerman</option>
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
      {reviews && (
        <div className="textarea-container">
           <textarea
      value={reviews.map(review => `${review.Review} Rating: ${review.rating}`).join('\n')}
      rows={10} // Set the number of rows as per your requirement
      cols={50} // Set the number of columns as per your requirement
      readOnly // Make the textarea read-only
    />
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