# CS35L-Final-Project: B-Rate

## Key Features (Users are able to:)
1. Register, login, sign out, and reset password
3. Create profile through survey process after registering
4. Edit profile when logged in
5. Dynamically render sign out and profile if user is logged in
6. Review UCLA residential restaurants by leaving reviews and rating out of five stars
7. Filter through reviews by stars and dining hall or sort through reviews by date
8. Search through users to visit other user profiles
9. Navigate through different web pages and social media links through navbar or footer

## Running the Application

Clone the Repository:

##### `git clone https://github.com/olana-abraham/B-Rates.git`

##### `cd B-Rates`

### To run the React App:

##### `cd b-rate`

Open the .env file in the config folder. Add the following code:

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

##### `npm install`

##### `npm start`

You should be automatically directed to http://localhost:3000 in your browser to a fully usable application.
