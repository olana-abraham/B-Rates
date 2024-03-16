# CS35L-Final-Project: B-Rate

## Description
B-Rate, is the ultimate destination for exploring and reviewing the diverse dining options available at UCLA! Whether you're a food enthusiast, a health-conscious eater, or simply looking for the best dining hall experience, we've got you covered.

## Technologies
 - Javascript <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="javascript" width="30px">
 - Node.js <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="node.js" width="30px">
 - React.js <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react.js" width="30px">
 - Supabase <img src="https://yt3.googleusercontent.com/NuBWxGpdF0YzNSr7x_Tc8EEFXbQoHc0Xf9rU_ehxFPRikw8YPN886HltWeMDihKU8v5SeKFI3B4=s900-c-k-c0x00ffffff-no-rj" alt="react.js" width="30px">

## Key Features (Users are able to:)
1. Register, login, sign out, and reset password
3. Create profile through survey process after registering
4. Edit profile when logged in
5. Dynamically render sign out and profile if user is logged in
6. Review UCLA residential restaurants by leaving reviews and rating out of five stars
7. Filter through reviews by stars and dining hall or sort through reviews by date
8. Search through users to visit other user profiles
9. Search through reviews using keywords 
10. Navigate through different web pages and social media links through navbar or footer

## Running the Application

Clone the Repository:

##### `git clone https://github.com/olana-abraham/B-Rates.git`

##### `cd B-Rates`

### To run the React App:

##### `cd b-rate`

Open the .env file in the config folder. Add the following code:

```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL

const supabaseKey = process.env.REACT_APP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
```

##### `npm install`

##### `npm start`

You should be automatically directed to http://localhost:3000 in your browser to a fully usable application.
