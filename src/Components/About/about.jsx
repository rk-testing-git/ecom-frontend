import React from 'react';
import './../About/about.scss';

function About(){
    return(
        <div className="col-sm-9 mt-5 container">

            <h1 className="text-center pt-5 heading-text" >Welcome to Our Ecommerce App for Laptop and Accessories </h1>
            <div className="text-center pb-5 mb-5">
                <h4 className="text-center pt-5 body-text" >
                    Welcome !

                    Our goal is to provide you with a seamless shopping experience, whether you're looking for the latest laptops or high-quality accessories. We offer a wide selection of laptops from top brands such as Apple, Dell, HP, and Lenovo, as well as a variety of accessories to enhance your computing experience.
                </h4>
                <h4 className="text-center pb-5 body-text mt-5">
                    At our Ecommerce App, we understand that technology is constantly evolving, and we're dedicated to keeping up with the latest trends and innovations.
                    Thank you for choosing our Ecommerce App for Laptop and Accessories. We're excited to help you find the perfect products to meet your needs, and we're committed to providing you with the best possible shopping experience. If you have any questions or feedback, please don't hesitate to reach out to us.
                </h4>
                {/* In addition to our product offerings, we also provide a range of services to help you get the most out of your tech. Whether you need help with setup and installation, troubleshooting, or repair, our team of experts is here to help.
                            Our team of tech experts is always on the lookout for new products and features to improve your computing experience, and we're committed to providing you with the best possible service and support. */}

                <img src="assets/Home-images/about-us.png" alt="Description of the image" className="about-img" />

            </div>

        </div>
    )
}

export default About;