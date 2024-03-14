import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
import Navbar from "../Navbar"
import { Link } from 'react-router-dom';

import './Reviews.css'
import {FaStar} from "react-icons/fa"


//Backend below

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
  const [otherUID, setotherUID] = useState('')
  const [ratingShown, setratingShown] = useState('')
  const [ordering, setOrdering] = useState(true)

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

  }

  

  useEffect(() => {
    fetchReviews();
}, [Dining, ratingShown, ordering]);


  const handleSelectChange = async (event) => {
    setDining(event.target.value)    
  
  }
  const handleSelectChange2 = async (event) => {
    setratingShown(parseInt(event.target.value))    
 
  }
  const handleSelectChange3 = async (event) => {
    if(event.target.value=="oldesttop")
    {
      setOrdering(true)    
    }
    else setOrdering(false)
  
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!Review || !Dining || !rating) {
      setFormError('Please fill in all the fields correctly.')
      return
    }
    
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user.id)
    
    setUID(user.id)
   
    

    const { data, error } = await supabase
    .from('Users')
    .select('Name')
    .eq('UID', user.id);
  
    const Name = data && data.length > 0 ? data[0].Name : '';
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
        setFormError("")
      }
      
    }
   
    setRating('')
    setReview('')
    setFormError("")


    fetchReviews();
  }




//Frontend below

  return (
    <div>
         <Navbar />
  <div className = 'reviewsside'>
    <div className="page create">

 
      
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
          {}
          <option value="oldesttop">Oldest to Newest</option>
          <option value="newesttop">Newest to Oldest</option>
        </select>

      <form onSubmit={handleSubmit}>
      <label htmlFor="review" className="reviewtag">REVIEWS</label>
        <textarea
          className="textarea"
          id="Review"
          value = {Review}
          onChange={(e) => setReview(e.target.value)}
          rows={6}
          cols={80}
        />
        {}

       

        <StarRate setParentRating={setRating} />
        {}

        <button className="blue-button" type="submit">Post Review</button>
        { 
    }

        {formError && <p className="error">{formError}</p>}
      </form>
      
      {fetchError && (<p>{fetchError}</p>)}
    

     
      
      {}

    </div>

  </div>
    { reviews && (
  <div className="outputside">
  {reviews.map((review, index) => (
    <textarea
    className="reviewoutput"
      key={index}
      value={`${review.Name} ${review.created_at ? review.created_at.substring(0, 10) + ' ' + review.created_at.substring(11, 16) : ''} \nRating: ${review.rating || ''} \n${review.Review || ''}`}
     
      rows={6} 
      cols={80} 
      readOnly 
    />
  ))}
</div>
)}
  </div>



   

  


  )}









//Star rating system


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
            <input type="radio"  name="rate" value={currentRate} style={{ display: 'none' }} />
            <FaStar
            className="starrate"
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



