import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
import Navbar from "../Navbar"

const Reviews = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [Dining, setDining] = useState('')
  const [Review, setReview] = useState('')
  const [formError, setFormError] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const [reviews, setReviews] = useState(null)


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
    fetchReviews()
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
    setDining(null)
    setRating('')
    setReview('')

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className="page create">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">Review:</label>
        <input
          type="text"
          id="Review"
          value={Review}
          onChange={(e) => setReview(e.target.value)}
        />

        <select id="Foodspots" onChange={handleSelectChange}>
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

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Submit Review</button>
        {/* <button onClick={() => { 
    setReview("");
    setDining("");
    setRating("")
}}>Submit Review</button> */}

        {formError && <p className="error">{formError}</p>}
      </form>

      {fetchError && (<p>{fetchError}</p>)}
      {reviews && (
        <div className="reviews">
          {reviews.map(Reviews => (
            <p>{Reviews.Review} {Reviews.Dining} {"Rating:" + Reviews.rating}</p>
          ))}
        </div>
      )}


    </div>



  )
}

export default Reviews