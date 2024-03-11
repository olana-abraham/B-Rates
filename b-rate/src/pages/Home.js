import ImageSlider from '../ImageSlider';
import '../home.css';
import Navbar from "../Navbar";
import homeImage from '/Users/deanali/Desktop/CS/CS35L/CS35L Project/B-Rates-3/b-rate/src/inforgraphicb-rates.png';




export default function Home() {
    return (
        <div>
        <Navbar />


        <div className ="outerhome">

            <div className = "left">

             
                <img src={homeImage} alt="HomeImage" className='image' />
            
           

            </div>

        
        
            <div className = "right">
            <h1>Welcome To B-Rates</h1>
            <h2>Explore campus dining like never before with our community-driven ratings!</h2>
           <p>"Welcome to B-Rate, your ultimate destination for exploring and reviewing the diverse dining options available at UCLA! Whether you're a food enthusiast, a health-conscious eater, or simply looking for the best dining hall experience, we've got you covered."</p>
          <a href="./Reviews"><button className = "homebutton1">Read Reviews</button></a> 
            <a href="./Login"><button className = "homebutton2">Login</button></a> 
            </div>







        </div>
</div>

    )

}
